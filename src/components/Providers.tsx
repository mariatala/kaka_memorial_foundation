'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
interface ProviderProps {
	session: Session | null;
	children: React.ReactNode;
}

export default function Providers({ session, children }: ProviderProps) {
	return <SessionProvider session={session}>{children}</SessionProvider>;
}
