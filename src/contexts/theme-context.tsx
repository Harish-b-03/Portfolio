import { createContext, useState, useContext } from "react";
import { defaultTheme } from "@/utils/constants";

const ThemeContext = createContext<{ theme: string; changeTheme: any }>({
	theme: defaultTheme,
	changeTheme: () => {},
});

export const ThemeProvider = ({ children }: any) => {
	const [theme, setTheme] = useState(defaultTheme);

	const changeTheme = (s: string) => {
		switch (s.toLowerCase()) {
			case "light":
				setTheme("light");
				break;
			case "dark":
				setTheme("dark");
				break;
			default:
				setTheme("light");
		}
	};

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
