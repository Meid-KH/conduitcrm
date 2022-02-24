import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Footer = () => {
	return (
		<footer
			className="relative
      before:absolute before:-skew-y-2 before:-translate-y-1/4 before:top-0 before:left-0 before:h-1/2 before:w-full before:bg-primary-700
      bg-primary-700 pb-20"
		>
			<div className="container mx-auto relative z-10">
				<div className="grid gap-6 grid-cols-5">
					<div className="col-span-2">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 flex-shrink-0">
								<Logo />
							</div>
							<span>
								<strong>conduitcrm</strong>.com
							</span>
						</div>
						<div className="text-sm mt-6">
							All rights reserved @ ConduitCRM LLC
						</div>
						<ul className="mt-14 space-y-3">
							<li>
								<Link href="/">
									<a className="block text-sm font-light underline underline-offset-2 hover:text-white">
										Status
									</a>
								</Link>
							</li>
							<li>
								<Link href="/">
									<a className="block text-sm font-light underline underline-offset-2 hover:text-white">
										Terms & Privacy
									</a>
								</Link>
							</li>
							<li>
								<Link href="/">
									<a className="block text-sm font-light underline underline-offset-2 hover:text-white">
										Privacy Policy
									</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-4">
						<div className="text-primary-500 font-semibold">
							Product
						</div>
						<ul className="space-y-4">
							<Link href="/">
								<a className="block text-sm font-light underline-offset-2 hover:text-white hover:underline">
									Product Overview
								</a>
							</Link>
							<Link href="/">
								<a className="block text-sm font-light underline-offset-2 hover:text-white hover:underline">
									CRM
								</a>
							</Link>
							<Link href="/">
								<a className="block text-sm font-light underline-offset-2 hover:text-white hover:underline">
									Pipelines
								</a>
							</Link>
							<Link href="/">
								<a className="block text-sm font-light underline-offset-2 hover:text-white hover:underline">
									Automation
								</a>
							</Link>
							<Link href="/">
								<a className="block text-sm font-light underline-offset-2 hover:text-white hover:underline">
									Lead Processing
								</a>
							</Link>
							<Link href="/">
								<a className="block text-sm font-light underline-offset-2 hover:text-white hover:underline">
									Tags
								</a>
							</Link>
							<Link href="/">
								<a className="block text-sm font-light underline-offset-2 hover:text-white hover:underline">
									Integration
								</a>
							</Link>
							<Link href="/">
								<a className="block text-sm font-light underline-offset-2 hover:text-white hover:underline">
									Tasks
								</a>
							</Link>
							<Link href="/">
								<a className="block text-sm font-light underline-offset-2 hover:text-white hover:underline">
									Milestones
								</a>
							</Link>
							<Link href="/">
								<a className="block text-sm font-light underline-offset-2 hover:text-white hover:underline">
									Deals
								</a>
							</Link>
							<Link href="/">
								<a className="block text-sm font-light underline-offset-2 hover:text-white hover:underline">
									Teams
								</a>
							</Link>
							<Link href="/">
								<a className="block text-sm font-light underline-offset-2 hover:text-white hover:underline">
									Client Experience
								</a>
							</Link>
							<Link href="/">
								<a className="block text-sm font-light underline-offset-2 hover:text-white hover:underline">
									Pricig
								</a>
							</Link>
							<Link href="/">
								<a className="block text-sm font-light underline-offset-2 hover:text-white hover:underline">
									Teams
								</a>
							</Link>
						</ul>
					</div>
					<div className="space-y-4">
						<div className="text-primary-500 font-semibold">
							Company
						</div>
						<ul className="space-y-4">
							<Link href="/">
								<a className="block text-sm font-light underline-offset-2 hover:text-white hover:underline">
									About us
								</a>
							</Link>
							<Link href="/">
								<a className="block text-sm font-light underline-offset-2 hover:text-white hover:underline">
									contact us
								</a>
							</Link>
							<Link href="/">
								<a className="block text-sm font-light underline-offset-2 hover:text-white hover:underline">
									Careers
								</a>
							</Link>
						</ul>
					</div>
					<div className="space-y-4">
						<div className="text-primary-500 font-semibold">
							Ressources
						</div>
						<ul className="space-y-4">
							<Link href="/">
								<a className="block text-sm font-light underline-offset-2 hover:text-white hover:underline">
									Blog
								</a>
							</Link>
							<Link href="/">
								<a className="block text-sm font-light underline-offset-2 hover:text-white hover:underline">
									Videos
								</a>
							</Link>
							<Link href="/">
								<a className="block text-sm font-light underline-offset-2 hover:text-white hover:underline">
									Knowledge base
								</a>
							</Link>
							<Link href="/">
								<a className="block text-sm font-light underline-offset-2 hover:text-white hover:underline">
									Support
								</a>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
