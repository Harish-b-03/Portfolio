import data from "@/data/portfolio.json";
import HandwrittenHeading from "./atomic/handwritten-heading";

const About = () => {
	return (
		<div className="mt-10 laptop:mt-10 pt-20 pb-10" id="about">
			<HandwrittenHeading title="About me" />
			<div className="w-full flex justify-center items-center">
				<p className="tablet:m-8 mt-2 text-sm tablet:text-xl text-justify flex flex-col laptop:text-2xl w-full laptop:w-4/5">
					{data.aboutpara
						.split("/n")
						.map((line: string, index: number) => (
							<span key={index} className="my-2">
								{line}
							</span>
						))}
				</p>
			</div>
		</div>
	);
};

export default About;
