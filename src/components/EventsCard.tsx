import { Gowun_Dodum, Inter } from 'next/font/google';
import React from 'react';
import Link from 'next/link';

const gowun = Gowun_Dodum({ weight: '400', subsets: ['latin'] });
const inter = Inter({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
});
type EventsCardProps = {
	event: {
		title: string;
		subtitle: string;
		description: string;
		date: string | number | Date;
		location: string;
	};
	imageUrl?: string;
	background?: string;
	joinLink?: string;
};

const EventsCard: React.FC<EventsCardProps> = ({
	event,
	imageUrl,
	background = 'bg-white',
	joinLink = '#',
}) => {
	return (
		<div
			className={`${background} w-full shadow-sm px-4 py-8 lg:p-16 mb-32 flex flex-col gap-8 lg:flex-row items-center`}
		>
			{/* Image on the left */}
			<img
				src={imageUrl || 'https://via.placeholder.com/100'}
				alt={event.title}
				className=" w-full md:1/2 lg:w-1/3 object-cover rounded-lg max-h-72"
			/>
			{/* Content */}
			<div className="w-full md:1/2 lg:w-2/3">
				<div className="w-full flex flex-col justify-center items-start gap-2">
					<h3
						className={`text-2xl md:text-3xl xl:text-4xl  tracking-widest uppercase text-light ${gowun.className}`}
					>
						{event.title}
					</h3>
					<div className="w-16 h-1 bg-light rounded-full" />
					<h4 className="text-xl text-light font-semibold tracking-wide mt-2">
						{event.subtitle}
					</h4>
				</div>
				<p className="text-light tracking-wide leading-8 my-8">
					{event.description}
				</p>
				<p className="text-primary text-sm mb-1">
					Date: {new Date(event.date).toLocaleDateString()}
				</p>
				<p className="text-primary text-sm mb-2">Location: {event.location}</p>
				<Link
					href={joinLink}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block px-8 py-1 mt-5  border-2 border-light text-light rounded-xs hover:bg-primary-dark hover:border-transparent transition-all duration-500 ease-in-out"
				>
					Join Us
				</Link>
			</div>
		</div>
	);
};

export default EventsCard;
