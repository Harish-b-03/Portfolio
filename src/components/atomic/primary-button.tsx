import { useTheme } from "@/contexts/theme-context";

const PrimaryButton = ({
	title,
	onClick = () => {},
}: {
	title: string;
	onClick?: any;
}) => {
	const { theme } = useTheme();

	return (
		<button
			className={`w-36 h-12 flex justify-center items-center ${
				theme === "dark"
					? "bg-gray-100 text-black shadow-sm shadow-gray-200 hover:shadow-gray-900 hover:bg-black hover:border-gray-500 hover:text-white"
					: "bg-black text-white shadow-gray-800 hover:shadow-gray-400 hover:bg-white hover:border-black hover:text-black"
			} shadow-md font-semibold rounded-md cursor-none border border-transparent transition-all duration-200`}
			onClick={() => onClick()}
		>
			{title}
		</button>
	);
};

export default PrimaryButton;
