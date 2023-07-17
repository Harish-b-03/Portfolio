import { useEffect, useState } from "react";
import Hero from "../components/hero";
import Head from "next/head";
import Cursor from "@/components/cursor";
import ServiceCard from "@/components/service-card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Works from "@/components/works";
// Local Data
import data from "../data/portfolio.json";
import Blogs from "@/components/blogs";
import About from "@/components/about";
import { SEO } from "@/utils/constants";

export default function Home() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <></>;
	}

	return (
		<main
			className={`relative px-5 laptop:px-10 w-100 min-h-screen ${
				data.showCursor && "cursor-none"
			} overflow-x-hidden overflow-y-hidden scroll-smooth cursor-none`}
		>
			{data.showCursor && <Cursor />}
			<Head>
				<title>{SEO.home.title}</title>
                <meta name="description" content={SEO.home.description} />
                <meta
                    key="og:type"
                    name="og:type"
                    content={SEO.home.openGraph.type}
                />
                <meta
                    key="og:title"
                    name="og:title"
                    content={SEO.home.title}
                />
                <meta
                    key="og:description"
                    name="og:description"
                    content={SEO.home.description}
                />
                <meta
                    key="og:url"
                    name="og:url"
                    content={SEO.home.openGraph.url}
                />
                <meta
                    key="og:image"
                    name="og:image"
                    content={SEO.home.openGraph.image}
                />
			</Head>

			<div className="gradient-circle"></div>
			<div className="gradient-circle-bottom"></div>

			<div className="container mx-auto mb-10">
				<Header />
				<Hero />
				<Works />
				<Blogs />
				<About />
				<Footer />
			</div>
		</main>
	);
}
