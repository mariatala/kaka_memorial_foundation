'use client';

import React, { useState } from 'react';
import {
	Mail,
	Phone,
	HeartHandshake,
	Users,
	Handshake,
	HandHeart,
} from 'lucide-react';
import Header from '@/components/Header';
import { Inter, Gowun_Dodum } from 'next/font/google';

const inter = Inter({
	weight: ['200', '300', '400', '500', '600', '700', '800'],
	subsets: ['latin'],
});
const gowun = Gowun_Dodum({ weight: '400', subsets: ['latin'] });

const ContactPage: React.FC = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!form.name || !form.email || !form.message) {
			alert('Please fill in all required fields.');
			return;
		}
		console.log('Contact Form Submission:', form);
		setSubmitted(true);
	};

	return (
		<main className="w-full flex flex-col items-center justify-start min-h-screen bg-light text-primary">
			<Header
				bgColor="bg-white"
				textColor="text-primary"
				scrolledBgColor="bg-primary"
				scrolledTextColor="text-light"
			/>

			{/* Hero Section */}
			<section className="w-full px-4 md:px-8 py-20 mt-24 text-center space-y-6">
				<div className="max-w-3xl mx-auto space-y-4">
					<h2 className={`text-3xl md:text-5xl uppercase ${gowun.className}`}>
						Get In Touch
					</h2>
					<div className="w-16 h-1 mx-auto bg-secondary rounded-full" />
					<p
						className={`text-lg md:text-xl text-secondary font-semibold ${inter.className}`}
					>
						Let’s Connect & Create Change
					</p>
					<p className="text-base md:text-lg">
						Have a question, an idea, or just want to say hi? Whether you're a
						changemaker, donor, partner, or volunteer — this is your space to
						reach out.
					</p>
				</div>
			</section>

			{/* Info Cards */}
			<section className="w-full px-4 md:px-16 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center">
				<ActionCard
					icon={<Users className="w-10 h-10 mx-auto text-secondary" />}
					title="Join Our Community"
					description="Be part of a movement making impact across Nigeria."
				/>
				<ActionCard
					icon={<Handshake className="w-10 h-10 mx-auto text-secondary" />}
					title="Partner With Us"
					description="Align your brand with purpose and sustainable growth."
				/>
				<ActionCard
					icon={<HeartHandshake className="w-10 h-10 mx-auto text-secondary" />}
					title="Volunteer Today"
					description="Use your skills and time to directly impact lives."
				/>
			</section>

			{/* Contact Form & Info */}
			<section className="w-full max-w-7xl px-4 md:px-8 py-12 flex flex-col lg:flex-row gap-12">
				{/* Form */}
				<div className="w-full lg:w-2/3 bg-white shadow-md rounded-lg px-6 py-10 space-y-6">
					<h2 className="text-2xl font-bold text-indigo-900">
						Send Us a Message
					</h2>
					<p className="text-sm text-gray-600">
						Let us know what’s on your mind — we’ll get back to you as soon as
						possible.
					</p>

					{submitted ? (
						<div className="text-green-700 font-medium text-lg">
							✅ Thank you! Your message has been received.
						</div>
					) : (
						<form
							onSubmit={handleSubmit}
							className="grid grid-cols-1 md:grid-cols-2 gap-6"
						>
							<input
								type="text"
								name="name"
								required
								placeholder="Your Name"
								value={form.name}
								onChange={handleChange}
								className="col-span-2 border-b border-gray-300 bg-transparent p-2 focus:outline-none focus:border-b-2 focus:border-primary"
							/>
							<input
								type="email"
								name="email"
								required
								placeholder="Your Email"
								value={form.email}
								onChange={handleChange}
								className="col-span-2 border-b border-gray-300 bg-transparent p-2 focus:outline-none focus:border-b-2 focus:border-primary"
							/>
							<input
								type="text"
								name="subject"
								placeholder="Subject"
								value={form.subject}
								onChange={handleChange}
								className="col-span-2 border-b border-gray-300 bg-transparent p-2 focus:outline-none focus:border-b-2 focus:border-primary"
							/>
							<textarea
								name="message"
								required
								rows={5}
								placeholder="Your Message"
								value={form.message}
								onChange={handleChange}
								className="col-span-2 border-b border-gray-300 bg-transparent p-2 focus:outline-none focus:border-b-2 focus:border-primary"
							/>
							<div className="col-span-2">
								<button
									type="submit"
									className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-md transition"
								>
									Send Message
								</button>
							</div>
						</form>
					)}
				</div>

				{/* Contact Info */}
				<div className="w-full lg:w-1/3 bg-primary text-white px-6 py-10 rounded-lg space-y-6">
					<ContactInfo
						icon={<Mail />}
						title="Email Us"
						content="kakamemorialfoundation@gmail.com"
					/>
					<ContactInfo
						icon={<Phone />}
						title="Call Us"
						content="+234 9028123427"
					/>
					<ContactInfo
						icon={<Users />}
						title="Visit Us"
						content="2345 Lagos, Nigeria"
					/>
				</div>
			</section>

			{/* Bottom CTA */}
			<section className="w-full mt-24 bg-secondary text-light text-center px-6 py-12 space-y-6">
				<HandHeart
					className="w-16 h-16 mx-auto text-light animate-bounce"
					strokeWidth={1}
				/>
				<h2 className={`text-3xl md:text-4xl font-bold ${gowun.className}`}>
					Let’s Build the Future Together
				</h2>
				<p
					className={`max-w-2xl mx-auto text-base font-light tracking-wide ${inter.className}`}
				>
					We believe in people-powered change. Whether it's a question, a
					connection, or a contribution — this is your moment to start something
					meaningful.
				</p>
			</section>
		</main>
	);
};

export default ContactPage;

// Action Card Component
const ActionCard = ({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) => (
	<div className="bg-white shadow-md hover:shadow-lg transition rounded-lg px-6 py-8 space-y-4">
		{icon}
		<h3 className="text-lg font-semibold text-primary">{title}</h3>
		<p className="text-sm text-primary">{description}</p>
	</div>
);

// Contact Info Row
const ContactInfo = ({
	icon,
	title,
	content,
}: {
	icon: React.ReactNode;
	title: string;
	content: string;
}) => (
	<div>
		<div className="flex items-center gap-2 font-semibold text-lg mb-1">
			{icon}
			<span>{title}</span>
		</div>
		<p className="text-sm">{content}</p>
	</div>
);
