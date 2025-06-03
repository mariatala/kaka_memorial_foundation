'use client';

import Image from 'next/image';

type XSpaceCardProps = {
	imageSrc: string;
	imageAlt?: string;
	title: string;
	description: string;
};

const EventCard = ({
	imageSrc,
	imageAlt = 'Event image',
	title,
	description,
}: XSpaceCardProps) => {
	return (
		<div className="relative w-full max-w-sm md:max-w-md group h-[22rem] p-4 sm:p-6 md:p-8 flex flex-col justify-start items-start gap-6 overflow-hidden">
			{/* Background Image */}
			<Image
				className="absolute top-0 left-0 w-full h-full object-cover"
				src={imageSrc}
				alt={imageAlt}
				fill
			/>

			{/* Sliding Overlay Content */}
			<div className="absolute top-0 bottom-0 right-0 p-4 sm:p-5 bg-indigo-100/85 w-[80%] flex flex-col justify-start items-start gap-4 border-t-4 border-b-4 border-indigo-900 transform transition-transform duration-500 ease-in-out group-hover:translate-x-full">
				<div className="text-indigo-900 text-base sm:text-lg md:text-xl font-semibold tracking-wide">
					{title}
				</div>
				<div className="text-indigo-900 text-sm sm:text-base font-normal leading-7 tracking-wide">
					{description}
				</div>
			</div>
		</div>
	);
};

export default EventCard;
