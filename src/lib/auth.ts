// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { AuthOptions } from 'next-auth'; // SessionStrategy is generally not needed in import if just for type casting
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Admin Login',
			credentials: {
				username: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (
					credentials?.username === process.env.ADMIN_USER &&
					credentials?.password === process.env.ADMIN_PASS
				) {
					return { id: '1', name: 'Administrator' };
				}
				return null;
			},
		}),
	],
	session: {
		strategy: 'jwt',
		maxAge: 60 * 24 * 60 * 60, // 60 days
		updateAge: 24 * 60 * 60, // re-issue daily
	},
	// optionally customize the cookie TTL to match:
	cookies: {
		sessionToken: {
			name: 'next-auth.session-token',
			options: {
				httpOnly: true,
				sameSite: 'lax',
				path: '/',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 24 * 60 * 60, // align with session.maxAge
			},
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
