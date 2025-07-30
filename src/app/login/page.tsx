'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

export default function LoginPage() {
	const router = useRouter();
	const [credentials, setCredentials] = useState({ username: '', password: '' });
	const [error, setError] = useState<string | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setCredentials((prev) => ({ ...prev, [name]: value }));
	};

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
			<h1 className="text-2xl mb-12">Administrator Login</h1>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-6 w-full max-w-sm"
				noValidate
			>
				<input
					name="username"
					type="text"
					value={credentials.username}
					onChange={handleChange}
					placeholder="Username"
					className={`border-2 border-gray-300  p-2 rounded ${error && !credentials.username ? 'border-red-500' : ''}`}
					required
					minLength={3}
					maxLength={32}
					autoComplete="username"
				/>
				<input
					name="password"
					type="password"
					value={credentials.password}
					onChange={handleChange}
					placeholder="Password"
					className={`border-2 border-gray-300 p-2 rounded ${error && !credentials.password ? 'border-red-500' : ''}`}
					required
					minLength={6}
					maxLength={64}
					autoComplete="current-password"
				/>
				{error && (
					<p className="text-red-500 text-sm">{!credentials.username ? 'Username is required' : !credentials.password ? 'Password is required' : error}</p>
				)}
				<button
					type="submit"
					className="mt-2 bg-primary text-white px-4 py-2 cursor-pointer rounded"
				>
					Log In
				</button>
				<p className="mt-2 text-sm text-secondary text-center">
					Please contact the administrator if you do not have an account.
				</p>
			</form>
			<Link href="/" className="mt-4 text-secondary underline">
				Back to Home
			</Link>
		</main>
	);
}
