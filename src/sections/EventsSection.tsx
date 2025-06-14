import EventsCard from '../components/EventsCard';
import { Gowun_Dodum, Inter } from 'next/font/google';

const gowun = Gowun_Dodum({ weight: '400', subsets: ['latin'] });
const inter = Inter({ weight: '400', subsets: ['latin'] });

const events = [
	{
		title: 'Community Outreach Events',
		subtitle: 'Join hands to uplift communities.',
		description:
			'These events focus on providing direct support to underserved areas through medical missions, educational drives, clean water projects, and humanitarian relief. Be part of real impact where its needed most.',
		date: '2025-07-15',
		location: 'Central Park',
		imageUrl: 'school.png',
		background: 'bg-secondary',
		joinLink: 'https://example.com/join-event1',
	},
	{
		title: 'Advocacy & Awareness Campaigns',
		subtitle: 'Lend your voice to justice and human dignity',
		description:
			'Help raise awareness on key issues like human rights, education, gender equality, and rural development. From rallies to school talks, your presence and voice make a difference.',
		date: '2025-08-10',
		location: 'Community Center',
		imageUrl: '/xtalk.jpg',
		background: 'bg-accent-one',
		joinLink: 'https://example.com/join-event2',
	},
	{
		title: 'Fundraising & Partnership Events',
		subtitle: 'Support the mission. Expand the impact.',
		description:
			'These events bring together well-wishers, donors, and organizations to raise resources and build strategic partnerships that fuel our life-changing programs across communities.',
		date: '2025-09-05',
		location: 'Town Library',
		imageUrl: '/education2.jpeg',
		background: 'bg-accent-two',
		joinLink: 'https://example.com/join-event3',
	},
];

const EventsSection = () => {
	return (
		<section className=" w-full events-section px-2 pb-12 sm:px-8 md:px-16 lg:px-32">
			<div className="w-full inline-flex justify-center md:my-0 ">
				<p
					className={`${gowun.className} text-lg leading-8 tracking-wide text-justify md:text-center w-full px-8 lg:w-5/6 md:px-12 lg:px-16 my-8 text-primary`}
				>
					Kaka Memorial Foundation Consistently brings to life the ideals of
					humanity. Through advocacy and interventions, we envision reaching out
					to communities so as to deliberately connect stakeholders in order to
					achieve real impact in sustainable dimensions of growth.
				</p>
			</div>
			<div className="w-full  flex flex-col justify-center items-center space-y-2 my-16">
				<h2
					className={`text-3xl md:text-5xl uppercase text-primary ${gowun.className}`}
				>
					Events
				</h2>
				<div className="w-16 h-1 bg-secondary rounded-full" />
				<p
					className={` text-lg md:text-xl mt-2 text-secondary font-semibold tracking-wide ${inter.className}`}
				>
					Stay tuned for upcoming events!
				</p>
			</div>

			{events.map((event, idx) => (
				<EventsCard
					key={idx}
					event={event}
					imageUrl={event.imageUrl}
					background={event.background}
					joinLink={event.joinLink}
				/>
			))}
		</section>
	);
};

export default EventsSection;
