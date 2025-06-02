import Link from 'next/link';

const CtaHome = () => {
	return (
		<div className="w-full inline-flex flex-col justify-start items-center gap-20 p-8 sm:p-16">
			<div className="flex flex-col justify-start items-center">
				<div className="text-center text-indigo-900 text-3xl sm:text-4xl font-normal font-['Inter'] uppercase tracking-widest">
					Get Involved
				</div>
				<div className="text-center text-lime-500 text-xl sm:text-2xl font-semibold font-['Inter'] tracking-wide">
					Every act of kindness counts. Be part of the change.
				</div>
			</div>

			<div className="w-full inline-flex flex-col md:flex-row justify-evenly items-start gap-10 md:gap-20">
				{/* Donate Section */}
				<div className="flex-1 w-full sm:w-72 md:w-96 inline-flex flex-col justify-start items-center gap-4">
					<div className="flex flex-col justify-start items-center gap-4">
						<div className="text-center text-indigo-900 text-xl sm:text-2xl md:text-3xl font-medium font-['Inter'] tracking-wider">
							Donate
						</div>
						<div className="text-center text-indigo-900 font-normal font-['Inter'] tracking-wide leading-8 sm:leading-10">
							Every donation you make helps provide clean water, healthcare,
							education, and hope to underserved rural communities.
						</div>
					</div>
					<div className="w-28 h-10 relative bg-indigo-900 flex justify-center items-center rounded-xs">
						<Link href="/join_us" className="text-stone-50 font-['Inter']">
							DONATE
						</Link>
					</div>
				</div>

				{/* Volunteer Section */}
				<div className="flex-1 w-full sm:w-72 md:w-96 inline-flex flex-col justify-start items-center gap-4">
					<div className="flex flex-col justify-start items-center gap-4">
						<div className="text-center text-indigo-900 text-xl sm:text-2xl md:text-3xl font-medium font-['Inter'] tracking-wider">
							Volunteer
						</div>
						<div className="text-center text-indigo-900 font-normal font-['Inter'] tracking-wide leading-8 sm:leading-10">
							By volunteering your time and skills, you can help bring clean
							water, quality education, healthcare, and human rights advocacy to
							communities in need.
						</div>
					</div>
					<div className="w-28 h-10 relative bg-indigo-900 flex justify-center items-center rounded-xs">
						<Link href="/join_us" className="text-stone-50 font-['Inter']">
							VOLUNTEER
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CtaHome;
