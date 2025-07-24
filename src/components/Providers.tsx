'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
interface ProviderProps {
	session: any;
	children: React.ReactNode;
}

export default function Providers({ session, children }: ProviderProps) {
	return <SessionProvider session={session}>{children}</SessionProvider>;
}
