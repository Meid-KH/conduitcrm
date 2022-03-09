import React from "react";
import Link from "next/link";

import HomeIntroBG from "assets/img/home-intro-bg.png";
import Button from "components/Button";
import Icon from "utils/Icon";

const Intro = () => {
	return (
		<section className="pt-16 pb-32 lg:pt-10 lg:pb-48 bg-primary-700">
			<div className="container px-6 mx-auto overflow-hidden">
				<div className=" text-faded relative z-10 max-w-[1086px] mx-auto text-center">
					<h1 className="text-3xl leading-snug font-bold tracking-widest uppercase lg:text-5xl lg:leading-relaxed mb-8">
						Make your business
						<span className="block capitalize text-4xl lg:text-7xl">
							<span className="text-primary-500">
								More impactful
							</span>{" "}
							with us
						</span>
					</h1>
					<p className="mx-auto leading-relaxed lg:text-lg lg:max-w-lg">
						Fuel your pipeline with a modern, mobile-friendly
						workflow that eliminates the need for constant email
						communication to manage your contacts.
					</p>
					<div className="flex flex-wrap justify-center gap-5 mt-10">
						<Link href="/">
							<a className="block">
								<Button primary>
									<div className="flex items-center gap-2">
										Get started
										<span className="w-6 rotate-90 -mr-6">
											<Icon name="arrow" />
										</span>
									</div>
								</Button>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
