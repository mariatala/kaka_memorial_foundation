'use client';
import React, { useRef } from 'react';
import EventCard from './EventCard';

const EventsCarousel: React.FC = () => {
	const carouselRef = useRef<HTMLDivElement | null>(null);

	const scroll = (direction: 'left' | 'right') => {
		if (!carouselRef.current) return;

		const { scrollLeft, clientWidth } = carouselRef.current;
		const scrollTo =
			direction === 'left'
				? scrollLeft - clientWidth
				: scrollLeft + clientWidth;

		carouselRef.current.scrollTo({
			left: scrollTo,
			behavior: 'smooth',
		});
	};

	return (
		<section className="w-full my-24 px-4 overflow-hidden">
			<div className="relative">
				{/* Navigation Buttons - Visible on All Screens */}
				<div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 px-1 sm:px-4">
					<button
						onClick={() => scroll('left')}
						className="bg-primary-dark text-white p-2 rounded-full hover:bg-secondary shadow-md"
						aria-label="Scroll Left"
					>
						←
					</button>
					<button
						onClick={() => scroll('right')}
						className="bg-primary-dark text-white p-2 rounded-full hover:bg-secondary shadow-md"
						aria-label="Scroll Right"
					>
						→
					</button>
				</div>

				{/* Carousel Container */}
				<div
					ref={carouselRef}
					className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x scrollbar-hide"
				>
					<div className="min-w-[90%] md:min-w-[33%] snap-center shrink-0">
						<EventCard
							imageSrc="/xtalk.jpg"
							title="X-Space Public Engagement"
							description="Had a dialogue featuring Canadian Indigenous and Brazilian-Canadian human rights and social justice advocates, as we unpacked the ongoing LEA strike in Abuja and its impact on Education."
						/>
					</div>
					<div className="min-w-[90%] md:min-w-[33%] snap-center shrink-0">
						<EventCard
							imageSrc="/aboutCopy.jpg"
							title="Water Access Advocacy, Shapi Community, Kwali Area Council"
							description="Through direct engagement with the Area Council Chairman, Kaka Memorial Foundation successfully advocated for improved water access for residents of Shapi community, securing a critical need in this underserved area."
						/>
					</div>
					<div className="min-w-[90%] md:min-w-[33%] snap-center shrink-0">
						<EventCard
							imageSrc="/about.jpg"
							title="Youth Innovation Summit"
							description="Discussed innovative solutions with youth leaders across Africa on sustainable development, education, and digital transformation."
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EventsCarousel;
