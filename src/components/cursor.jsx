import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import { useTheme } from "@/contexts/theme-context";

const Cursor = () => {
	const { theme } = useTheme();

	const getCusomColor = () => {
		if (theme === "dark") {
			return "#fff";
		} else if (theme === "light") {
			return "#000";
		}
	};

	return (
		<>
			<CustomCursor
				targets={[".link"]}
				customClass="custom-cursor"
				dimensions={30}
				fill={getCusomColor()}
				smoothness={{
					movement: 0.2,
					scale: 0.1,
					opacity: 0.2,
				}}
				targetOpacity={0.5}
				targetScale={2}
			/>
		</>
	);
};

export default Cursor;
