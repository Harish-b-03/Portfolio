import React, { useEffect, useState } from "react";
import Button from "../button";
import { useTheme } from "next-themes";
import data from "@/data/portfolio.json";

const DarkModeButton = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return <></>;

	return data.darkMode ? (
		<Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
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
