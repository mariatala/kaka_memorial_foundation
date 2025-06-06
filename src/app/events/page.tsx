import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import { Inter, Gowun_Dodum } from 'next/font/google';
const inter = Inter({
	weight: ['200', '300', '400', '500', '600', '700', '800'],
	subsets: ['latin'],
});
const gowun = Gowun_Dodum({ weight: '400', subsets: ['latin'] });
const EventsPage = () => {
	return (
		<div>
			<section className="w-full inline-flex  h-120 justify-start items-center">
				<Header />
				<div className="w-full flex flex-col  md:flex-row items-center">
					<Image
						src="/joinUs.jpg"
						alt="Kaka Memorial Foundation Logo"
						width={500}
						height={500}
						className="md:border-l-12 w-4/5 md:w-1/3 border-secondary h-auto transition-all duration-300"
					/>
					<div className="w-full h-fit text-left bg-secondary py-8 px-10">
						<h2
							className={`text-3xl md:text-5xl uppercase text-primary ${gowun.className}`}
						>
							Core Focus Areas
						</h2>
						<p
							className={` text-lg md:text-xl my-4 text-white font-semibold tracking-wide ${inter.className}`}
						>
							Empowering Lives Through Education, Clean Water, and Partnerships
						</p>
						<p>
							Kaka Memorial Foundation Consistently brings to life the ideals of
							humanity. Through advocacy and interventions, we envision reaching
							out to communities so as to deliberately connect stakeholders in
							order to achieve real impact in sustainable dimensions of growth.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};
export default EventsPage;
