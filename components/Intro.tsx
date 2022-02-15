import Link from "next/link";
import React from "react";
import Logo from "components/Logo";
import Button from "components/Button";

const Intro = () => {
	return (
		<header className="px-6 py-8 lg:py-[88px] bg-primary-700 text-faded">
			<div className="h-[104px] max-w-[1780px] mx-auto flex justify-between items-center">
				<div className="w-28">
					<Logo />
				</div>
				<nav className="flex items-center gap-11">
					<Link href="/">
						<a className="text-[21px] hover:text-white">Product</a>
					</Link>
					<Link href="/">
						<a className="text-[21px] hover:text-white">Pricing</a>
					</Link>
					<Link href="/">
						<a className="text-[21px] hover:text-white">
							Resources
						</a>
					</Link>
					<Link href="/">
						<a className="text-[21px] hover:text-white">About</a>
					</Link>
					<Link href="/">
						<a className="text-[21px] hover:text-white">
							Contact us
						</a>
					</Link>
				</nav>
				<nav className="flex items-center gap-11">
					<Link href="/">
						<a className="text-[21px] hover:text-white">Log in</a>
					</Link>
					<Link href="/">
						<a className="block">
							<Button primary>Get started</Button>
						</a>
					</Link>
				</nav>
			</div>

			<div className="max-w-[1086px]">
				<h1 className="">
					Manage all your leads <span className="">Like a pro</span>
				</h1>
				<p>
					ConduitCRM exists to streamline and simplify lead-processing
					pipelines, so that real estate and loan professionals can
					focus more on helping clients and less on managing the
					process.
				</p>
				<div className="flex gap-5">
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
		</header>
	);
};

export default Intro;
