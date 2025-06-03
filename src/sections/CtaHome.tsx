import Link from 'next/link';

const CtaHome = () => {
	return (
		<div className="w-full inline-flex flex-col justify-start items-center px-2 py-8 sm:p-8 md:px-16  gap-4">
			<div className="flex flex-col justify-start items-center pt-8">
				<div className="text-center text-primary text-3xl sm:text-4xl font-semibold font-['Inter'] uppercase tracking-widest">
					Get Involved
				</div>
				<div className="text-center text-secondary text-lg sm:text-2xl italic tracking-wider">
					Every act of kindness counts. Be part of the change.
				</div>
			</div>

			<div className="w-full min-w-48 inline-flex flex-col md:flex-row justify-evenly items-start py-8 gap-8 md:gap-20">
				{/* Donate Section */}
				<div className="w-full h-full md:w-1/2 px-10 py-4 sm:py-8 inline-flex flex-col justify-start items-center gap-6 md:gap-12">
					<div className="flex flex-col justify-start items-center gap-3 sm:gap-6">
						<div className="text-center text-primary text-3xl font-[inter] font-medium">
							Donate
						</div>
						<div className="w-full text-center text-primary font-normal tracking-wide leading-8">
							Every donation you make helps provide clean water education, and
							hope to underserved rural communities.
						</div>
					</div>
					<div className="px-4 py-1  bg-primary flex justify-center items-center rounded-xs hover:bg-secondary transition-colors duration-500 ease-in-out cursor-pointer">
						<Link href="/join_us" className="text-light">
							DONATE
						</Link>
					</div>
				</div>

				{/* Volunteer Section */}
				<div className="w-full h-full md:w-1/2 px-10 py-4 sm:py-8 inline-flex flex-col justify-start items-center gap-6 md:gap-12">
					<div className="flex flex-col justify-start items-center gap-3 sm:gap-6">
						<div className="text-center text-primary text-3xl font-[inter] font-medium tracking-wider">
							Volunteer
						</div>
						<div className="w-full text-center text-primary font-normal tracking-wide leading-8">
							By volunteering your time and skills, you can help bring clean
							water, quality education, and human rights advocacy to communities
							in need.
						</div>
					</div>
					<div className="px-4 py-1  bg-primary flex justify-center items-center rounded-xs hover:bg-secondary transition-colors duration-500 ease-in-out cursor-pointer">
						<Link href="/join_us" className="text-light">
							VOLUNTEER
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CtaHome;
