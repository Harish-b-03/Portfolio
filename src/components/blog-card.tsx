import { useTheme } from "@/contexts/theme-context";

const BlogCard = ({ img, name, link, loading = false }: any) => {
	const { theme } = useTheme();

	return (
		<div
			className={`overflow-hidden rounded-lg first:ml-0 link bg-gradient-to-br ${
				theme === "light"
					? " from-gray-200 to-pink-50"
					: "text-black bg-white/40 bg-opacity-10"
			} h-fit tablet:h-[350px] tablet:min-h-fit cursor-none hover:scale-105 hover:z-20 transition-all duration-300`}
		>
			{!loading ? (
				<a
					href={link}
					target="_blank"
					className="w-full p-2 laptop:p-5 cursor-none h-full"
				>
					<div className="h-3/5 max-h-[180px] desktop:max-h-max px-2 laptop:px-5 relative rounded-lg overflow-hidden flex justify-center items-center transition-all ease-out duration-300">
						<img
							alt={name}
							className="h-full w-full object-cover transition-all ease-out duration-300"
							src={img}
						></img>
					</div>
					<div className="w-full px-2 laptop:px-5 flex flex-col justify-center items-center">
						<div className="w-full">
							<h1 className="mt-5 text-lg tablet:text-xl font-medium ">
								{name ? name : "Project Name"}
							</h1>
						</div>
					</div>
				</a>
			) : (
				<div className="w-full h-full animate-pulse bg-gray-600"></div>
			)}
		</div>
	);
};

export default BlogCard;
