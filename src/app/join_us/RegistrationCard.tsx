'use client';

import React, { useState } from 'react';
import InputField from '@/components/FormComponents/InputField';
import TextAreaField from '@/components/FormComponents/TextAreaField';
import { useRouter } from 'next/navigation';
import { Gowun_Dodum } from 'next/font/google';

const gowun = Gowun_Dodum({ weight: '400', subsets: ['latin'] });

interface RegistrationFormData {
	name: string;
	phone: string;
	email?: string;
	address?: string;
	message?: string;
}

type RegistrationType = 'partner' | 'volunteer';

interface RegistrationCardProps {
	formType: RegistrationType;
}

const RegistrationCard: React.FC<RegistrationCardProps> = ({ formType }) => {
	const replace = useRouter().replace;
	// State to manage form submission status
	const [pending, setPending] = useState(false);
	// State to manage form data
	const [formData, setFormData] = useState<RegistrationFormData>({
		name: '',
		phone: '',
		email: '',
		address: '',
		message: '',
	});

	const [submitted, setSubmitted] = useState(false);
	const isPartner = formType === 'partner';
	const titleColor = isPartner ? 'text-primary' : 'text-secondary';
	const buttonColor = isPartner
		? 'bg-primary hover:bg-primary'
		: 'bg-secondary hover:bg-secondary';
	const hoverButtonColor = isPartner
		? 'hover:bg-primary/90'
		: 'hover:bg-secondary/90';
	const disabledButtonColor = isPartner
		? 'bg-primary/50 cursor-not-allowed'
		: 'bg-secondary/50 cursor-not-allowed';
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

		setPending(true);
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
		} finally {
			setPending(false);
		}
	};
	return (
		<div className="w-full max-w-5xl mx-auto bg-white border border-gray-200 shadow-md rounded-md p-8 space-y-6">
			<h2 className={`text-2xl font-bold ${titleColor} text-center`}>
				{title}
			</h2>

			<p
				className={`${gowun.className} text-primary leading-8 tracking-wide text-center sm:px-4 w-full mt-8 md:w-3/4 lg:w-2/3 mx-auto`}
			>
				{description}
			</p>

			{submitted ? (
				<div className=" flex flex-col text-center space-y-4">
					<p className="text-secondary text-center font-medium">
						Thank you! Your {formType} registration has been received. We’ll be
						in touch shortly.
					</p>
					<button
						className=" mx-auto w-fit text-sm text-primary hover:font-semibold hover:text-white hover:cursor-pointer px-4 py-2 rounded-md hover:bg-primary-dark mt-2"
						onClick={() => {
							setFormData({
								name: '',
								phone: '',
								email: '',
								address: '',
								message: '',
							});
							setSubmitted(false);
						}}
					>
						Submit another registration
					</button>
				</div>
			) : (
				<form
					onSubmit={handleSubmit}
					className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24"
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

					{/* Right Column */}
					<div className="space-y-4">
						<InputField
							label="Email (optional)"
							name="email"
							type="email"
							value={formData.email || ''}
							onChange={handleChange}
							focusColor={focusBorderColor}
						/>

						<TextAreaField
							label="Address"
							name="address"
							value={formData.address || ''}
							onChange={handleChange}
							rows={2}
							focusColor={focusBorderColor}
						/>
					</div>

					{/* Submit Button */}
					<div className="md:col-span-2">
						<button
							type="submit"
							className={`w-full ${
								pending
									? disabledButtonColor
									: `${buttonColor} ${hoverButtonColor}`
							} text-white font-semibold py-3 rounded-md transition hover:cursor-pointer`}
							disabled={pending}
						>
							{pending ? 'Submitting...' : buttonText}
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default RegistrationCard;
