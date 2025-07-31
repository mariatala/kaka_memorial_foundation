import Hero from '@/components/main_page_sections/Hero';
import AboutSection from '@/components/main_page_sections/AboutSection';
import SectionDivider from '@/components/main_page_sections/SectionDivider';
import StatsSection from '@/components/StatsSection';
import CtaHome from '@/components/main_page_sections/CtaHome';
import RecentProjects from '@/components/main_page_sections/recent_events_advocacy/RecentProjects';
import JoinUsSection from '@/components/main_page_sections/JoinUsCta';

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
