import React from 'react';
import EventsCarousel from '@/components/EventsCarausel';

const RecentProjects = () => {
	return (
		<div className="w-full inline-flex flex-col justify-start items-center gap-24 py-16 bg-indigo-50">
			<div className="flex flex-col justify-start items-center gap-4">
				<div className="flex flex-col justify-start items-center">
					<div className="text-center justify-start text-indigo-900 text-4xl font-normal font-['Inter'] uppercase tracking-widest">
						recent ADVOCACY / projects
					</div>
					<div className="self-stretch text-center justify-start text-lime-500 text-2xl font-semibold font-['Inter'] tracking-wide">
						Take a stand — support ethical, people-first development
					</div>
				</div>
			</div>

			{/* Carousel inserted here */}
			<EventsCarousel />
		</div>
	);
};

export default RecentProjects;
