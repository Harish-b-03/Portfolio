import Hero from "../components/hero";
import Head from "next/head";
import Cursor from "@/components/cursor";
import Footer from "@/components/footer";
import Works from "@/components/works";
// Local Data
import data from "../data/portfolio.json";
import Blogs from "@/components/blogs";
import About from "@/components/about";
import { SEO } from "@/utils/constants";
import Layout from "@/containers/layout";

export default function Home() {
	return (
		<Layout>
			{data.showCursor && <Cursor />}
			<Head>
				<title>{SEO.home.title}</title>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<meta name="description" content={SEO.home.description} />
				<meta
					key="og:type"
					name="og:type"
					content={SEO.home.openGraph.type}
				/>
				<meta key="og:title" name="og:title" content={SEO.home.title} />
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
			<div className="w-full">
				<div className="gradient-circle"></div>
				<div className="gradient-circle-bottom"></div>
			</div>

			<div className="container mx-auto mb-10">
				<Hero />
				<Works />
				<Blogs />
				<About />
				<Footer />
			</div>
		</Layout>
	);
}
