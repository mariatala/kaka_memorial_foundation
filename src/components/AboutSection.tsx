'use client';
import Link from 'next/link';
import Image from 'next/image';

const AboutSection = () => {
	return (
		<div className="w-full px-8 md:px-32 py-8 md:py-16 inline-flex flex-col md:flex-row justify-start items-center gap-8 md:gap-28 my-12">
			<div className="flex-1 inline-flex flex-col justify-start items-start gap-8">
				<div className="w-full md:w-[483px] flex flex-col justify-start items-start gap-4">
					<div className="text-indigo-900 text-3xl sm:text-4xl font-normal font-['Inter'] leading-3 uppercase tracking-widest">
						ABOUT
					</div>
					<div className="text-lime-500 text-xl sm:text-2xl font-semibold font-['Inter'] tracking-wide">
						Our Organization
					</div>
				</div>
				<div className="self-stretch justify-start">
					<span className="text-indigo-900 text-base sm:text-lg font-normal font-['Lao_Sans_Pro'] leading-8 sm:leading-12 tracking-wide">
						Kaka Memorial Foundation works to improve rural communities in
						Nigeria by advancing education, clean water access, and strong
						partnerships. Our efforts align with the United Nations Sustainable
						Development Goals (SDGs), adopted globally and by Nigeria, focusing
						on quality education (SDG 4), clean water and sanitation (SDG 6),
						and partnerships for development (SDG 17). We believe that education
						breaks the cycle of poverty, and clean water promotes health and
						well-being.
						<br />
					</span>

					<span className="block text-indigo-900 text-lg mt-4 font-semibold font-['Inter'] leading-[48px] tracking-wide">
						<Link href={'/about'}>Read More</Link>
					</span>
				</div>
			</div>

			<div className="w-full md:w-[494.76px] h-64 sm:h-96 mix-blend-luminosity border-t-[24px] border-l-[24px] border-lime-500">
				<Image
					src="/about.jpg"
					alt="About Us"
					className="w-full h-full object-cover"
					width={494.76}
					height={384}
					loading="lazy"
				/>
			</div>
		</div>
	);
};

export default AboutSection;
