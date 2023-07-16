import data from "@/data/portfolio.json";
import WorkCard from "./work-card";
import HandwrittenHeading from "./atomic/handwritten-heading";

const Works = () => {
	return (
		<div className="mt-10 laptop:mt-10 pt-20 pb-10" id="work">
			<HandwrittenHeading title="Work"/>

			<div className="mt-5 grid grid-cols-1 tablet:grid-cols-2 gap-4">
				{data.projects.map((project) => (
					<WorkCard
						key={project.id}
						img={project.imageSrc}
						name={project.title}
						description={project.description}
						website={project.website}
						code={project.code}
					/>
				))}
			</div>
		</div>
	);
};

export default Works;
