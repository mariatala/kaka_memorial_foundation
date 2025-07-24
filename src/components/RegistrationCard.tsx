'use client';

import React, { useState } from 'react';
import InputField from '@/components/FormComponents/InputField';
import TextAreaField from '@/components/FormComponents/TextAreaField';

interface RegistrationFormData {
	name: string;
	phone: string;
	pointOfContact?: string;
	address?: string;
	socialLinks?: string;
	message?: string;
}

type RegistrationType = 'partner' | 'volunteer';

interface RegistrationCardProps {
	formType: RegistrationType;
}

const RegistrationCard: React.FC<RegistrationCardProps> = ({ formType }) => {
	const [formData, setFormData] = useState<RegistrationFormData>({
		name: '',
		phone: '',
		pointOfContact: '',
		address: '',
		socialLinks: '',
		message: '',
	});

	const [submitted, setSubmitted] = useState(false);

	const isPartner = formType === 'partner';
	const titleColor = isPartner ? 'text-primary' : 'text-secondary';
	const buttonColor = isPartner
		? 'bg-primary hover:bg-primary'
		: 'bg-secondary hover:bg-secondary';
	const focusBorderColor = isPartner
		? 'focus:border-primary focus:ring-primary'
		: 'focus:border-secondary focus:ring-secondary';

	const title = isPartner ? 'Partner with Us' : 'Volunteer with Us';
	const description = isPartner
		? 'Join hands with the Kaka Memorial Foundation as a partner. Let’s create meaningful impact together through collaboration, support, and shared values.'
		: 'Sign up to volunteer with the Kaka Memorial Foundation. Your time, skills, and compassion can make a real difference in the lives of others.';
	const buttonText = isPartner
		? 'Submit Partnership Request'
		: 'Submit Volunteer Form';

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!formData.name || !formData.phone) {
			alert('Please fill in all required fields.');
			return;
		}

		try {
			const res = await fetch('api/register', {
				method: 'POST',
				headers: { 'content-type': 'application/JSON' },
				body: JSON.stringify({
					...formData,
					formType,
				}),
			});
			if (!res.ok) {
				const err = await res.json();
				throw new Error(`Error: ${err.message}` || 'Failed to submit form');
			}
			setSubmitted(true);
		} catch (error: any) {
			console.error(`Registration Error:`, error);
			alert(
				`Registration Failed ${error.message}` || 'Please try again later.'
			);
		}
	};

	return (
		<div className="w-full max-w-5xl mx-auto bg-white border border-gray-200 shadow-md rounded-md p-8 space-y-6">
			<h2 className={`text-2xl font-bold ${titleColor} text-center`}>
				{title}
			</h2>

			<p className="text-sm text-primary text-center max-w-xl mx-auto pb-8">
				{description}
			</p>

			{submitted ? (
				<div className="text-green-600 text-center font-medium">
					Thank you! Your {formType} registration has been received. We’ll be in
					touch shortly.
				</div>
			) : (
				<form
					onSubmit={handleSubmit}
					className="grid grid-cols-1 md:grid-cols-2 gap-8"
				>
					{/* Left Column */}
					<div className="space-y-4">
						<InputField
							label="Name"
							name="name"
							required
							value={formData.name}
							onChange={handleChange}
							focusColor={focusBorderColor}
						/>
						<InputField
							label="Phone Number"
							name="phone"
							required
							type="tel"
							value={formData.phone}
							onChange={handleChange}
							focusColor={focusBorderColor}
						/>

						<InputField
							label="Point of Contact"
							name="pointOfContact"
							value={formData.pointOfContact || ''}
							onChange={handleChange}
							focusColor={focusBorderColor}
						/>
					</div>

					{/* Right Column */}
					<div className="space-y-4">
						<TextAreaField
							label="Address"
							name="address"
							value={formData.address || ''}
							onChange={handleChange}
							rows={2}
							focusColor={focusBorderColor}
						/>
						<InputField
							label={
								isPartner
									? 'Social Media or Website Link'
									: 'Social Media (optional)'
							}
							name="socialLinks"
							type="url"
							value={formData.socialLinks || ''}
							onChange={handleChange}
							focusColor={focusBorderColor}
						/>
						<TextAreaField
							label="Leave a Message"
							name="message"
							value={formData.message || ''}
							onChange={handleChange}
							rows={2}
							placeholder={
								isPartner
									? 'Tell us how you’d like to partner with us'
									: 'Tell us about your interest or availability'
							}
							focusColor={focusBorderColor}
						/>
					</div>

					{/* Submit Button */}
					<div className="md:col-span-2">
						<button
							type="submit"
							className={`w-full ${buttonColor} text-white font-semibold py-3 rounded-md transition`}
						>
							{buttonText}
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default RegistrationCard;
