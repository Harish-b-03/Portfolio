import { Popover } from "@headlessui/react";
import HeaderLinks from "../components/header-links";
import DarkModeButton from "../components/atomic/dark-mode-button";
import Logo from "../components/atomic/logo";
import { useTheme } from "@/contexts/theme-context";

const Header = ({ isBlog }: any) => {
	const { theme } = useTheme();

	return (
		<>
			<Popover className="block tablet:hidden mt-5 cursor-none">
				{({ open }) => (
					<>
						<div className="flex items-center justify-between p-2 laptop:p-0">
							<Logo />

							<div className="flex items-center">
								<DarkModeButton />

								<Popover.Button>
									{/* Hamburgar icon */}
									<img
										className="h-5"
										src={`/images/${
											!open
												? theme === "dark"
													? "menu-white.svg"
													: "menu.svg"
												: theme === "light"
												? "cancel.svg"
												: "cancel-white.svg"
										}`}
										alt="hamburgar"
									></img>
								</Popover.Button>
							</div>
						</div>
						<Popover.Panel
							className={`absolute right-0 z-10 w-11/12 p-4 ${
								theme === "dark" ? "bg-slate-800" : "bg-white"
							} shadow-md rounded-md`}
						>
							{!isBlog ? (
								<HeaderLinks isMobile={true} />
							) : (
								<HeaderLinks isMobile={true} isHome={false} />
							)}
						</Popover.Panel>
					</>
				)}
			</Popover>
			<div
				className={`mt-10 hidden flex-row items-center justify-between sticky dark:text-white top-0 z-10 tablet:flex cursor-none hover:cursor-none`}
			>
				<Logo />
				{!isBlog ? (
					<div className="flex">
						<HeaderLinks />
						<DarkModeButton />
					</div>
				) : (
					<div className="flex">
						<HeaderLinks isHome={false} />
						<DarkModeButton />
					</div>
				)}
			</div>
		</>
	);
};

export default Header;
