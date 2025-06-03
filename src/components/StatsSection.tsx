const StatsSection = () => {
	return (
		<div className="w-full px-8 py-10 md:py-4 md:mb-16 bg-accent-three inline-flex flex-col justify-evenly items-center overflow-hidden">
			<div className="w-full py-10 md:py-4 inline-flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
				<div className="flex-1  py-4 md:py-8  md:gap-2 px-2 w-full md:w-fit bg-accent-three-light inline-flex flex-col justify-center items-center">
					<div className="self-stretch text-center text-secondary text-3xl font-bold font-['Inter'] tracking-widest">
						$100
					</div>
					<div className="self-stretch text-center justify-start text-primary font-normal  tracking-wide">
						Raised Through Grants
					</div>
				</div>
				<div className="flex-1  py-4 md:py-8 md:gap-2 px-2  w-full md:w-fit bg-accent-three-light inline-flex flex-col justify-center items-center">
					<div className="self-stretch text-center text-secondary text-3xl font-bold font-['Inter'] tracking-widest">
						₦147,740
					</div>
					<div className="self-stretch text-center justify-start text-primary font-normal tracking-wide">
						Raised Through Donations
					</div>
				</div>
				<div className="flex-1  py-4 md:py-8  md:gap-2 px-2  w-full md:w-fit bg-accent-three-light inline-flex flex-col justify-center items-center">
					<div className="self-stretch text-center text-secondary text-3xl font-bold font-['Inter'] tracking-widest">
						500+
					</div>
					<div className="self-stretch text-center justify-start text-primary font-normal tracking-wide">
						People Served by Kaka Foundation
					</div>
				</div>
				<div className="flex-1 py-4 md:py-8  md:gap-2 px-2  w-full md:w-fit bg-accent-three-light inline-flex flex-col justify-center items-center">
					<div className="self-stretch text-center text-secondary text-3xl font-bold font-['Inter'] tracking-widest">
						7
					</div>
					<div className="self-stretch text-center justify-start text-primary font-normal tracking-wide">
						Programs Initiated Since 2022
					</div>
				</div>
				<div className="flex-1 py-4 md:py-8  md:gap-2 px-2 w-full md:w-fit bg-accent-three-light inline-flex flex-col justify-center items-center ">
					<div className="self-stretch text-center text-secondary text-3xl font-bold font-['Inter'] tracking-widest">
						9
					</div>
					<div className="self-stretch text-center justify-start text-primary font-normal tracking-wide">
						Volunteers Across Abuja
					</div>
				</div>
			</div>
		</div>
	);
};

export default StatsSection;
