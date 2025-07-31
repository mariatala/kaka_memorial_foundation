'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface PageTransitionProps {
	children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
	const pathname = usePathname();
	const [isFirstLoad, setIsFirstLoad] = useState(true);
	const [isTransitioning, setIsTransitioning] = useState(false);

	// Handle first page load
	useEffect(() => {
		const timer = setTimeout(() => setIsFirstLoad(false), 500); // show loader for 0.5s
		return () => clearTimeout(timer);
	}, []);

	// Handle route changes
	useEffect(() => {
		if (!isFirstLoad) {
			setIsTransitioning(true);
			const timer = setTimeout(() => setIsTransitioning(false), 300);
			return () => clearTimeout(timer);
		}
	}, [pathname, isFirstLoad]);

	const showOverlay = isFirstLoad || isTransitioning;

	return (
		<>
			{/* Loader/Transition Overlay */}
			<AnimatePresence>
				{showOverlay && (
					<motion.div
						className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary-dark text-light"
						initial={{ opacity: 1 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.4 }}
					>
						<div className="animate-pulse-slow">
							<Image
								src="/logo.png" // replace with your actual logo in /public
								alt="Kaka Memorial Foundation Logo"
								width={120}
								height={120}
								priority
							/>
						</div>
						<p className="mt-3 text-lg opacity-80 animate-pulse">
							Connecting Communities...
						</p>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Page Content Fade/Slide */}
			<AnimatePresence mode="wait">
				<motion.div
					key={pathname}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
					className="min-h-screen"
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</>
	);
}
