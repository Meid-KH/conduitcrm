import React from "react";
import Button from "components/Button";
import LeadProcessing from "assets/img/lead-processing.png";
import RealEstateCrm from "assets/img/real-estate-crm.png";
import Icon from "utils/Icon";

const Leads = () => {
	return (
		<section
			style={{ boxShadow: "0 -10px 20px 1px #18c4ff33" }}
			className="bg-white py-32 -skew-y-[2deg] -translate-y-24 -mb-24"
		>
			<div className="container mx-auto skew-y-[2deg]">
				<div className="text-center max-w-5xl mx-auto mb-16">
					<h2 className="font-bold text-5xl leading-tight text-primary-600">
						Day-to-day{" "}
						<span className="text-primary-500">
							Lead Processing
						</span>{" "}
						can <br /> become unmanageable
					</h2>
					<p className="text-xl text-primary-400 mt-4 leading-normal">
						Processing leads on a daily basis can become <br />
						unmanageable and can cost you and your leads, time,
						money, and <br /> your reputation.
					</p>
				</div>
				{/* Lead Processing  */}
				<img
					className="max-w-md mx-auto mb-20"
					src={LeadProcessing.src}
					alt="Lead Processing"
				/>
				<div className="text-center max-w-3xl mx-auto mb-14">
					<h2 className="font-bold text-5xl leading-tight text-primary-600">
						The first Real Estate{" "}
						<span className="text-primary-500">
							Lead Processing
						</span>{" "}
						CRM
					</h2>
					<p className="text-xl text-primary-400 mt-4 leading-normal">
						With Conduit's lead-processing CRM solution, you will
						stay <br /> ahead by automating all lead processes
						without losing <br /> track from start to finish.
					</p>
					<div className="mt-12">
						<Button primary>
							<div className="flex items-center gap-2">
								Get started
								<span className="w-6 rotate-90 -mr-6">
									<Icon name="arrow" />
								</span>
							</div>
						</Button>
					</div>
				</div>
				<img
					className="max-w-5xl mx-auto"
					src={RealEstateCrm.src}
					alt="Real estate Crm"
				/>
			</div>
		</section>
	);
};

export default Leads;
