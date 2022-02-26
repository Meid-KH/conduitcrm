import React from "react";
import LeadTools from "assets/img/tools.png";
import AutoTools from "assets/img/tools-auto.png";
import TasksTools from "assets/img/tools-tasks.png";

function Integration() {
	return (
		<section
			className="bg-primary-600 pb-36 -mt-8 lg:py-20 lg:pb-32 lg:mt-0"
			// style={{ clipPath: "polygon(0 3%, 100% 0%, 100% 96%, 0 100%)" }}
		>
			<div className="container px-6 mx-auto space-y-7 lg:space-y-12">
				<div className="flex flex-wrap items-center justify-between gap-2 lg:gap-8 max-w-6xl mx-auto">
					<div className="lg:max-w-md">
						<h3 className="text-4xl font-semibold text-primary-500 mb-6">
							All your leads in one place
						</h3>
						<p className="text-faded leading-relaxed">
							Manage all of your leads information and history, in
							a simple to use CRM view. We support Zapier and
							Spreadsheets for you to import all of your lead data
							into Conduit.
						</p>
					</div>
					<img
						className="max-w-full w-96"
						src={LeadTools.src}
						alt="Lead TOOLS"
					/>
				</div>

				<div className="flex flex-wrap items-center justify-between gap-2 flex-col-reverse lg:flex-row lg:gap-8 max-w-6xl mx-auto">
					<img className="max-w-full w-96" src={AutoTools.src} />
					<div className="lg:max-w-md">
						<h3 className="text-4xl font-semibold text-primary-500 mb-6">
							Automate everything
						</h3>
						<p className="text-faded leading-relaxed">
							You can automate most of your day to day processes,
							such as assigning milestones to leads, lead and user
							notifications, to automatic stage updates.
						</p>
					</div>
				</div>

				<div className="flex flex-wrap items-center justify-between gap-2 lg:gap-8 max-w-6xl mx-auto">
					<div className="lg:max-w-md">
						<h3 className="text-4xl font-semibold text-primary-500 mb-6">
							Get ahead of your tasks
						</h3>
						<p className="text-faded leading-relaxed">
							Fuel your pipeline with a modern, mobile-friendly
							workflow that eliminates the need for constant email
							communication to manage your contacts.
						</p>
					</div>
					<img className="max-w-full w-96" src={TasksTools.src} />
				</div>
			</div>
		</section>
	);
}

export default Integration;
