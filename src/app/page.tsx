import Image from 'next/image';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SectionDivider from '@/components/SectionDivider';
import StatsSection from '@/components/StatsSection';
import CtaHome from '@/components/CtaHome';
import RecentProjects from '@/components/RecentProjects';
export default function Home() {
	return (
		<main className=" min-h-screen flex flex-col row-start-2 items-center sm:items-start">
			<Hero />
			<SectionDivider />
			<AboutSection />
			<StatsSection />
			<CtaHome />
			<RecentProjects />
		</main>
	);
}
