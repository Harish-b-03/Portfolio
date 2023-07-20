import data from "@/data/portfolio.json";
import { useEffect, useState } from "react";
import HandwrittenHeading from "./atomic/handwritten-heading";
import BlogCard from "./blog-card";
import PrimaryButton from "./atomic/primary-button";

export interface BlogType {
	title: string;
	date: string;
	link: string;
	image: string;
	description: string;
	tags?: string[];
}

const Blogs = () => {
	const [blogList, setBlogList] = useState<BlogType[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const numberOfBlogs = 3;

	const getBlogs = async () => {
		const blogs: BlogType[] = [];
		setLoading(true);

		await fetch("https://mediumpostsapi.vercel.app/api/harishbalaji369")
			.then((res) => res.json())
			.then((data) => {
				data.dataMedium.map((blog: BlogType, index: number) => {
					if (index < numberOfBlogs) {
						blogs.push(blog);
					}
				});
				setBlogList(blogs);
			})
			.catch((err) => alert(err))
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		getBlogs();
	}, []);

	return (
		<div id="blog" className="mt-10 laptop:mt-10 pt-20">
			<HandwrittenHeading title="Blogs" />
			<div className="my-5 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6">
				{blogList.map((blog, index: any) => (
					<BlogCard
						key={index}
						img={blog.image}
						name={blog.title}
						description={blog.description}
						link={blog.link}
						loading={loading}
					/>
				))}
			</div>
			{!loading && blogList.length <= 0 && (
				<div>
					<span className="text-xs">
                        Failed to load blog posts due to network error
                    </span>
				</div>
			)}
			<div className="w-full flex justify-center items-center">
				<a href={data.mediumURL} target="_blank">
					<PrimaryButton title="Read more" />
				</a>
			</div>
		</div>
	);
};

export default Blogs;
