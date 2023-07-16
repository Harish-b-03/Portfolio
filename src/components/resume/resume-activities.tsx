import { resume } from "@/data/portfolio.json";

const ResumeActivities = () => {
	return (
		<div className="mt-5">
			<h1 className="text-2xl font-bold">Activites</h1>
			<div className="mt-2 opacity-70">
				{resume.activites}
			</div>
		</div>
	);
};

export default ResumeActivities;
