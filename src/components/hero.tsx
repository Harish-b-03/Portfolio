import { useEffect, useRef, useState } from "react";
import Socials from "./socials";
import data from "@/data/portfolio.json";
import { useTheme } from "next-themes";

const Hero = () => {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return <></>;

	return (
		<div className="py-20 tablet:py-0 w-full tablet:h-screen tablet:max-h-[600px] flex justify-center items-center">
			<div className="w-full tablet:w-1/2 h-[300px] tablet:h-fit">
				<div className="w-full h-full flex">
					<div className="w-1/2 h-[90%] flex tablet:hidden justify-center items-center">
						<img
							src="/images/bitmoji.webp"
							className="w-full h-full"
						/>
					</div>
					<div className="w-1/2 tablet:w-fit h-full flex flex-col justify-center items-center tablet:items-start">
						<h1 className="font-semibold text-3xl tablet:text-5xl laptop:text-6xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
							{data.headerTaglineOne}
						</h1>
						<h1 className="font-semibold text-3xl tablet:text-5xl laptop:text-6xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5">
							{data.headerTaglineTwo}
						</h1>
						<h1 className="text-xl tablet:text-3xl laptop:text-5xl p-1 tablet:p-2 text-bold w-full">
							{data.headerTaglineThree}
						</h1>
					</div>
				</div>
				<div className="w-full flex justify-center items-center tablet:justify-start">
					<Socials className="" />
				</div>
				<h1 className="mt-5 p-1 tablet:p-2 text-bold w-full flex justify-center items-center tablet:justify-start laptop:w-4/5 ">
					<button
						className={`w-36 h-12 flex justify-center items-center ${
							theme === "dark"
								? "bg-gray-100 text-black shadow-sm shadow-gray-200 hover:shadow-gray-900 hover:bg-black hover:border-gray-500 hover:text-white"
								: "bg-black text-white shadow-gray-800 hover:shadow-gray-400 hover:bg-white hover:border-black hover:text-black"
						} shadow-md font-semibold rounded-md cursor-none border border-transparent transition-all duration-200`}
					>
						Let{"'"}s connect
					</button>
				</h1>
			</div>
			<div className="laptop:w-1/3 h-[90%] hidden tablet:flex justify-center items-center">
				<img src="/images/bitmoji.webp" className="h-full mb-16" />
			</div>
		</div>
	);
};

export default Hero;
