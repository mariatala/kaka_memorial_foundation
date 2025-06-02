import Image from 'next/image';
import React from 'react';
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
			<div className=" w-full self-stretch inline-flex justify-center items-center gap-32 my-24">
				<div className="relative w-80 h-80 p-8 border-t-[5px] border-b-[5px] border-indigo-900 inline-flex flex-col justify-start items-start gap-6">
					{/* Image in the background */}
					<Image
						className="absolute top-0 right-0 w-full h-full object-cover 0"
						src="/about - Copy.jpg"
						alt="Project visual"
						width={360}
						height={450}
					/>

					{/* Content on top right */}
					<div className="absolute bottom-10 left-10 p-5 bg-indigo-100/95 w-80 inline-flex flex-col justify-start items-start gap-6 border-t-4 border-b-4 border-indigo-900">
						<div className="self-stretch justify-start text-indigo-900 text-xl font-semibold font-['Inter'] leading-normal tracking-wide">
							Water Access Advocacy – Shapi Community, Kwali Area Council
						</div>
						<div className="self-stretch justify-start text-indigo-900 text-base font-normal font-['Inter'] leading-normal tracking-wide">
							Through direct engagement with the Area Council Chairman, Kaka
							Memorial Foundation successfully advocated for improved water
							access for residents of Shapi community, securing a critical need
							in this underserved area.
						</div>
					</div>
				</div>

				{/* Content on top right */}
				<div className="relative w-80 h-80 p-8  border-t-[5px] border-b-[5px] border-indigo-900 inline-flex flex-col justify-start items-start gap-6">
					{/* Image in the background */}
					<Image
						className="absolute top-0 right-0 w-full h-full object-cover"
						src="/xtalk.jpg"
						alt="Arrow right"
						width={360}
						height={450}
					/>

					{/* Content on top right */}
					<div className="absolute bottom-10 left-10 p-5 bg-indigo-100/95 w-80 inline-flex flex-col justify-start items-start gap-6 border-t-4 border-b-4 border-indigo-900">
						<div className="self-stretch justify-start text-indigo-900 text-xl font-semibold font-['Inter'] leading-normal tracking-wide">
							X-Space Public Engagement
						</div>
						<div className="self-stretch justify-start text-indigo-900 text-base font-normal font-['Inter'] leading-loose tracking-wide">
							Had a dialogue featuring Canadian Indigenous and
							Brazilian-Canadian human rights and social justice advocates, as
							we unpacked the ongoing LEA strike in Abuja and its impact on
							Education.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecentProjects;
