import React from 'react';
import EventsCarousel from '@/components/EventsCarausel';

const RecentProjects = () => {
	return (
		<div className="w-full inline-flex flex-col justify-start items-center gap-24  bg-accent-three-light py-8 md:pt-16 md:pb-32">
			<div className="flex flex-col justify-start items-center">
				<div className="text-center text-primary text-3xl sm:text-4xl font-semibold font-['Inter'] uppercase">
					Recent Advocacy / Projects
				</div>
				<div className="text-center text-secondary text-lg sm:text-2xl italic tracking-wider">
					Take a stand — support ethical, people-first development
				</div>
			</div>

			{/* Carousel inserted here */}
			<EventsCarousel />
		</div>
	);
};

export default RecentProjects;
