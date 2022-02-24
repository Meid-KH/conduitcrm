import Button from "components/Button";
import Link from "next/link";
import React from "react";
import Icon from "utils/Icon";

const Cta = () => {
	return (
		<section className="bg-gradient-to-b from-primary-700 to-primary-600 py-60">
			<div className="container mx-auto">
				<div className="text-center">
					<h4 className="text-5xl text-faded font-semibold leading-tight">
						The only LP-CRM.
						<span className="block font-light text-primary-500">
							Limitless stuff.
						</span>
					</h4>
					<div className="mt-10">
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

export default Cta;
