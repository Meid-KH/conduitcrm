import Button from "components/Button";
import Link from "next/link";
import React from "react";

const Cta = () => {
	return (
		<section className="bg-gradient-to-b from-primary-700 to-primary-600 py-60 -skew-y-[2deg]">
			<div className="container mx-auto skew-y-[2deg]">
				<div className="text-center">
					<h4 className="text-5xl text-faded font-semibold leading-tight">
						The only LP-CRM.
						<span className="block font-light text-primary-500">
							Limitless stuff.
						</span>
					</h4>
					<div className="mt-6">
						<Link href="/">
							<a className="block">
								<Button primary>Get Started</Button>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta;
