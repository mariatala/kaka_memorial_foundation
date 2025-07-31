import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({
	weight: ['200', '300', '400', '500', '600', '700', '800'],
	subsets: ['latin'],
});

const LoginComponent: React.FC = () => {
	return (
		<Link
			href="/login"
			className={`${inter.className} text-white text-sm mt-4`}
		>
			Admin Login
		</Link>
	);
};

export default LoginComponent;
