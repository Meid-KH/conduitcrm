import React from "react";
import Link from "next/link";

import HomeIntroBG from "assets/img/home-intro-bg.png";
import Button from "components/Button";
import Icon from "utils/Icon";

const Intro = () => {
	return (
		<div className="bg-primary-700">
			<div className="container px-6 mx-auto overflow-hidden">
				<div className=" text-faded relative z-10 max-w-[1086px] mx-auto text-center pt-16">
					<h1 className="text-3xl leading-snug font-bold uppercase lg:text-5xl lg:leading-relaxed mb-6">
						Manage all your leads{" "}
						<span className="block text-4xl lg:text-7xl text-primary-500">
							Like a pro
						</span>
					</h1>
					<p className=" mx-auto leading-relaxed lg:text-lg lg:max-w-lg">
						Streamline and simplify{" "}
						<span className="underline underline-offset-4">
							lead-processing pipelines
						</span>
						, so that real estate and loan professionals can focus
						more on helping clients and less on managing the
						process.
					</p>
					<div className="flex flex-wrap justify-center gap-5 mt-10">
						<Link href="/">
							<a className="block">
								<Button>Explore more</Button>
							</a>
						</Link>
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
				<div className="max-w-4xl -mx-8 lg:mx-auto lg:-translate-y-36 lg:-mb-72">
					<img
						className="max-w-full mx-auto"
						src={HomeIntroBG.src}
						alt="Home Intro BG"
					/>
				</div>
			</div>
		</div>
	);
};

export default Intro;
