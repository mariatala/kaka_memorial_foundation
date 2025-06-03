import Hero from '@/sections/Hero';
import AboutSection from '@/sections/AboutSection';
import SectionDivider from '@/components/SectionDivider';
import StatsSection from '@/components/StatsSection';
import CtaHome from '@/sections/CtaHome';
import RecentProjects from '@/sections/RecentProjects';
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
