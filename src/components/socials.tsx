import React from "react";
import Button from "./button";

import yourData from "../data/portfolio.json";

const Socials = ({ className }: any) => {
	return (
		<div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
			{yourData.socials.map((social, index) => (
				<Button key={index} onClick={() => window.open(social.link)}>
					{social.title}
				</Button>
			))}
		</div>
	);
};

export default Socials;
