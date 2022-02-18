import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Logo from "components/Logo";
import Intro from "components/Intro";
import Button from "components/Button";
import LeadProcessing from "assets/img/lead-processing.png";
import RealEstateCrm from "assets/img/real-estate-crm.png";
import LeadTools from "assets/img/tools.png";
import AutoTools from "assets/img/tools-auto.png";
import TasksTools from "assets/img/tools-tasks.png";

const Home: NextPage = () => {
	return (
		<div className="bg-primary-600">
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
				<div className="container mx-auto">
					<div className="flex gap-8 justify-between pt-20 max-w-6xl mx-auto">
						<div className="max-w-md">
							<h3 className="text-4xl font-semibold text-primary-500 mb-6">
								All your leads in one place
							</h3>
							<p className="text-faded leading-relaxed">
								Manage all of your leads information and
								history, in a simple to use CRM view. We support
								Zapier and Spreadsheets for you to import all of
								your lead data into Conduit.
							</p>
						</div>
						<img
							className="max-w-md"
							src={LeadTools.src}
							alt="Lead TOOLS"
						/>
					</div>

					<div className="flex gap-8 justify-between pt-20 max-w-6xl mx-auto">
						<img className="max-w-md" src={AutoTools.src} />
						<div className="max-w-md">
							<h3 className="text-4xl font-semibold text-primary-500 mb-6">
								Automate everything
							</h3>
							<p className="text-faded leading-relaxed">
								You can automate most of your day to day
								processes, such as assigning milestones to
								leads, lead and user notifications, to automatic
								stage updates.
							</p>
						</div>
					</div>

					<div className="flex gap-8 justify-between pt-20 max-w-6xl mx-auto">
						<div className="max-w-md">
							<h3 className="text-4xl font-semibold text-primary-500 mb-6">
								Get ahead of your tasks
							</h3>
							<p className="text-faded leading-relaxed">
								Fuel your pipeline with a modern,
								mobile-friendly workflow that eliminates the
								need for constant email communication to manage
								your contacts.
							</p>
						</div>
						<img className="max-w-md" src={TasksTools.src} />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
