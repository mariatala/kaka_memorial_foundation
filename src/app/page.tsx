import Hero from '@/sections/Hero';
import AboutSection from '@/sections/AboutSection';
import SectionDivider from '@/components/SectionDivider';
import StatsSection from '@/sections/StatsSection';
import CtaHome from '@/sections/CtaHome';
import RecentProjects from '@/sections/RecentProjects';
import JoinUsSection from '@/sections/JoinUsCta';
import { Inter, Gowun_Dodum } from 'next/font/google';
import { HandHeart } from 'lucide-react';
const inter = Inter({ weight: '400', subsets: ['latin'] });
const gowun = Gowun_Dodum({ weight: '400', subsets: ['latin'] });
export default function Home() {
	return (
		<main className=" min-h-screen flex flex-col  items-center sm:items-start">
			<Hero />
			<SectionDivider />
			<AboutSection />
			<StatsSection />
			<CtaHome />
			<RecentProjects />
			{/* Join Us Section */}
			<JoinUsSection
				title="Join Us in Making a Difference"
				description="Join us in our mission to uplift communities and create a better future for all. Whether through volunteering, donating, or spreading the word, your support makes a difference."
				bgColor="bg-white"
				animateIcon={true}
			/>
		</main>
	);
}
