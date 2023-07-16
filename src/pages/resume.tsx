import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
// Data
import { showResume, resume } from "@/data/portfolio.json";
import data from "../data/portfolio.json";
import Cursor from "@/components/cursor";
import Header from "@/components/header";
import Socials from "@/components/socials";
import Head from "next/head";
import ResumeSkills from "@/components/resume/resume-skills";
import ResumeExperience from "@/components/resume/resume-experience";
import ResumeEducation from "@/components/resume/resume-education";
import ResumeActivities from "@/components/resume/resume-activities";

const Resume = () => {
	const router = useRouter();
	const { theme } = useTheme();
	const [mount, setMount] = useState(false);

	useEffect(() => {
		setMount(true);
		if (!showResume) {
			router.push("/");
		}
	}, []);
	return (
		<main
			className={`relative px-10 w-100 min-h-screen ${
				data.showCursor && "cursor-none"
			} overflow-x-hidden overflow-y-hidden scroll-smooth cursor-none`}
		>
			<Head>
				<title>Resume | Harish</title>
			</Head>
			{data.showCursor && <Cursor />}
			<div
				className={`container mx-auto mb-10 ${
					data.showCursor && "cursor-none"
				}`}
			>
				<Header isBlog />
				{mount && (
					<div className="mt-10 w-full flex flex-col items-center">
						<div className="mb-5 text-4xl font-serif font-semibold">
							Resume
						</div>
						<div
							className={`w-full ${
								mount && theme === "dark"
									? "bg-slate-800"
									: "bg-gray-100"
							} max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
						>
							<h1 className="text-3xl font-bold tracking-wider">
								{resume.name}
							</h1>
							<h2 className="text-xl mt-2">{resume.tagline}</h2>
							<p className="mt-1 opacity-50">{resume.location}</p>
							<h2 className="text-xl text-justify mt-5 opacity-60">
								{resume.description}
							</h2>
							<div className="mt-2">
								<Socials />
							</div>
							<ResumeSkills />
							<ResumeExperience />
							<ResumeEducation />
							<ResumeActivities />
						</div>
					</div>
				)}
			</div>
		</main>
	);
};

export default Resume;