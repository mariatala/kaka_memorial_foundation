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
