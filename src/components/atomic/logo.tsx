import Link from "next/link";
import React from "react";
import Button from "../button";

const Logo = () => {

	return (
		<Link href={"/"} passHref>
			<div
				className={`w-8 h-8 tablet:h-9 text-lg font-medium flex justify-center items-center rounded-md cursor-none link`}
			>
				<Button type="primary" classes="w-full h-full m-0 pt-1">H</Button>
			</div>
		</Link>
	);
};

export default Logo;
