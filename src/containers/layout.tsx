// Local Data
import { useTheme } from "@/contexts/theme-context";
import data from "../data/portfolio.json";
import Header from "./header";

const Layout = ({ children, isBlog = false }: any) => {
	const { theme } = useTheme();

	return (
		<main
			className={`relative px-5 laptop:px-10 w-100 min-h-screen ${
				data.showCursor && "cursor-none"
			} ${
				theme === "light"
					? "bg-white text-black"
					: "bg-black text-white"
			} overflow-x-hidden overflow-y-hidden scroll-smooth cursor-none transition-all duration-300`}
		>
			<Header isBlog={isBlog} />
			{children}
		</main>
	);
};

export default Layout;
