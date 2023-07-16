import { resume } from "@/data/portfolio.json";
import ProjectResume from "./project-resume";

const ResumeExperience = () => {
	return (
		<div className="mt-5">
			<h1 className="text-2xl font-bold">Experience</h1>

			{resume.experiences.map(
				({ id, dates, type, position, bullets }) => (
					<ProjectResume
						key={id}
						dates={dates}
						type={type}
						position={position}
						bullets={bullets}
					></ProjectResume>
				)
			)}
		</div>
	);
};

export default ResumeExperience;
