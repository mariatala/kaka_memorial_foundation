import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const nunito = Nunito({
	weight: ['200', '300', '400', '500', '700'],
	subsets: ['latin'],
	variable: '--font-geist-sans',
});

import { Inter } from 'next/font/google';
const inter = Inter({
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${nunito.variable} ${nunito.variable} antialiased`}>
			
				{children}
				<Footer />
			</body>
		</html>
	);
}
