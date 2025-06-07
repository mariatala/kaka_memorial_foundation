import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import EventsSection from '@/sections/EventsSection';
import { Heart } from 'lucide-react';
import { Inter, Gowun_Dodum } from 'next/font/google';
import Link from 'next/link';
const inter = Inter({
	weight: ['200', '300', '400', '500', '600', '700', '800'],
	subsets: ['latin'],
});
const gowun = Gowun_Dodum({ weight: '400', subsets: ['latin'] });
const EventsPage = () => {
	return (
		<div className="w-full h-full bg-accent-three-light flex flex-col">
			<section className="w-full flex min-h-[32rem] md:min-h-[30rem] justify-start items-center py-8 md:py-0">
				<Header
					bgColor="bg-white"
					textColor="text-primary"
					scrolledBgColor="bg-primary"
					scrolledTextColor="text-light"
				/>
				<div className="w-full flex flex-col-reverse  md:flex-row mt-16 justify-end items-center">
					<Image
						src="/joinUs.jpg"
						alt="Kaka Memorial Foundation Logo"
						width={400}
						height={400}
						className="md:border-l-12 w-2/3 md:w-1/5 border-secondary h-auto transition-all duration-300"
					/>
					<div className="w-full  md:w-2/3 text-left bg-accent-three-light py-8 px-10">
						<div className="w-full lg:w-5/6 h-full flex flex-col justify-center items-start">
							<div className="w-full  flex flex-col justify-center items-start space-y-2">
								<h2
									className={`text-3xl md:text-5xl uppercase text-primary ${
										gowun.className ?? ''
									}`}
								>
									ACTIVITIES
								</h2>
								{/* Alternatives: PROGRAMS, INITIATIVES, HAPPENINGS, ENGAGEMENTS, OCCASIONS */}

								<p
									className={` text-lg md:text-xl mt-2 text-secondary font-semibold tracking-wide ${inter.className}`}
								>
									Make a Difference With Us
								</p>
							</div>

							<p
								className={` text-primary ${
									gowun.className ?? ''
								} leading-8 md:text-lg mt-4 lg:mt-8`}
							>
								Kaka Memorial Foundation Consistently brings to life the ideals
								of humanity. Through advocacy and interventions, we envision
								reaching out to communities so as to deliberately connect
								stakeholders in order to achieve real impact in sustainable
								dimensions of growth.
							</p>
							<div className=" flex flex-row items-center gap-4 mt-6">
								<Link
									href="/volunteer"
									className={`bg-primary text-light flex items-center gap-2 px-2 sm:px-4 py-2 rounded-sm shadow-md text-sm  ${inter.className} tracking-wide hover:bg-secondary hover:text-primary transition-all duration-300`}
								>
									Join Us
									<Heart className=" h-5 w-5 ml-1 text-accent-three-light" />
								</Link>
								<Link
									href="/contact"
									className={`bg-secondary text-light flex items-center gap-2 px-4 py-2 rounded-sm shadow-md text-sm  ${inter.className} tracking-wide hover:bg-primary hover:text-secondary transition-all duration-300`}
								>
									Donate
									<Heart className=" h-5 w-5 ml-1 text-accent-three-light" />
								</Link>
								<Link
									href="/volunteer"
									className={`bg-accent-three-light text-primary border border-primary flex items-center gap-2 px-4 py-2 rounded-sm shadow-md text-sm  ${inter.className} tracking-wide hover:bg-primary hover:text-light transition-all duration-300`}
								>
									Volunteer
									<Heart className=" h-5 w-5 ml-1 text-primary" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/*Events Section*/}
			<EventsSection />
			{/*Footer Section*/}
		</div>
	);
};
export default EventsPage;
