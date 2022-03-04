import React from "react";
import Leads from "assets/img/leads.png";

const Lead = () => {
	return (
		<section
			className="relative
        before:absolute before:-skew-y-2 before:-translate-y-16 before:top-0 before:left-0 before:h-40 before:w-full before:bg-white 
        after:absolute after:skew-y-2 after:translate-y-16 after:bottom-0 after:left-0 after:h-40 after:w-full after:bg-white
        bg-white text-primary-600 lg:py-20"
		>
			<div className="relative z-10">
				<div className="container px-6 mx-auto">
					<div className="text-center">
						<small className="block text-base font-light mb-4">
							Lead Processing CRM
						</small>
						<h1 className="font-bold text-3xl mx-auto lg:text-5xl lg:leading-tight lg:max-w-xl">
							Effective and productive organization starts here
						</h1>
					</div>
					<div className="max-w-4xl mx-auto mt-6 lg:mt-8">
						<img
							className="max-w-full mx-auto"
							src={Leads.src}
							alt="Home Intro BG"
						/>
						<p className="text-base leading-relaxed mx-auto mt-4">
							Everything starts with a board, or a visual super
							table. Start with one of 200+ templates or drag and
							drop 30+ column types to customize the workflow of
							your dreams. Groups, items, sub-items and updates
							are synced in real time to keep everything within
							the context of your actual project, workflow,
							process, or anything else. Status buttons reflect
							your team's actual work, so all your updates are in
							one place. Notify team members, add files, and link
							boards together so it's easy to keep track of what's
							going on. Save time, streamline processes and
							projects, and keep track of all the moving pieces.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Lead;
