'use client';
import Header from '@/components/Header';
import TeamSection from '@/sections/TeamsSection';
import History from '@/sections/History';
import MissionVisionSection from '@/sections/MissionVision';
import { Niconne, Gowun_Dodum, Inter } from 'next/font/google';

const niconne = Niconne({ weight: '400', subsets: ['latin'] });
const gowun = Gowun_Dodum({ weight: '400', subsets: ['latin'] });
const inter = Inter({ weight: '400', subsets: ['latin'] });

const AboutPage = () => {
	return (
		<div className="bg-white text-primary font-['Inter']">
			{/* Header Banner Section */}
			<section className="w-full inline-flex items-end  h-80 justify-start bg-gradient-to-b from-primary to-primary-dark py-16 ">
				<Header />

				<div className="w-full px-32 flex flex-col justify-center items-start gap-2">
					<h3
						className={`text-3xl md:text-5xl  tracking-widest uppercase text-light ${gowun.className}`}
					>
						About Us
					</h3>

					<h4 className="text-xl text-secondary font-semibold tracking-wide mt-2">
						Our Motto: “Impacting Humanity With Kindness”
					</h4>
				</div>
			</section>

			{/* Our History Section */}
			<section>
				<History />
				<TeamSection
					gowunFontClass={gowun.className}
					niconneFontClass={niconne.className}
					titleFontClass={gowun.className}
				/>
				;
				<MissionVisionSection
					titleFontClass={gowun.className}
					bodyFontClass={inter.className}
				/>
			</section>
		</div>
	);
};

export default AboutPage;
