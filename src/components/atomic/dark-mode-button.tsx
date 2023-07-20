import Button from "../button";
import data from "@/data/portfolio.json";
import { useTheme } from "@/contexts/theme-context";
import Image from "next/image";

const DarkModeButton = () => {
	const { theme, changeTheme } = useTheme();

	return data.darkMode ? (
		<Button
			onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
		>
			<Image
				src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
				alt="sun"
                width={24}
                height={24}
			/>
		</Button>
	) : (
		<></>
	);
};

export default DarkModeButton;
