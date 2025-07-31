'use client';

import { motion, AnimatePresence, easeInOut, easeOut } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect, Children, isValidElement } from 'react';
import Image from 'next/image';

// Animation presets
const fadeInUp = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: easeOut },
	},
};

const staggerContainer = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.8 } },
};

interface PageTransitionProps {
	children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
	const pathname = usePathname();
	const [isFirstLoad, setIsFirstLoad] = useState(true);
	const [isTransitioning, setIsTransitioning] = useState(false);

	// Handle first load
	useEffect(() => {
		const timer = setTimeout(() => setIsFirstLoad(false), 800);
		return () => clearTimeout(timer);
	}, []);

	// Handle route changes
	useEffect(() => {
		if (!isFirstLoad) {
			setIsTransitioning(true);
			const timer = setTimeout(() => setIsTransitioning(false), 600);
			return () => clearTimeout(timer);
		}
	}, [pathname, isFirstLoad]);

	const showOverlay = isFirstLoad || isTransitioning;

	// Auto-wrap block-level children for animation
	const animatedChildren = Children.map(children, (child, index) => {
		if (isValidElement(child)) {
			return (
				<motion.div
					key={index}
					variants={fadeInUp}
					initial="hidden"
					animate={index === 0 ? 'visible' : undefined} // First section animates immediately
					whileInView={index > 0 ? 'visible' : undefined} // Others animate on scroll
					viewport={{ once: true, amount: 0.8 }}
				>
					{child}
				</motion.div>
			);
		}
		return child;
	});

	return (
		<>
			{/* Loader/Transition Overlay */}
			<AnimatePresence>
				{showOverlay && (
					<motion.div
						className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary text-light"
						initial={{ opacity: 1 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.4, ease: easeInOut }}
					>
						<div className="animate-pulse-slow">
							<Image
								src="/logo.png"
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

			{/* Page fade-in */}
			<AnimatePresence mode="wait">
				<motion.div
					key={pathname}
					initial="hidden"
					animate="visible"
					exit={{ opacity: 0, y: -10 }}
					variants={staggerContainer}
					transition={{ duration: 0.4, ease: easeInOut }}
					className="min-h-screen"
				>
					{animatedChildren}
				</motion.div>
			</AnimatePresence>
		</>
	);
}
