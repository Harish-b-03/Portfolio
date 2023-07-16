import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import data from "@/data/portfolio.json";
import { Popover } from "@headlessui/react";
import HeaderLinks from "./header-links";
import DarkModeButton from "./atomic/dark-mode-button";
import Logo from "./atomic/logo";

const Header = ({ isBlog }: any) => {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const { name } = data;

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return <></>;

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
				className={`mt-10 hidden flex-row items-center justify-between sticky ${
					theme === "light" && "bg-white"
				} dark:text-white top-0 z-10 tablet:flex cursor-none hover:cursor-none`}
			>
				<Logo />
				{!isBlog ? (
					<div className="flex">
						<HeaderLinks />
						{mounted && theme && <DarkModeButton />}
					</div>
				) : (
					<div className="flex">
						<HeaderLinks isHome={false} />
						{mounted && theme && <DarkModeButton />}
					</div>
				)}
			</div>
		</>
	);
};

export default Header;
