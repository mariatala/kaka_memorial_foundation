'use client';
import React from 'react';
import Header from '@/components/Header';
import { Gowun_Dodum, Inter } from 'next/font/google';
import {
	HandHeart,
	Users,
	Megaphone,
	Handshake,
	LocateFixed,
} from 'lucide-react'; // Thin & classy icons from lucid
import JoinUsSection from '@/sections/JoinUsCta';
import Image from 'next/image';
import CausesSection from '@/components/CausesCard';
import { GraduationCap, HeartHandshake, HelpingHand } from 'lucide-react';

const gowun = Gowun_Dodum({ weight: '400', subsets: ['latin'] });
const inter = Inter({
	weight: ['200', '300', '400', '500', '600', '700', '800'],
	subsets: ['latin'],
});

const CausesPage = () => {
	const causesIcons = [
		<HandHeart
			key="handheart"
			className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 text-secondary"
			strokeWidth={1}
		/>,
		<Users
			key="users"
			className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 text-secondary"
			strokeWidth={1}
		/>,
		<Megaphone
			key="megaphone"
			className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 text-secondary"
			strokeWidth={1}
		/>,
		<Handshake
			key="handshake"
			className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 text-secondary"
			strokeWidth={1}
		/>,
	];
	return (
		<div className="bg-white text-primary font-['Inter']">
			<section className="w-full inline-flex  h-120 justify-start items-center">
				<Header />
				<div className="w-full flex flex-col  md:flex-row items-center">
					<Image
						src="/map-1.png"
						alt="Kaka Memorial Foundation Logo"
						width={500}
						height={500}
						className="md:border-l-12 w-4/5 md:w-1/3 border-secondary h-auto transition-all duration-300"
					/>
					<div className="w-full h-fit text-left bg-secondary py-8 px-10">
						<h2
							className={`text-3xl md:text-5xl uppercase text-primary ${gowun.className}`}
						>
							Core Focus Areas
						</h2>
						<p
							className={` text-lg md:text-xl my-4 text-white font-semibold tracking-wide ${inter.className}`}
						>
							Empowering Lives Through Education, Clean Water, and Partnerships
						</p>
					</div>
				</div>
			</section>

			{/* Our History Section */}
			<section className="w-full">
				<div className="inline-flex justify-center  my-12 sm:mt-24  md:my-0 ">
					<p
						className={`${gowun.className} text-lg leading-8 tracking-wide text-justify md:text-center w-full px-8 lg:w-5/6 md:px-12 lg:px-16 text-primary`}
					>
						Kaka Memorial Foundation works to improve rural communities in
						Nigeria by advancing education, clean water access, and strong
						partnerships. Our efforts align with the United Nations Sustainable
						Development Goals (SDGs), adopted globally and by Nigeria, focusing
						on quality education (SDG 4), clean water and sanitation (SDG 6),
						and partnerships for development (SDG 17). We believe that education
						breaks the cycle of poverty, and clean water promotes health and
						well-being
					</p>
				</div>
				<div className="flex flex-col gap-12 md:gap-16 px-4 md:px-16">
					<CausesSection //Education Section
						imageSrc="/education.jpeg"
						heading="Education (SDG 4)"
						subheading="Empower a Mind. Change a Life."
						description="Education opens doors to opportunity, but many children in rural communities are left behind. Your support provides school fees, learning materials, and access to quality education — empowering the next generation to rise out of poverty."
						cards={[
							{
								title: 'Sponsor an Orphan',
								description:
									'Help provide food, tuition, and mentorship for orphaned children.',
								icon: HeartHandshake,
							},
							{
								title: 'Support a Child',
								description:
									'Offer direct support to students who face barriers to schooling.',

								icon: HelpingHand,
							},
							{
								title: 'Education Access Fund',
								description:
									'Fund classroom resources and transportation for low-income families.',
								icon: GraduationCap,
							},
						]}
					/>
					<CausesSection // Clean Water Section
						imageSrc="/water.jpg"
						heading="Clean Water (SDG 6)"
						subheading="Clean Water is a Human Right."
						description="Access to clean water is essential for health, dignity, and economic development. In many rural areas, families walk long distances daily to fetch unsafe water, leading to disease and lost opportunities. Through well construction, water system rehabilitation, and hygiene education, Kaka Foundation is changing this reality. With your help, we can reduce waterborne illnesses and empower communities to thrive with a basic resource many take for granted."
						cards={[
							{
								title: 'Support our water projects',
								description:
									'To provide clean, safe, and accessible water to undeserved communities.',
								icon: HeartHandshake,
							},
						]}
					/>
					<CausesSection // Collaborative Projects Section
						imageSrc="/collaborative.jpg"
						heading="Collaborative Projects (SDG 17))"
						subheading=" Partner with us."
						description=" Education opens doors to opportunity, but many children in rural communities are left behind. Your support provides school fees, learning materials, and access to quality education — empowering the next generation to rise out of poverty."
						cards={[
							{
								title: 'Stronger Together. Impact That Lasts.',
								description:
									'To provide clean, safe, and accessible water to undeserved communities.',
								icon: HeartHandshake,
							},
						]}
					/>
				</div>

				<div className="areas  w-full py-16 px-4 md:px-16 flex flex-col justify-center items-center md:gap-8">
					<div className="w-full  flex flex-col justify-center items-center gap-2">
						<h3
							className={`text-3xl md:text-5xl  tracking-widest uppercase text-primary ${gowun.className}`}
						>
							wHERE wE SERVE
						</h3>
						<div className="w-16 h-1 bg-secondary rounded-full" />
						<h4 className="text-xl text-secondary font-semibold tracking-wide mt-2">
							Area councils we Serve in Abuja
						</h4>
					</div>

					<div className=" w-full flex flex-col-reverse md:flex-row  px-4 md:px-16 gap-16 md:gap-32 justify-center items-center mt-8">
						<div className="w-4/5 md:w-1/3 text-center">
							<Image
								className="w-full h-auto rounded-md"
								src="/Map.png"
								alt="Abuja Area Council"
								width={700}
								height={500}
							/>
						</div>
						<div className="w-full md:w-1/2 text-left">
							<h3 className="text-2xl md:text-3xl mb-4">Area councils </h3>
							<ul className="list-disc list-inside text-left text-lg no-bullets space-y-4 ">
								<li className="flex items-center gap-2 ">
									<LocateFixed className="text-secondary text-sm" /> Abaji
								</li>
								<li className="flex items-center gap-2">
									<LocateFixed className="text-secondary text-sm" /> Bwari
								</li>
								<li className="flex items-center gap-2">
									<LocateFixed className="text-secondary text-sm" /> Gwagwalada
								</li>
								<li className="flex items-center gap-2">
									<LocateFixed className="text-secondary text-sm" /> Kuje
								</li>
								<li className="flex items-center gap-2">
									<LocateFixed className="text-secondary text-sm" /> Municipal
									Area Council
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* Advocacy and Community Engagement Section */}
				{/* Join Us Section */}
				<JoinUsSection
					title="Join Us in Making a Difference"
					description="Join us in our mission to uplift communities and create a better future for all. Whether through volunteering, donating, or spreading the word, your support makes a difference."
					bgColor="bg-indigo-50"
					animateIcon={true}
				/>

				{/* Advocacy and Community Engagement Section */}
				<div className="my-12">
					<div className="w-full  flex flex-col justify-center items-center gap-2">
						<h3
							className={`text-3xl md:text-4xl  text-center tracking-widest uppercase text-primary ${gowun.className}`}
						>
							Advocacy and Community Engagement
						</h3>
						<div className="w-16 h-1 bg-secondary rounded-full" />
						<h4 className="text-xl text-secondary font-semibold tracking-wide mt-2">
							You Can Be A Part Of Us
						</h4>
					</div>
					<div className="w-full flex justify-center mx-auto px-4 md:px-12 py-10 space-y-8">
						<p
							className={`${gowun.className} text-lg leading-8 tracking-wide text-center sm:px-4 w-full lg:w-2/3`}
						>
							Kaka Memorial Foundation actively engages in advocacy that
							promotes social justice, human rights, and sustainable
							development. Through strategic communication, collaboration, and
							public engagement, we raise awareness and influence policy to
							create lasting impact in underserved communities.
						</p>
					</div>

					<div className="w-full max-w-6xl mx-auto px-6 md:px-12 mb-16 py-12 md:py-24 space-y-16">
						{[
							{
								title: '1. Join Us in Making a Difference',
								description:
									'Join us in our mission to uplift communities and create a better future for all. Whether through volunteering, donating, or spreading the word, your support makes a difference.',
							},
							{
								title: '2. Community Engagements & Discussions',
								description:
									'We organize public forums such as Twitter/X Spaces, webinars, town halls, and community dialogues — both online and offline. These platforms encourage open dialogue between the foundation, citizens, and stakeholders, fostering transparency, collective learning, and grassroots-driven solutions.',
							},
							{
								title: '3. Issue-Based Campaigns',
								description:
									'Our campaigns shine a spotlight on specific challenges affecting vulnerable populations. Whether it’s advocating for improved school infrastructure, better sanitation, or access to safe drinking water, these campaigns mobilize communities, volunteers, and partners to take action and drive change.',
							},
							{
								title: '4. Stakeholder Meetings & Consultations',
								description:
									'We regularly engage with government representatives, NGOs, development partners, and community leaders to align efforts, share insights, and co-develop solutions. These meetings help shape inclusive programs and ensure that interventions are grounded in the real needs of the people.',
							},
						].map((item, index) => (
							<div
								key={index}
								className="relative bg-white shadow-lg border-l-2 border-r-2 md:border-r-0  border-primary rounded-xl p-6 md:p-10 flex  gap-6 items-start"
							>
								<div className="text-secondary flex-shrink-0">
									{React.cloneElement(causesIcons[index], { key: index })}
								</div>
								<div className="flex flex-col space-y-4">
									<h3
										className={`text-lg md:text-2xl tracking-wide font-bold ${inter.className}`}
									>
										{item.title}
									</h3>
									<p
										className={`leading-loose max-w-3xl text-sm md:text-base text-justify text-primary ${inter.className}`}
									>
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default CausesPage;
