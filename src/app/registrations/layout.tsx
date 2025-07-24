"use client";
import RegistrationFooter from '@/components/admin/RegistrationFooter';
import { SessionProvider } from 'next-auth/react';
export default function RegistrationLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen flex flex-col">
			<main className="flex-grow">
				<SessionProvider>
					{children}</SessionProvider>
			</main>
			{/* Overide the RootLayout <Footer /> */}
			<RegistrationFooter />
		</div>
	);
}
