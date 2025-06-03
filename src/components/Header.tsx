'use client';
import * as React from 'react';
import Link from 'next/link';
import { HeartHandshake, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [scrolled, setScrolled] = React.useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	React.useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 60) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 px-2 md:px-8 lg:px-16 ${
				scrolled ? 'bg-primary py-2 shadow-md' : 'bg-transparent py-4'
			}`}
		>
			<div className="flex justify-between items-center w-full transition-all duration-300">
				{/* Logo */}
				<Link href="/" className="flex items-center">
					<Image
						src="/Logo.png"
						alt="Kaka Memorial Foundation Logo"
						width={100}
						height={100}
						className={`h-auto transition-all duration-300 ${
							scrolled ? 'w-20' : 'w-28'
						}`}
					/>
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center gap-6 lg:gap-8 tracking-wider font-medium uppercase text-light">
					<Link href="/" className="hover:text-secondary">
						Home
					</Link>
					<Link href="/about" className="hover:text-secondary">
						About
					</Link>
					<Link href="/causes" className="hover:text-secondary">
						Causes
					</Link>
					<Link href="/events" className="hover:text-secondary">
						Events
					</Link>
					<Link href="/join_us" className="hover:text-secondary">
						Join Us
					</Link>
					<Link href="/contact" className="hover:text-secondary">
						Contact
					</Link>
				</nav>

				{/* Donate Button */}
				<Link
					href="/join_us"
					className="hidden md:flex items-center gap-2 text-lg text-secondary px-4 py-1 rounded-sm border-2 border-secondary hover:bg-secondary hover:text-light transition-colors duration-300"
				>
					Donate Now <HeartHandshake size={20} />
				</Link>

				{/* Mobile Menu Toggle */}
				<button onClick={toggleMenu} className="md:hidden text-light">
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Mobile Nav */}
			{isOpen && (
				<div className="md:hidden mt-4 flex flex-col gap-8 bg-primary px-4 py-4 rounded text-light capitalize transition-all duration-300">
					{[
						{ href: '/', label: 'Home' },
						{ href: '/about', label: 'About' },
						{ href: '/causes', label: 'Causes' },
						{ href: '/events', label: 'Events' },
						{ href: '/join_us', label: 'Join Us' },
						{ href: '/contact', label: 'Contact' },
					].map(({ href, label }) => (
						<Link
							key={label}
							href={href}
							onClick={toggleMenu}
							className="hover:text-secondary"
						>
							{label}
						</Link>
					))}
					<Link
						href="/join_us"
						onClick={toggleMenu}
						className="w-fit flex items-center gap-2 bg-secondary px-3 py-1 rounded-sm hover:bg-primary-dark hover:text-light text-lg text-light border-secondary transition-colors duration-300"
					>
						Donate Now <HeartHandshake size={20} />
					</Link>
				</div>
			)}
		</header>
	);
};

export default Header;
