import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Logo from "components/Logo";
import Intro from "components/Intro";
import Button from "components/Button";
import LeadProcessing from "assets/img/lead-processing.png";
import RealEstateCrm from "assets/img/real-estate-crm.png";

const Home: NextPage = () => {
	return (
		<>
			<Intro />
			<section
				style={{ boxShadow: "0 -10px 20px 1px #18c4ff33" }}
				className="bg-white py-32 -skew-y-[4deg] -translate-y-96 -mb-96"
			>
				<div className="container mx-auto skew-y-[4deg]">
					<div className="text-center max-w-5xl mx-auto mb-36">
						<h2 className="font-bold text-7xl leading-tight text-primary-600">
							Day-to-day{" "}
							<span className="text-primary-500">
								Lead Processing
							</span>{" "}
							can become unmanageable
						</h2>
						<p className="text-2xl font-medium text-primary-400 mt-8 leading-snug">
							Processing leads on a daily basis can become
							unmanageable and can cost you and your leads, time,
							money, and your reputation.
						</p>
					</div>
					{/* Lead Processing  */}
					<img
						className="max-w-full mx-auto mb-36"
						src={LeadProcessing.src}
						alt="Lead Processing"
					/>
					<div className="text-center max-w-3xl mx-auto mb-36">
						<h2 className="font-bold text-7xl leading-tight text-primary-600">
							The first Real Estate{" "}
							<span className="text-primary-500">
								Lead Processing
							</span>{" "}
							CRM
						</h2>
						<p className="text-2xl font-medium text-primary-400 mt-8 leading-snug">
							With Conduit's lead-processing CRM solution, you
							will stay ahead by automating all lead processes
							without losing track from start to finish.
						</p>
						<div className="mt-12">
							<Button primary>Get Started</Button>
						</div>
					</div>
					<img
						className="max-w-full mx-auto mb-36"
						src={RealEstateCrm.src}
						alt="Real estate Crm"
					/>
				</div>
			</section>
			{/*  */}
			<section
				className="bg-primary-600 py-20"
				// style={{ clipPath: "polygon(0 3%, 100% 0%, 100% 96%, 0 100%)" }}
			>
				<div className="container mx-auto "></div>
			</section>
		</>
	);
};

export default Home;
