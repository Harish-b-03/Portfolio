import { aboutURL, blogURL, resumeURL, workURL } from "@/utils/constants";
import Link from "next/link";
import Button from "./button";
import data from "@/data/portfolio.json";
import ScrollLink from "./atomic/scroll-link";

const HeaderLinks = ({ isMobile = false, isHome = true }) => {
	const { showBlog, showResume } = data;

	return (
		<div className={`${isMobile? "grid grid-cols-1" : "flex"} cursor-none`}>
			{!isHome && (
				<Link href={"/"} passHref>
					<Button classes="first:ml-1">Home</Button>
				</Link>
			)}
			{isHome && (
				<ScrollLink href={workURL} passHref>
					<Button>Work</Button>
				</ScrollLink>
			)}
			{showBlog && (
                <ScrollLink href={blogURL} passHref>
					<Button>Blog</Button>
				</ScrollLink>
			)}
            {isHome && (
                <ScrollLink href={aboutURL} passHref>
                    <Button>About</Button>
                </ScrollLink>
            )}
			{showResume && (
				<Link href={resumeURL} passHref>
					<Button>Resume</Button>
				</Link>
			)}
			<Button onClick={() => window.open(`mailto:${data.email}`)}>
				Contact
			</Button>
		</div>
	);
};

export default HeaderLinks;
