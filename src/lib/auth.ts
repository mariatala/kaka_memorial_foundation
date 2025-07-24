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
	session: { strategy: 'jwt' }, // No need for 'as SessionStrategy' if authOptions is typed as AuthOptions
	secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);

