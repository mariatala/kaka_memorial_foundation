'use client';
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import TeamSection from '@/sections/TeamsSection';
import { Niconne, Gowun_Dodum } from 'next/font/google';

const niconne = Niconne({ weight: '400', subsets: ['latin'] });
const gowun = Gowun_Dodum({ weight: '400', subsets: ['latin'] });

const AboutPage = () => {
	return (
		<div className="bg-white text-primary font-['Inter']">
			{/* Header Banner Section */}
			<section className="w-full inline-flex items-end  h-80 justify-start bg-gradient-to-b from-primary to-primary-dark py-16 ">
				<Header />
				<div className="text-left w-full md:w-2/3 bg-secondary py-8 px-10">
					<h2 className="text-3xl md:text-4xl font-semibold text-light tracking-wide">
						ABOUT US
					</h2>
					<p className="text-lg md:text-xl text-bright font-medium">
						Our Motto: “Impacting Humanity With Kindness”
					</p>
				</div>
			</section>

			{/* Our History Section */}
			<section>
				<div className="py-20 px-8 md:px-32 md:px-24 w-full mx-auto space-y-10 flex  flex-col md:flex-row ">
					<div className="space-y-4 w-1/3">
						<h3 className="text-3xl md:text-4xl font-semibold tracking-widest uppercase text-primary">
							Our History
						</h3>
						<h4 className="text-xl md:text-2xl text-secondary font-semibold tracking-wide">
							And Who We Are
						</h4>
					</div>
					<div className="text-base md:text-lg text-gray-700 leading-8 space-y-6 w-2/3">
						<p>
							Kaka Memorial Foundation is a non-profit organization founded in
							loving memory of Hajiya Rukayyah Suleiman Kaka, whose life was
							defined by compassion, a passion for education, and a deep
							commitment to equity and progress.
						</p>
						<p>
							Established to carry forward her legacy, the foundation works to
							uplift rural and underserved communities in Nigeria by providing
							access to clean water, quality healthcare, education, electricity,
							and economic opportunities.
						</p>
						<p>
							Our mission is rooted in the belief that kindness—expressed
							through empathy, generosity, and action—has the power to transform
							lives. Through advocacy, outreach, and sustainable development
							projects, we aim to bridge gaps, uphold human rights, and empower
							communities to thrive.
						</p>
						<p>
							Guided by the motto “Impacting humanity through kindness,” we are
							building a future where every individual, regardless of
							background, has the opportunity to live with dignity and purpose.
						</p>
						{/* Call to Action Buttons */}
						<div className="flex flex-wrap gap-6 mt-8">
							<Link href="/causes">
								<button className="bg-secondary hover:bg-secondary/80 text-white font-semibold px-6 py-3 rounded-md shadow">
									WHAT WE DO
								</button>
							</Link>
							<Link href="/donate">
								<button className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold px-6 py-3 rounded-md transition-all">
									DONATE NOW
								</button>
							</Link>
						</div>
					</div>
				</div>
				<TeamSection
					gowunFontClass={gowun.className}
					niconneFontClass={niconne.className}
				/>
			</section>
		</div>
	);
};

export default AboutPage;
