import Button from "components/Button";
import React from "react";
import Icon from "utils/Icon";

const contact = () => {
	return (
		<>
			<section className="bg-primary-700 py-20 lg:py-32">
				<div className="container px-6 mx-auto">
					<div className="grid lg:grid-cols-2 gap-8 pb-24">
						<div>
							<h1 className="text-5xl leading-tight font-bold tracking-wide uppercase mb-2 lg:mb-4">
								Contact our team
							</h1>
							<p className="text-xl font-light leading-normal tracking-wide">
								Meet with a product consultant to see <br />
								how{" "}
								<span className="text-primary-500 underline underline-offset-2">
									conduitcrm.com
								</span>{" "}
								can fit your exact business needs
							</p>
						</div>
						<form
							action="#"
							method="post"
							className="p-6 lg:p-8 bg-white text-gray-500 rounded-lg shadow-lg shadow-primary-500"
						>
							<div className="grid gap-x-6 gap-y-5 xl:grid-cols-2 ">
								<div className="space-y-1.5">
									<label
										htmlFor=""
										className="text-primary-600"
									>
										First name{" "}
										<sup className="text-lg -top-[0.25em] text-red-500">
											*
										</sup>{" "}
									</label>
									<input type="text" name="firstName" />
								</div>

								<div className="space-y-1.5">
									<label
										htmlFor=""
										className="text-primary-600"
									>
										Last name{" "}
										<sup className="text-lg -top-[0.25em] text-red-500">
											*
										</sup>{" "}
									</label>
									<input type="text" name="lastName" />
								</div>

								<div className="space-y-1.5">
									<label
										htmlFor=""
										className="text-primary-600"
									>
										Work email{" "}
										<sup className="text-lg -top-[0.25em] text-red-500">
											*
										</sup>{" "}
									</label>
									<input type="email" name="workName" />
								</div>

								<div className="space-y-1.5">
									<label
										htmlFor=""
										className="text-primary-600"
									>
										Company name{" "}
										<sup className="text-lg -top-[0.25em] text-red-500">
											*
										</sup>{" "}
									</label>
									<input type="text" name="companyName" />
								</div>

								<div className="space-y-1.5">
									<label
										htmlFor=""
										className="text-primary-600"
									>
										Phone{" "}
										<sup className="text-lg -top-[0.25em] text-red-500">
											*
										</sup>{" "}
									</label>
									<input type="tel" name="phone" />
								</div>

								<div className="space-y-1.5">
									<label
										htmlFor=""
										className="text-primary-600"
									>
										Job title{" "}
										<sup className="text-lg -top-[0.25em] text-red-500">
											*
										</sup>{" "}
									</label>
									<input type="text" name="job" />
								</div>

								<div className="space-y-1.5 xl:col-span-2">
									<label
										htmlFor=""
										className="text-primary-600"
									>
										How can we help you?
										<sup className="text-lg -top-[0.25em] text-red-500">
											*
										</sup>{" "}
									</label>
									<textarea
										name="message"
										rows={6}
									></textarea>
								</div>
							</div>

							{/* Submit */}
							<div className="flex flex-col items-center space-y-5 mt-9">
								<label htmlFor="" className="block text-sm">
									By clicking submit, I acknowledge receipt of
									the{" "}
									<span className="text-primary-600/80">
										conduitcrm.com
									</span>{" "}
									<a
										href=""
										className="text-primary-500 underline-offset-2 hover:underline"
									>
										Privacy policy
									</a>
								</label>
								<Button primary>
									<div className="flex items-center gap-2">
										Get started
										<span className="w-6 rotate-90 -mr-6">
											<Icon name="arrow" />
										</span>
									</div>
								</Button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default contact;
