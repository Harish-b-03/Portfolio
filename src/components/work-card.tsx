import GithubIcon from "./icons/github-icon";
import Button from "./button";
import WebsiteIcon from "./icons/website-icon";
import Image from "next/image";

const WorkCard = ({ img, name, description, website, code }: any) => {
	return (
		<div className="w-full overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link cursor-none">
			<a href={website} target="_blank" className="w-full">
				<div
					className="w-full relative rounded-lg overflow-hidden transition-all ease-out duration-300 mob:h-auto"
					style={{ height: "300px" }}
				>
					<div className="relative w-full h-full">
						<Image
							src={img}
							alt={name}
							fill
							sizes=""
							className="object-cover hover:scale-110 transition-all ease-out duration-300 cursor-none"
						/>
					</div>
				</div>
			</a>
			<div className="w-full flex justify-between items-center">
				<div className="w-4/6 tablet:w-5/6">
					<h1 className="mt-5 text-2xl tablet:text-3xl font-medium">
						{name ? name : "Project Name"}
					</h1>
					<h2 className="tablet:text-xl opacity-50">
						{description ? description : "Description"}
					</h2>
				</div>
				<div className="w-1/4 tablet:w-1/6 flex justify-between items-center">
					{code !== undefined && (
						<a href={code} className="link cursor-none">
							<Button>
								<GithubIcon />
							</Button>
						</a>
					)}
					{website !== undefined && (
						<a href={website} className="link cursor-none">
							<Button>
								<WebsiteIcon />
							</Button>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default WorkCard;
