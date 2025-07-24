import { Nunito } from 'next/font/google';

import './globals.css';
import Providers from '@/components/Providers';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import Header from '@/components/Header';
import FooterController from '@/components/FooterController';

const nunito = Nunito({
	weight: ['200', '300', '400', '500', '700'],
	subsets: ['latin'],
	variable: '--font-geist-sans',
});

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	//Fetch session data on the server
	const session = await getServerSession(authOptions);
	return (
		<html lang="en">
			<body className={`${nunito.variable} ${nunito.variable} antialiased`}>
				<Providers session={session}>
					<Header />
					<main> {children}</main>
					<FooterController />
				</Providers>
			</body>
		</html>
	);
}
