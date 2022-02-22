import React from "react";
import Image from "next/image";

import Logo from "components/Logo";
import Button from "components/Button";
import LogoShadow from "assets/img/logo-shadow.png";
import Link from "next/link";
import Icon from "utils/Icon";

// const MenuItems = ["Product", "Pricing", "Resources", "About", "Contact us"];

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

				<MainMenu />

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

const MainMenu = () => {
	const menuContainer = React.useRef<HTMLUListElement>(null);
	const [parentWidth, setParentWidth] = React.useState(0);

	React.useEffect(() => {
		// console.log("menu width : " + menuContainer.current!.offsetWidth);
		if (typeof menuContainer.current != null) {
			setParentWidth(menuContainer.current!.offsetWidth);
		}
	}, []);

	// console.log("waaa " + parentWidth);

	return (
		<ul className="flex items-center gap-2__" ref={menuContainer}>
			<MenuItem
				title="Product"
				url="/"
				ancestors={
					<div className="space-y-4">
						<div>
							<span className="block font-semibold text-primary-500">
								Overview
							</span>
							<ul className="grid grid-cols-2 py-3 px-3 text-sm space-y-3">
								<li className="col-span-2">
									<a
										href="/"
										className="underline-offset-2 hover:text-white hover:underline"
									>
										Product Overview
									</a>
								</li>
							</ul>
						</div>

						<div>
							<span className="block font-semibold text-primary-500">
								Features
							</span>
							<ul className="grid grid-cols-2 gap-4 py-3 px-3 text-sm">
								<li>
									<a
										href="/"
										className="underline-offset-2 hover:text-white hover:underline"
									>
										CRM
									</a>
								</li>
								<li>
									<a
										href="/"
										className="underline-offset-2 hover:text-white hover:underline"
									>
										Tasks
									</a>
								</li>
								<li>
									<a
										href="/"
										className="underline-offset-2 hover:text-white hover:underline"
									>
										Pipelines
									</a>
								</li>
								<li>
									<a
										href="/"
										className="underline-offset-2 hover:text-white hover:underline"
									>
										Milestones
									</a>
								</li>
								<li>
									<a
										href="/"
										className="underline-offset-2 hover:text-white hover:underline"
									>
										Automation
									</a>
								</li>
								<li>
									<a
										href="/"
										className="underline-offset-2 hover:text-white hover:underline"
									>
										Deals
									</a>
								</li>
								<li>
									<a
										href="/"
										className="underline-offset-2 hover:text-white hover:underline"
									>
										Lead Processing
									</a>
								</li>
								<li>
									<a
										href="/"
										className="underline-offset-2 hover:text-white hover:underline"
									>
										Teams
									</a>
								</li>
								<li>
									<a
										href="/"
										className="underline-offset-2 hover:text-white hover:underline"
									>
										Tags
									</a>
								</li>
								<li>
									<a
										href="/"
										className="underline-offset-2 hover:text-white hover:underline"
									>
										Client Experience
									</a>
								</li>
								<li>
									<a
										href="/"
										className="underline-offset-2 hover:text-white hover:underline"
									>
										Integration
									</a>
								</li>
							</ul>
						</div>
					</div>
				}
				parentWidth={parentWidth}
			/>
			<MenuItem title="Pricing" url="/" />
			<MenuItem title="Resources" url="/" />
			<MenuItem title="About" url="/" />
			<MenuItem title="Contact us" url="/" />
		</ul>
	);
};

type MenuItemProps = {
	title: string;
	url: string;
	ancestors?: React.ReactNode;
	parentWidth?: number;
};

const MenuItem = ({ title, url, ancestors, parentWidth }: MenuItemProps) => {
	const [open, setOpen] = React.useState(true);

	return (
		<li
			className="relative"
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<Link href={url}>
				<a
					className={`flex items-center gap-2 py-3 px-4 rounded-lg text-[18px] ${
						open && "bg-black"
					} hover:text-white`}
				>
					{title}
					{ancestors && (
						<span
							className={`transition-all  ${
								open ? "w-4 opacity-100" : "w-0 opacity-0"
							}`}
						>
							<Icon name="arrow" />
						</span>
					)}
				</a>
			</Link>
			{ancestors && (
				<div
					className={`absolute z-20 left-0 top-full -translate-y-2 w-max min-w-[560px] bg-black/95 rounded-lg py-6 px-8 ${
						!open && "hidden"
					}`}
				>
					{ancestors}
				</div>
			)}
		</li>
	);
};

export default Header;