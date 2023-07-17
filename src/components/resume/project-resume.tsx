import React from "react";

const ProjectResume = ({ dates, type, position, bullets }: any) => {
	const [bulletsLocal, setBulletsLocal] = React.useState(bullets.split("/n"));

	return (
		<div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
			<div className="text-lg w-full tablet:w-2/5">
				<h2>{dates}</h2>
				<h3 className="text-sm opacity-50">{type}</h3>
			</div>
			<div className="w-full tablet:w-3/5">
				<h2 className="text-xl font-bold">{position}</h2>
				{bulletsLocal && bulletsLocal.length > 0 && (
					<ul className="list-disc">
						{bulletsLocal.map((bullet: any, index: number) => (
							<li key={index} className="ml-2 tablet:ml-0 my-1 opacity-70">
								{bullet}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default ProjectResume;
