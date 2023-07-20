// Local Data
import { useTheme } from "@/contexts/theme-context";
import data from "../data/portfolio.json";
import Header from "./header";

const Layout = ({ children, isBlog = false }: any) => {
	const { theme } = useTheme();

	return (
		<main
			className={`relative w-full h-screen ${
				data.showCursor && "cursor-none"
			} ${
				theme === "light"
					? "bg-white text-black"
					: "bg-black text-white"
			} overflow-hidden scroll-smooth  cursor-none transition-all duration-300`}
		>
			<div className="px-5 laptop:px-20 w-full h-fit overflow-hidden">
				<Header isBlog={isBlog} />
				{children}
			</div>
		</main>
	);
};

export default Layout;
