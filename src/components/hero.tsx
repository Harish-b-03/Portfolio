import Socials from "./socials";
import data from "@/data/portfolio.json";
import PrimaryButton from "./atomic/primary-button";
import Image from "next/image";

const Hero = () => {
	return (
		<div className="py-20 tablet:py-0 w-full tablet:h-screen tablet:max-h-[600px] flex justify-center items-center">
			<div className="w-full tablet:w-1/2 h-[250px] mob:h-[300px] tablet:h-fit">
				<div className="w-full h-full flex">
					<div className="relative w-1/2 h-[90%] flex tablet:hidden justify-center items-center">
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
				<div className="w-full flex justify-center items-center tablet:justify-start">
					<Socials className="" />
				</div>
				<h1 className="mt-5 p-1 tablet:p-2 text-bold w-full flex justify-center items-center tablet:justify-start laptop:w-4/5 ">
					<PrimaryButton title="Let's Connect" />
				</h1>
			</div>
			<div className="laptop:w-1/3 h-[90%] hidden tablet:flex justify-center items-center">
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
