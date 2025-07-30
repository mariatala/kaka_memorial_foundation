'use client';
// app/login/page.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

/**
 * Page component for admin login
 */
export default function LoginPage() {
	const router = useRouter();
	const [credentials, setCredentials] = useState({
		username: '',
		password: '',
	});
	const [error, setError] = useState<string | null>(null);

	// Update controlled inputs
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setCredentials((prev) => ({ ...prev, [name]: value }));
	};

	// Perform sign-in and navigate on success
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);

		const res = await signIn('credentials', {
			redirect: false,
			username: credentials.username,
			password: credentials.password,
		});

		if (res?.error) {
			setError('Invalid username or password');
		} else {
			router.push('/registrations');
			router.refresh();
		}
	};

	return (
		<main className="flex flex-col items-center justify-center p-4">
			<h1 className="text-2xl mb-4">Administrator Login</h1>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-2 w-full max-w-sm"
			>
				<input
					name="username"
					type="text"
					value={credentials.username}
					onChange={handleChange}
					placeholder="Username"
					className="border p-2 rounded"
					required
				/>
				<input
					name="password"
					type="password"
					value={credentials.password}
					onChange={handleChange}
					placeholder="Password"
					className="border p-2 rounded"
					required
				/>
				{error && <p className="text-red-500">{error}</p>}
				<button
					type="submit"
					className="mt-2 bg-primary-dark text-white px-4 py-2 rounded"
				>
					Log In
				</button>
			</form>
			<Link href="/" className="mt-4 text-secondary underline">
				Back to Home
			</Link>
		</main>
	);
}
import {NextResponse} from  'next/server'
import {NextRequest} from  'next/server'

export function middleware(request: NextRequest){
	return NextResponse.redirect( new URL('/', request.url));
}

export const config ={
	matcher:'/profile'
}