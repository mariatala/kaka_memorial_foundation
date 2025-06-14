'use client';

import React, { useState } from 'react';
import { Inter, Gowun_Dodum } from 'next/font/google';
const inter = Inter({
	weight: ['200', '300', '400', '500', '600', '700', '800'],

	subsets: ['latin'],
});
const gowun = Gowun_Dodum({ weight: '400', subsets: ['latin'] });

const DonateSection: React.FC = () => {
	const [frequency, setFrequency] = useState<'One time' | 'Monthly'>('Monthly');
	const [amount, setAmount] = useState<number | 'Other'>(10);

	const handleFrequency = (value: 'One time' | 'Monthly') =>
		setFrequency(value);
	const handleAmount = (value: number | 'Other') => setAmount(value);

	return (
		<section className="w-full bg-primary text-light flex flex-col pl-8 lg:flex-row">
			{/* Left: Donation Form */}
			<div className="w-full lg:w-2/3 px-6 py-10 space-y-6">
				<h2 className="text-2xl font-semibold">
					<span className={`block text-light text-5xl ${gowun.className}`}>
						Donate Online:
					</span>
					<span
						className={`text-base italic text-accent-three  font-medium ${inter.className}`}
					>
						Donate Today. Change a Life Forever
					</span>
				</h2>

				<p
					className={`text-light text-sm font-light max-w-2xl tracking-wider leading-8 ${inter.className}`}
				>
					Your gift helps us provide clean water, education, healthcare, and
					hope to vulnerable communities. Every amount makes a difference — no
					act of kindness is too small.
				</p>

				{/* Frequency */}
				<div className="mt-8">
					<p className="mb-2 font-medium">Frequency:</p>
					<div className="flex gap-4">
						{['One time', 'Monthly'].map((type) => (
							<button
								key={type}
								onClick={() => handleFrequency(type as 'One time' | 'Monthly')}
								className={`px-4 py-2 rounded-xs bg-light text-primary font-semibold ${
									frequency === type ? 'ring-2 ring-secondary' : ''
								}`}
							>
								{type}
							</button>
						))}
					</div>
				</div>

				{/* Amount */}
				<div>
					<p className="mb-2 font-medium">Amount:</p>
					<div className="grid grid-cols-3 gap-4 max-w-md">
						{[10, 50, 100, 200, 'Other'].map((val) => (
							<button
								key={val}
								onClick={() => handleAmount(val as number | 'Other')}
								className={`px-4 py-2 rounded-xs bg-light text-primary font-semibold ${
									amount === val ? 'ring-2 ring-secondary' : ''
								}`}
							>
								{typeof val === 'number' ? `$${val}` : val}
							</button>
						))}
					</div>
				</div>

				{/* Submit */}
				<div>
					<button className="w-full max-w-md bg-secondary hover:bg-secondary transition text-primary font-bold py-3 rounded-xs">
						Donate {typeof amount === 'number' ? `$${amount}` : 'Now'}{' '}
						{frequency}
					</button>
				</div>
			</div>

			{/* Right: Contact Info */}
			<div className="w-full lg:w-1/3 flex flex-col justify-evenly items-center text-center bg-accent-three text-primary px-6 py-10 space-y-12">
				<div>
					<h3 className="text-lg font-semibold uppercase mb-2">In Person</h3>
					<p className="text leading-8">
						Address: 2345 Lagos, Nigeria
						<br />
						Email:{' '}
						<a
							href="mailto:kakamemorialfoundation@gmail.com"
							className="underline"
						>
							kakamemorialfoundation@gmail.com
						</a>
					</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold uppercase mb-2">
						Over the Phone
					</h3>
					<p className="text leading-8">
						It is easy to donate offline too.
						<br />
						Call:{' '}
						<a href="tel:+2349028123427" className="underline font-medium">
							+234 9028123427
						</a>
					</p>
				</div>
			</div>
		</section>
	);
};

export default DonateSection;
