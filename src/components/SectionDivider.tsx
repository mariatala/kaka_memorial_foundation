import React from 'react';


const SectionDivider = () => {
	return (
		<div className="w-full flex items-center justify-between flex-wrap h-fit m-0 p-0">
			<div className="flex-1 h-full px-28 py-8 bg-lime-500 inline-flex flex-col justify-center items-center">
				<div className="flex flex-col justify-center gap-4 items-center">
					<div className="text-stone-50 text-3xl font-medium font-['Inter'] tracking-wider">
						Our Mission
					</div>
					<div className="text-slate-50 text-lg font-normal font-['League_Spartan'] tracking-wide">
						Our Goal, Vision and Commitment
					</div>
				</div>
			</div>
			<div className="flex-1 h-full px-24 py-8 bg-slate-500 inline-flex flex-col justify-center items-center">
				<div className="flex flex-col justify-center gap-4 items-center">
					<div className="text-stone-50 text-3xl font-medium font-['Inter'] tracking-wider">
						Our Events
					</div>
					<div className="text-slate-50 text-lg font-normal font-['League_Spartan'] tracking-wide">
						Register and Help Make Change
					</div>
				</div>
			</div>
			<div className="flex-1 h-full px-24 py-8 bg-amber-400 inline-flex flex-col justify-center items-center">
				<div className="flex flex-col justify-center gap-4 items-center">
					<div className="text-stone-50 text-3xl font-medium font-['Inter'] tracking-wider">
						Get Involved
					</div>
					<div className="text-slate-50 text-lg font-normal font-['League_Spartan'] tracking-wide">
						Volunteer, Participate and Donate
					</div>
				</div>
			</div>
		</div>
	);
};
export default SectionDivider;
