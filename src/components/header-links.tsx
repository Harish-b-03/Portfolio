import { aboutURL, blogURL, resumeURL, workURL } from "@/utils/constants";
import Link from "next/link";
import Button from "./button";
import data from "@/data/portfolio.json";

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
				<Link href={workURL} passHref>
					<Button>Work</Button>
				</Link>
			)}
			{showBlog && (
                <Link href={blogURL} passHref>
					<Button>Blog</Button>
				</Link>
			)}
            {isHome && (
                <Link href={aboutURL} passHref>
                    <Button>About</Button>
                </Link>
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
