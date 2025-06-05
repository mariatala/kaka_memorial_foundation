'use client';

import React from 'react';
import Image from 'next/image';
import TeamMemberCard from '@/components/TeamMemberCard';

interface TeamSectionProps {
	gowunFontClass: string;
	niconneFontClass: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({
	gowunFontClass,
	niconneFontClass,
}) => {
	return (
		<section className="our-team w-full bg-accent-three-light py-16">
			<div className="w-[80%] mx-auto flex flex-col justify-center items-center overflow-hidden">
				{/* Heading */}
				<div className="inline-flex flex-col justify-start items-center gap-2">
					<h2 className="self-stretch text-center text-primary text-3xl font-bold font-['Inter'] uppercase">
						our TEAM
					</h2>
					<p className="self-stretch text-center text-lime-500 text-2xl font-['Inter']">
						You Can Be A Part Of Us
					</p>
				</div>

				{/* Founder Block */}
				<div className="w-full flex-col flex justify-center my-16 gap-16">
					<div className="w-2/3 mx-auto py-8 px-8 md:px-16 bg-slate-50 border-t-4 border-b-4 border-primary inline-flex justify-between items-center gap-8 md:gap-16 flex-col md:flex-row">
						<Image
							className="w-full md:w-1/3"
							width={400}
							height={480}
							src="/team/zainab.jpeg"
							alt="Team member - Founder"
						/>
						<div className="w-full md:w-2/3 inline-flex flex-col">
							<p
								className={`${gowunFontClass} self-stretch text-indigo-900 tracking-wider leading-8 mb-4`}
							>
								"The Kaka Memorial Foundation was born from a deep desire to
								honor my mother’s legacy of compassion and her belief in equal
								opportunity for all. Inspired by her values and my own
								experience working with communities, I saw the urgent need to
								build structures that create real, lasting impact — especially
								for those in rural areas. Our goal is to uplift lives by
								promoting dignity, access, and sustainable growth through
								kindness."
							</p>
							<h5 className={`${niconneFontClass} text-3xl`}>
								Mrs. Zainab Inuwa Gani Esq.
							</h5>
							<p className="font-medium text-lime-500 text-base font-['Inter'] uppercase">
								Founder & Director
							</p>
						</div>
					</div>

					{/* Other Team Members */}
					<div className="team_members grid md:grid-cols-2 gap-16 md:gap-32">
						<TeamMemberCard
							imageSrc="/team/Inuwa_Suleiman_Gani.jpeg"
							altText="Team member - Secretary"
							description="Supports board and governance functions. Prepares meeting agendas and minutes, ensures legal compliance, manages records, and facilitates communication between leadership and stakeholders."
							name="Inuwa Suleiman Gani"
							role="Secretary"
							gowunFontClass={gowunFontClass}
							niconneFontClass={niconneFontClass}
						/>
						<TeamMemberCard
							imageSrc="/team/Musa_Yahawa_Soje.jpeg"
							altText="Team member - Desk Officer"
							description="Acts as the first point of contact for the foundation. Manages daily operations, responds to inquiries, supports program logistics, and coordinates internal communications and reports"
							name="Musa Yahawa Soje"
							role="Desk Officer"
							gowunFontClass={gowunFontClass}
							niconneFontClass={niconneFontClass}
						/>
						<TeamMemberCard
							imageSrc="/team/Umar_Fatima_Gani.jpeg"
							altText="Team member - Desk Officer"
							description="Acts as the first point of contact for the foundation. Manages daily operations, responds to inquiries, supports program logistics, and coordinates internal communications and reports"
							name="Umar Fatima Gani"
							role="Desk Officer"
							gowunFontClass={gowunFontClass}
							niconneFontClass={niconneFontClass}
						/>
						<TeamMemberCard
							imageSrc="/team/Mukhtar_Adams.jpeg"
							altText="Team member - Creative Media Officer"
							description="Designs compelling visual and multimedia content to communicate the foundation’s mission and impact. Supports campaigns with graphics, videos, and storytelling aligned with our work in marginalized communities"
							name="Mukhtar Adams"
							role="Creative Media Officer"
							gowunFontClass={gowunFontClass}
							niconneFontClass={niconneFontClass}
						/>
						<TeamMemberCard
							imageSrc="/team/Maimuna_Abubakar.jpeg"
							altText="Team member - Outreach Lead"
							description="Drives the foundation’s digital presence and leverages technology to amplify rural development initiatives. Builds and nurtures relationships with grassroots communities and key stakeholders to ensure inclusive engagement and visibility"
							name="Maimunah Abubakar Ibrahim"
							role="Digital Innovation and Outreach Lead"
							gowunFontClass={gowunFontClass}
							niconneFontClass={niconneFontClass}
						/>
						<TeamMemberCard
							imageSrc="/team/Mubarakatu_Yakubu.jpeg"
							altText="Team member - Finance Officer"
							description="Manages financial records, tracks incoming and outgoing funds, and ensures transparent reporting. Supports fundraising efforts and mobilization of resources to sustain community-driven projects"
							name="Mubarakatu Yakubu"
							role="Finance and Resource Mobilization Officer"
							gowunFontClass={gowunFontClass}
							niconneFontClass={niconneFontClass}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
