const StatsSection = () => {
	return (
		<div className="w-full h-fit px-8 py-4 bg-slate-100 inline-flex flex-col justify-evenly items-center overflow-hidden">
			<div className="w-full inline-flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
				<div className="flex-1 py-8 px-2 w-full md:w-fit bg-slate-50 inline-flex flex-col justify-center items-center gap-2">
					<div className="self-stretch text-center text-lime-500 text-2xl sm:text-3xl font-bold font-['Inter'] tracking-widest">
						$100
					</div>
					<div className="self-stretch text-center justify-start text-indigo-900 font-normal font-['Inter'] tracking-wide">
						Raised Through Grants
					</div>
				</div>
				<div className="flex-1 py-8 px-2  w-full md:w-fit bg-slate-50 inline-flex flex-col justify-center items-center gap-2">
					<div className="self-stretch text-center text-lime-500 text-2xl sm:text-3xl font-bold font-['Inter'] tracking-widest">
						₦147,740
					</div>
					<div className="self-stretch text-center justify-start text-indigo-900 font-normal font-['Inter'] tracking-wide">
						Raised Through Donations
					</div>
				</div>
				<div className="flex-1 py-8 px-2  w-full md:w-fit bg-slate-50 inline-flex flex-col justify-center items-center gap-2">
					<div className="self-stretch text-center text-lime-500 text-2xl sm:text-3xl font-bold font-['Inter'] tracking-widest">
						500+
					</div>
					<div className="self-stretch text-center justify-start text-indigo-900 font-normal font-['Inter'] tracking-wide">
						People Served by Kaka Foundation
					</div>
				</div>
				<div className="flex-1 py-8 px-2  w-full md:w-fit bg-slate-50 inline-flex flex-col justify-center items-center gap-2">
					<div className="self-stretch text-center text-lime-500 text-2xl sm:text-3xl font-bold font-['Inter'] tracking-widest">
						7
					</div>
					<div className="self-stretch text-center justify-start text-indigo-900 font-normal font-['Inter'] tracking-wide">
						Programs Initiated Since 2022
					</div>
				</div>
				<div className="flex-1 py-8 px-2 w-full md:w-fit bg-slate-50 inline-flex flex-col justify-center items-center gap-2">
					<div className="self-stretch text-center text-lime-500 text-2xl sm:text-3xl font-bold font-['Inter'] tracking-widest">
						9
					</div>
					<div className="self-stretch text-center justify-start text-indigo-900 font-normal font-['Inter'] tracking-wide">
						Volunteers Across Abuja
					</div>
				</div>
			</div>
		</div>
	);
};

export default StatsSection;
