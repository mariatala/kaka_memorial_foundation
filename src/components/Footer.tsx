import React from 'react';
import { Mail, PhoneCall, MapPin, MessageCircleHeart } from 'lucide-react';
import { Inter, Gowun_Dodum } from 'next/font/google';
const inter = Inter({
	weight: ['200', '300', '400', '500', '600', '700', '800'],
	subsets: ['latin'],
});
const gowun = Gowun_Dodum({ weight: '400', subsets: ['latin'] });

const Footer = () => {
	return (
		<footer className="flex flex-col justify-center">
			<div className="w-full flex flex-col lg:flex-row mx-auto">
				{/* Left Column */}
				<div className="bg-primary w-full lg:w-2/3">
					<div className="flex flex-col text-light p-8 md:p-12 lg:p-16 h-full">
						<div className="w-full  flex flex-col justify-center items-start gap-2">
							<h3
								className={`text-3xl md:text-5xl  tracking-widest uppercase text-light ${gowun.className}`}
							>
								Contact Us:
							</h3>
							<div className="w-16 h-1 bg-secondary rounded-full" />
							<h4 className="text-xl text-secondary font-semibold tracking-wide mt-2">
								Let's talk, your voice matters
							</h4>
						</div>
						<p
							className={`mt-8 tracking-wider text-accent-three text-sm leading-7 ${gowun.className}`}
						>
							Have questions, ideas, or want to get involved? The team at Kaka
							Memorial Foundation is here to connect with you. Whether you're
							looking to volunteer, partner, or simply learn more — reach out!
						</p>

						<div
							className={`contact-info flex flex-col gap-4 mt-8 ${inter.className}`}
						>
							<p className="text-lg tracking-wide font-semibold text-secondary">
								Get in Touch:
							</p>
							<div className="flex flex-col gap-4 text-sm font-light">
								<p className="flex items-center gap-2">
									<Mail />
									<a href="mailto:kakafoundation@gmail.com">
										kakafoundation@gmail.com
									</a>
								</p>
								<p className="flex items-center gap-2">
									<PhoneCall />
									<a href="tel:+1234567890">+1 (234) 567-890</a>
								</p>
								<p className="flex items-center gap-2">
									<MapPin />
									123 Charity Lane, City, State, Zip Code
								</p>
								<p className="flex items-center gap-2">
									<MessageCircleHeart />{' '}
									<a href="https://wa.me/1234567890">+1 (234) 567-890</a>
								</p>
								<p className="flex items-center gap-4">
									Registered Charity:193031
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Right Column */}
				<div className="bg-accent-three w-full lg:w-1/3 text-primary">
					<div className="flex flex-col p-8 md:p-12 lg:p-16 h-full">
						<h4
							className={`text-2xl md:text-3xl tracking-widest font-semibold uppercase mb-2 ${gowun.className}`}
						>
							Be the first to know:
						</h4>
						<h5
							className={`tracking-wide text-lg md:text-xl mb-4 font-medium ${inter.className}`}
						>
							Stay informed and inspired
						</h5>
						<p
							className={`tracking-wider text-sm leading-7 mb-6  ${gowun.className}`}
						>
							Sign up for our newsletter to get the latest updates, inspiring
							stories, and ways to get involved with Kaka Memorial Foundation.
						</p>
						<form className={`flex flex-col gap-4  ${inter.className}`}>
							<div>
								<label
									htmlFor="email"
									className="block mb-1 text-sm font-medium"
								>
									Email:
								</label>
								<input
									id="email"
									type="email"
									className="w-full px-4 py-2 border-b-2 border-primary focus:border-secondary focus:outline-none bg-transparent text-primary placeholder:text-primary"
									placeholder="you@example.com"
								/>
							</div>
							<div className="flex items-center gap-2">
								<input
									type="checkbox"
									id="terms"
									name="terms"
									className="accent-secondary border-2 border-secondary focus:ring-2 focus:ring-secondary size-5"
								/>
								<label htmlFor="terms" className="text-sm">
									Yes, subscribe to our newsletter
								</label>
							</div>
							<button
								type="submit"
								className="mt-4 bg-primary text-white py-2 px-4 rounded-sm hover:bg-opacity-90"
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div
				className={`bg-primary-dark text-light py-4 flex flex-col items-center justify-center text-center ${inter.className}`}
			>
				<p className="text-sm">
					&copy; {new Date().getFullYear()} Kaka Memorial Foundation. All rights
					reserved.
				</p>
				<p className="text-xs mt-2">
					Made with ❤️ by the Kaka Memorial Foundation Team
				</p>
			</div>
		</footer>
	);
};

export default Footer;
