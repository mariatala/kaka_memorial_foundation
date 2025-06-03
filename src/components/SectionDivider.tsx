import React from 'react';

const SectionDivider = () => {
	return (
		<div className="w-full flex items-center justify-between flex-wrap h-fit m-0 p-0">
			<div className=" w-full md:flex-1 h-full px-12 md:px-24 py-8 bg-secondary inline-flex flex-col justify-center items-center">
				<div className="flex flex-col justify-center gap-4 items-center">
					<div className="text-stone-50 text-3xl text-center font-medium font-['Inter'] tracking-wider">
						Our Mission
					</div>
					<div className="text-slate-50 text-lg text-center font-['Nunito'] tracking-wide">
						Our Goal, Vision and Commitment
					</div>
				</div>
			</div>
			<div className=" w-full md:flex-1 h-full px-12 md:px-24 py-8 bg-primary inline-flex flex-col justify-center items-center group">
				<div className="flex flex-col justify-center gap-4 items-center">
					<div className="text-stone-50 text-3xl text-center  font-['Inter'] tracking-wider">
						Our Events
					</div>
					<div className="text-slate-50 text-lg text-center  font-['Nunito'] tracking-wide">
						Register and Help Make Change
					</div>
				</div>
			</div>
			<div className=" w-full md:flex-1 h-full px-12 md:px-24 py-8 bg-accent-two inline-flex flex-col justify-center items-center">
				<div className="flex flex-col justify-center gap-4 items-center">
					<div className="text-stone-50 text-3xl text-center font-medium font-['Inter'] tracking-wider">
						Get Involved
					</div>
					<div className="text-slate-50 text-lg text-center font-['Nunito'] tracking-wide">
						Volunteer, Participate and Donate
					</div>
				</div>
			</div>
		</div>
	);
};
export default SectionDivider;
