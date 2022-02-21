import React from "react";
import Link from "next/link";

import HomeIntroBG from "assets/img/home-intro-bg.png";
import Button from "components/Button";

const Intro = () => {
	return (
		<div className="bg-primary-700">
			<div className="container mx-auto">
				<div className=" text-faded relative z-10 max-w-[1086px] mx-auto text-center pt-40">
					<h1 className="text-6xl font-bold uppercase leading-snug mb-9">
						Manage all your leads{" "}
						<span className="block text-8xl text-primary-500">
							Like a pro
						</span>
					</h1>
					<p className="text-3xl leading-snug">
						Streamline and simplify{" "}
						<span className="underline decoration-2 decoration-wavy underline-offset-2 decoration-amber-500">
							lead-processing pipelines
						</span>
						, so that real estate and loan professionals can focus
						more on helping clients and less on managing the
						process.
					</p>
					<div className="flex justify-center gap-5 mt-20">
						<Link href="/">
							<a className="block">
								<Button>Explore more</Button>
							</a>
						</Link>
						<Link href="/">
							<a className="block">
								<Button primary>Get started</Button>
							</a>
						</Link>
					</div>
				</div>
				<div className="max-w-full mx-auto -translate-y-48 -mb-96">
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
