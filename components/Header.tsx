import React from "react";
import Image from "next/image";

import Logo from "components/Logo";
import Button from "components/Button";
import LogoShadow from "assets/img/logo-shadow.png";
import Link from "next/link";

const Header = () => {
	return (
		<header className="px-6 py-8 lg:py-[40px] bg-primary-700 text-faded max-w-[1920px]">
			<div className="w-[540px] absolute -left-16 -top-14">
				<img src={LogoShadow.src} alt="Logo preview" />
			</div>
			<div className="h-[104px] max-w-[1780px] mx-auto flex justify-between items-center">
				<div className="w-28">
					<Logo />
				</div>
				<nav className="flex items-center gap-11">
					<Link href="/">
						<a className="text-[18px] hover:text-white">Product</a>
					</Link>
					<Link href="/">
						<a className="text-[18px] hover:text-white">Pricing</a>
					</Link>
					<Link href="/">
						<a className="text-[18px] hover:text-white">
							Resources
						</a>
					</Link>
					<Link href="/">
						<a className="text-[18px] hover:text-white">About</a>
					</Link>
					<Link href="/">
						<a className="text-[18px] hover:text-white">
							Contact us
						</a>
					</Link>
				</nav>
				<nav className="flex items-center gap-11">
					<Link href="/">
						<a className="text-[18px] hover:text-white">Log in</a>
					</Link>
					<Link href="/">
						<a className="block">
							<Button primary>Get started</Button>
						</a>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
