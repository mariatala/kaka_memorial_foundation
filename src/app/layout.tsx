import { Nunito } from 'next/font/google';
import './globals.css';

import Footer from '@/components/Footer';

const nunito = Nunito({
	weight: ['200', '300', '400', '500', '700'],
	subsets: ['latin'],
	variable: '--font-geist-sans',
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
