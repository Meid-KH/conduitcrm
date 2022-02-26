import React from "react";
import Image from "next/image";

import Logo from "components/Logo";
import Button from "components/Button";
import LogoShadow from "assets/img/logo-shadow.png";
import Link from "next/link";
import Icon from "utils/Icon";

const Header = () => {
	const [sticky, setSticky] = React.useState(false);

	React.useEffect(() => {
		const win: Window = window;
		win.addEventListener("scroll", onScroll, true);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const onScroll: EventListener = (event: Event) => {
		// console.log("event", window.scrollY);
		if (window.scrollY > 100) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};

	return (
		<>
			<div className="opacity-60 absolute w-64 -left-12 -top-14 xl:w-[340px] xl:-left-10 xl:-top-8">
				<img src={LogoShadow.src} alt="Logo preview" />
			</div>
			<header
				id="header"
				className={`${
					sticky
						? "fixed w-full py-2 bg-black/90"
						: " py-8 lg:py-[40px]"
				} sticky__ z-30 top-0 transition-all duration-300 px-6 bg-primary-700 text-faded max-w-[1920px]__`}
			>
				<div
					className={`${
						sticky ? "h-auto max-w-6xl" : "h-[104px]"
					} transition-all duration-300 h-[104px] max-w-7xl mx-auto flex justify-between items-center`}
				>
					<Link href="/">
						<a
							className={`${
								sticky ? "w-16" : "w-28"
							} relative block transition-all duration-300`}
						>
							<Logo />
						</a>
					</Link>

					<MainMenu />

					<nav className="hidden lg:flex items-center gap-11">
						<Link href="/">
							<a className="hover:text-white">Log in</a>
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
					</nav>
				</div>
			</header>
		</>
	);
};

const MainMenu = () => {
	const menuContainer = React.useRef<HTMLUListElement>(null);
	const [parentWidth, setParentWidth] = React.useState(0);
	const [menuOpen, setMenuOpen] = React.useState(false);

	React.useEffect(() => {
		// console.log("menu width : " + menuContainer.current!.offsetWidth);
		if (typeof menuContainer.current != null) {
			setParentWidth(menuContainer.current!.offsetWidth);
		}
	}, []);

	// console.log("waaa " + parentWidth);

	const handleMenu = () => {
		setMenuOpen(!menuOpen);
		menuOpen
			? document.body.classList.remove("overflow-hidden")
			: document.body.classList.add("overflow-hidden");
	};

	return (
		<>
			<button
				onClick={() => handleMenu()}
				className="relative lg:hidden w-14 h-14 p-2 rounded-md focus:ring hover:bg-black/90"
			>
				<Icon name={menuOpen ? "close" : "hamburger"} />
			</button>
			<ul
				className={`hidden___
        ${menuOpen ? "left-0 opacity-100" : "-left-full opacity-0"}
        transition-all
        fixed
        z-50
        top-0
        w-4/6
        h-full
        bg-black/90
        p-6
        sm:w-1/2
        lg:flex 
        lg:opacity-100
        lg:static
        lg:bg-transparent
        lg:p-0
        lg:w-auto
        items-center `}
				ref={menuContainer}
			>
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
		</>
	);
};

type MenuItemProps = {
	title: string;
	url: string;
	ancestors?: React.ReactNode;
	parentWidth?: number;
};

const MenuItem = ({ title, url, ancestors, parentWidth }: MenuItemProps) => {
	const [open, setOpen] = React.useState(false);

	return (
		<li
			className="relative"
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<Link href={url}>
				<a
					className={`flex items-center gap-2 py-3 px-4 rounded-lg ${
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
					style={{ minWidth: `${parentWidth}px` }}
					className={`absolute z-20 left-0 top-full -translate-y-2 w-max min-w-[560px]__ bg-black/95 rounded-lg py-6 px-8 ${
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
