import Socials from "./socials";
import data from "@/data/portfolio.json";
import PrimaryButton from "./atomic/primary-button";
import Image from "next/image";
import Button from "./button";
import { contact, resumeURL } from "@/utils/constants";
import Link from "next/link";

const Hero = () => {
	return (
		<div className="py-20 tablet:py-0 w-full tablet:h-screen tablet:max-h-[600px] flex justify-center items-center">
			<div className="w-full tablet:w-1/2 h-[250px] mob:h-[350px] tablet:h-fit">
				<div className="w-full h-3/5 tablet:h-full flex">
					<div className="relative w-1/2 h-full tablet:h-[90%] flex tablet:hidden justify-center items-center">
						<Image
							src="/images/bitmoji.webp"
							alt="Harish's Bitmoji"
							fill
							priority
							className="object-contain"
						/>
					</div>
					<div className="w-1/2 tablet:w-fit h-full flex flex-col justify-center items-center tablet:items-start">
						<h1 className="w-full font-semibold text-2xl mob:text-3xl tablet:text-5xl laptop:text-6xl p-1 tablet:p-2 text-bold mob:w-full laptop:w-4/5">
							{data.headerTaglineOne}
						</h1>
						<h1 className="font-semibold text-2xl mob:text-3xl tablet:text-5xl laptop:text-6xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5">
							{data.headerTaglineTwo}
						</h1>
						<h1 className="text-2xl mob:text-2xl tablet:text-3xl laptop:text-5xl p-1 tablet:p-2 text-bold w-full">
							{data.headerTaglineThree}
						</h1>
					</div>
				</div>
				<div className="mt-5 tablet:mt-0 w-full flex justify-center items-center tablet:justify-start">
					<Socials className="" />
				</div>
				<div className="mt-5 p-1 tablet:p-2 flex flex-col tablet:flex-row justify-center tablet:justify-start items-center">
					<div>
						<PrimaryButton
							title="Let's Connect"
							onClick={() => window.open(contact)}
						/>
					</div>
					<div className="ml-0 mt-5 tablet:ml-12 tablet:mt-0">
						<Link href={resumeURL} passHref>
							<Button classes="border border-gray-400 rounded-lg hover:bg-gray-200">
								<span className="px-5 py-1 text-gray-800 hover:text-black">
									View Resume
								</span>
							</Button>
						</Link>
					</div>
				</div>
			</div>
			<div className="w-3/5 laptop:w-1/3 h-[90%] hidden tablet:flex justify-center items-center">
				<div className="relative w-full h-full">
					<Image
						src="/images/bitmoji.webp"
						alt="Harish's Bitmoji"
						fill
						priority
						className="object-contain"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
