import React from "react";
import Socials from "./socials";
import Link from "next/link";
import Button from "./button";
import HandwrittenHeading from "./atomic/handwritten-heading";
import PrimaryButton from "./atomic/primary-button";

const Footer = ({}) => {
	return (
		<>
			<div className="w-full mt-5 laptop:mt-40 p-2 laptop:p-0 flex justify-center items-center">
				<div className="w-3/5">
					<HandwrittenHeading title="Contact" />
					<div className="mt-10 w-full flex flex-col justify-center items-center">
						<h1 className="text-3xl tablet:text-4xl laptop:text-4xl laptopl:text-8xl text-bold">
							Let&apos;s meet and have a cup of coffee
						</h1>
						<div className="mt-5">
							<a href="mailto:harishbalaji369@gmail.com">
								<PrimaryButton title="Let's connect" />
							</a>
						</div>
						<div className="mt-10">
							<Socials />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
