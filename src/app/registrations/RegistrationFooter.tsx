import { Inter } from 'next/font/google';
const inter = Inter({ weight: ["300", "400","500","600","700"], subsets: ['latin'] });


const RegistrationFooter: React.FC = () => {
	return (
		<footer>
			<div
				className={`bg-primary-dark text-light py-4 flex flex-col items-center justify-center text-center ${inter.className}`}
			>
				<p className="text-sm">
					&copy; {new Date().getFullYear()} Kaka Memorial Foundation. All rights
					reserved.
				</p>
				<p className="text-xs mt-2">
					Made with ❤️ by the Kaka Memorial Foundation Team
				</p>
			</div>
		</footer>
	);
};
export default RegistrationFooter;
