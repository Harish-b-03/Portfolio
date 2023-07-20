import Button from "../button";
import data from "@/data/portfolio.json";
import { useTheme } from "@/contexts/theme-context";

const DarkModeButton = () => {
	const { theme, changeTheme } = useTheme();

	return data.darkMode ? (
		<Button
			onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
		>
			<img
				className="h-6"
				src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
				alt="sun"
			></img>
		</Button>
	) : (
		<></>
	);
};

export default DarkModeButton;
