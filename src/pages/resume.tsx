import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// Data
import { showResume, resume } from "@/data/portfolio.json";
import data from "../data/portfolio.json";
import Cursor from "@/components/cursor";
import Socials from "@/components/socials";
import Head from "next/head";
import ResumeSkills from "@/components/resume/resume-skills";
import ResumeExperience from "@/components/resume/resume-experience";
import ResumeEducation from "@/components/resume/resume-education";
import ResumeActivities from "@/components/resume/resume-activities";
import { SEO } from "@/utils/constants";
import { useTheme } from "@/contexts/theme-context";
import Layout from "@/containers/layout";

const Resume = () => {
	const router = useRouter();
	const { theme } = useTheme();

	useEffect(() => {
		if (!showResume) {
			router.push("/");
		}
	}, []);

	return (
		<Layout>
			<Head>
				<title>{SEO.resume.title}</title>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<meta name="description" content={SEO.resume.description} />
				<meta
					key="og:type"
					name="og:type"
					content={SEO.resume.openGraph.type}
				/>
				<meta
					key="og:title"
					name="og:title"
					content={SEO.resume.title}
				/>
				<meta
					key="og:description"
					name="og:description"
					content={SEO.resume.description}
				/>
				<meta
					key="og:url"
					name="og:url"
					content={SEO.resume.openGraph.url}
				/>
				<meta
					key="og:image"
					name="og:image"
					content={SEO.resume.openGraph.image}
				/>
			</Head>
			{data.showCursor && <Cursor />}
			<div
				className={`container mx-auto mb-10 ${
					data.showCursor && "cursor-none"
				}`}
			>
				<div className="mt-10 w-full flex flex-col items-center">
					<div className="mb-5 text-4xl font-serif font-semibold">
						Resume
					</div>
					<div
						className={`w-full ${
							theme === "dark" ? "bg-slate-800" : "bg-gray-100"
						} max-w-4xl px-5 py-10 tablet:p-10 desktop:p-20 rounded-lg shadow-sm`}
					>
						<h1 className="text-3xl font-bold tracking-wider">
							{resume.name}
						</h1>
						<h2 className="text-xl mt-2">{resume.tagline}</h2>
						<p className="mt-1 opacity-50">{resume.location}</p>
						<h2 className="text-base tablet:text-xl text-justify mt-5 opacity-60">
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
			</div>
		</Layout>
	);
};

export default Resume;
