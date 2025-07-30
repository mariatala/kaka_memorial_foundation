'use client';
import RegistrationFooter from '@/app/registrations/RegistrationFooter';
import { SessionProvider } from 'next-auth/react';
export default function RegistrationLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col min-h-screen justify-between bg-gray-100">
			<main className="flex-grow my-auto">
				<SessionProvider>{children}</SessionProvider>
			</main>
			{/* Overide the RootLayout <Footer /> */}
			<RegistrationFooter />
		</div>
	);
}
