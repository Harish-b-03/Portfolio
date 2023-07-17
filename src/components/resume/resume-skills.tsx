import { resume } from "@/data/portfolio.json";

const ResumeSkills = () => {
	return (
		<div className="mt-5">
			<h1 className="text-2xl font-bold">Skills</h1>
			<div className="flex flex-col tablet:flex-row justify-between">
				{resume.languages && (
					<div className="mt-2 mob:mt-5">
						<h2 className="text-lg">Languages</h2>
						<ul className="list-disc">
							{resume.languages.map((language, index) => (
								<li key={index} className="ml-5 py-2">
									{language}
								</li>
							))}
						</ul>
					</div>
				)}

				{resume.frameworks && (
					<div className="mt-2 mob:mt-5">
						<h2 className="text-lg">Frameworks</h2>
						<ul className="list-disc">
							{resume.frameworks.map((framework, index) => (
								<li key={index} className="ml-5 py-2">
									{framework}
								</li>
							))}
						</ul>
					</div>
				)}

				{resume.others && (
					<div className="mt-2 mob:mt-5">
						<h2 className="text-lg">Others</h2>
						<ul className="list-disc">
							{resume.others.map((other, index) => (
								<li key={index} className="ml-5 py-2">
									{other}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default ResumeSkills;
