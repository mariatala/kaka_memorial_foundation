'use client';

import Link from 'next/link';
import Header from '../components/Header'; // Make sure the path is correct
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const HeroSection = () => {
	return (
		<section
			className="relative w-full h-screen bg-cover bg-center"
			style={{ backgroundImage: "url('/cover_image.jpeg')" }}
		>
			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-primary-dark/40 to-primary-dark/100 z-0" />

			{/* Fixed Header on top */}
			<div className="fixed top-0 left-0 w-full z-50">
				<Header />
			</div>

			{/* Hero Content */}
			<div className="relative z-10  h-full flex flex-col-reverse gap-8 md:flex-row items-center mt-16 justify-center  md:justify-between text-justify py-32">
				{/* Social Icons */}
				<div className="social-icons p-3 md:bg-secondary mx-4 rounded-sm flex flex-row md:flex-col items-center justify-center gap-6">
					<Link
						href="https://www.facebook.com/kakamemorialfoundation"
						target="_blank"
						className=" text-secondary md:text-white hover:text-accent-three md:hover:text-primary transition-colors duration-300 ease-in-out"
					>
						<FaFacebook className="size-6" />
					</Link>
					<Link
						href="https://www.instagram.com/kakamemorialfoundation/"
						target="_blank"
						className="text-secondary md:text-white hover:text-accent-three md:hover:text-primary transition-colors duration-300 ease-in-out"
					>
						<FaInstagram className="size-6" />
					</Link>
					<Link
						href="https://www.linkedin.com/company/kaka-memorial-foundation/"
						target="_blank"
						className="text-secondary md:text-white hover:text-accent-three md:hover:text-primary transition-colors duration-300 ease-in-out"
					>
						<FaLinkedin className="size-6" />
					</Link>
					<Link
						href="https://www.linkedin.com/company/kaka-memorial-foundation/"
						target="_blank"
						className="text-secondary md:text-white hover:text-accent-three md:hover:text-primary transition-colors duration-300 ease-in-out"
					>
						<FaTwitter className="size-6" />
					</Link>
				</div>

				{/* Hero Text Content */}
				<div className="flex flex-col md:justify-center justify-start gap-4 text-white  w-5/6 xl:w-2/3 bg-secondary px-3 md:px-6 lg:px-12 py-6 rounded-sm md:rounded-none">
					<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Nunito'] font-semibold text-center md:text-justify  tracking-wider uppercase text-primary">
						Connecting Communities
					</h1>
					<p className="text-lg md:text-2xl font-medium text-center md:text-justify tracking-wider font-['Inter']">
						Engaging Stakeholders For Real Impact
					</p>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
