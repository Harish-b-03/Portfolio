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
			className={`relative px-10 w-100 min-h-screen ${
				data.showCursor && "cursor-none"
			} overflow-x-hidden overflow-y-hidden scroll-smooth cursor-none`}
		>
			{data.showCursor && <Cursor />}
			<Head>
				<title>{data.name + "'s portfolio"}</title>
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
