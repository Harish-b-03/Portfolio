import data from "@/data/portfolio.json";
const workURL = "/#work";
const aboutURL = "/#about";
const blogURL = "/#blog";
const resumeURL = "/resume";

const SEO = {
	home: {
		title: `${data.name}'s Portfolio`,
		description:
			"Welcome to my portfolio website, where I showcase my skills and projects as a talented software engineer. I specialize in creating innovative web applications using modern technologies like Next.js, React.js, and PostgreSQL. Explore my portfolio to witness my expertise in delivering seamless user experiences and impactful digital solutions.",
		openGraph: {
			type: "website",
			url: "https://harish-balaji.vercel.app",
			image: "https://harish-balaji.vercel.app/images/website-preview.png",
		},
	},
	resume: {
		title: `Resume | ${data.name}`,
		description:
			"Discover my resume and portfolio website, showcasing my expertise as a skilled software engineer. With a strong background in frontend and backend development, I highlight my proficiency in technologies such as Next.js, React.js, and PostgreSQL. Explore my accomplishments and skills to see how I can contribute to your next project.",
		openGraph: {
			type: "website",
			url: "https://harish-balaji.vercel.app/resume",
			image: "https://harish-balaji.vercel.app/images/website-preview.png",
		},
	},
};
export { workURL, aboutURL, blogURL, resumeURL, SEO };
