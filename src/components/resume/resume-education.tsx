import React from "react";
import { resume } from "@/data/portfolio.json";

const ResumeEducation = () => {
	return (
		<div className="mt-5">
			<h1 className="text-2xl font-bold">Education</h1>
			<div className="mt-2">
				{resume.education.map((ed, index) => (
					<div key={index}>
						<h1 className="text-lg font-semibold">{ed.degree}</h1>
						<h2 className="text-sm tablet:text-lg">{ed.universityName}</h2>
						<h3 className="text-sm opacity-75">
							{ed.universityDate}
						</h3>
						<p className="text-sm mt-2 opacity-50">
							{ed.universityPara}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ResumeEducation;
