import React from "react";
import Image from "next/image";

function Integration() {
  return (
    <section className="bg-primary-600 pb-36 -mt-8 lg:py-20 lg:pb-32 lg:mt-0">
      <div className="container px-6 mx-auto space-y-12">
        <div className="py-40 flex flex-wrap items-center justify-between gap-2 lg:gap-8 max-w-6xl mx-auto">
          <div className="lg:max-w-md">
            <h3 className="text-4xl font-semibold text-primary-500 mb-3 lg:mb-6">
              All your leads in one place
            </h3>
            <p className="text-faded leading-relaxed">
              Manage all of your leads information and history, in a simple to
              use CRM view. We support Zapier and Spreadsheets for you to import
              all of your lead data into Conduit.
            </p>
          </div>
          <Image
            className="max-w-full w-96"
            src="/assets/img/tools.png"
            alt="Lead TOOLS"
            width={540}
            height={218}
          />
        </div>

        <div className="py-40 flex flex-wrap items-center justify-between gap-2 flex-col-reverse lg:flex-row lg:gap-8 max-w-6xl mx-auto">
          <Image
            className="max-w-full w-96"
            src={"/assets/img/tools-auto.png"}
            alt="Automation"
            width={567}
            height={370}
          />
          <div className="lg:max-w-md">
            <h3 className="text-4xl font-semibold text-primary-500 mb-3 lg:mb-6">
              Automate everything
            </h3>
            <p className="text-faded leading-relaxed">
              You can automate most of your day to day processes, such as
              assigning milestones to leads, lead and user notifications, to
              automatic stage updates.
            </p>
          </div>
        </div>

        <div className="py-40 flex flex-wrap items-center justify-between gap-2 lg:gap-8 max-w-6xl mx-auto">
          <div className="lg:max-w-md">
            <h3 className="text-4xl font-semibold text-primary-500 mb-3 lg:mb-6">
              Get ahead of your tasks
            </h3>
            <p className="text-faded leading-relaxed">
              Fuel your pipeline with a modern, mobile-friendly workflow that
              eliminates the need for constant email communication to manage
              your contacts.
            </p>
          </div>
          <Image
            className="max-w-full w-96"
            src={"/assets/img/tools-tasks.png"}
            alt="Tasks"
            width={538}
            height={274}
          />
        </div>

        <div className="pt-40 pb-20 flex flex-wrap items-center justify-between gap-2 flex-col-reverse lg:flex-row lg:gap-8 max-w-6xl mx-auto">
          <Image
            className="max-w-full w-96"
            src={"/assets/img/drip.svg"}
            alt="Automation"
            width={567}
            height={370}
          />
          <div className="lg:max-w-md">
            <h3 className="text-4xl font-semibold text-primary-500 mb-3 lg:mb-6">
              Drip Campaigns
            </h3>
            <p className="text-faded leading-relaxed">
              Easily create multiple scheduled drip campaigns for all of your
              leads. Combine SMS and emails drips within each campaign; set
              delays or immediately activate each step.
            </p>
          </div>
        </div>

        <div className="py-10 flex flex-wrap items-center gap-2 lg:flex-row lg:gap-8 max-w-6xl mx-auto w-full">
          <h3 className="text-4xl font-semibold text-slate-200 mb-6 lg:mb-14 w-full text-center">
            and so much more...
          </h3>
          <div className="">
            <div className="flex flex-wrap flex-col lg:flex-row gap-20 justify-between">
              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">Lead Timelines</span>
                </h4>
                <p className="text-faded leading-relaxed">
                  Easily create multiple scheduled drip campaigns for all of
                  your leads. Combine SMS and emails drips within each campaign;
                  set delays or immediately activate each step.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">Automation</span>
                </h4>
                <p className="text-faded leading-relaxed">
                  Easily create multiple scheduled drip campaigns for all of
                  your leads. Combine SMS and emails drips within each campaign;
                  set delays or immediately activate each step.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">Notes</span>
                </h4>
                <p className="text-faded leading-relaxed">
                  Easily create multiple scheduled drip campaigns for all of
                  your leads. Combine SMS and emails drips within each campaign;
                  set delays or immediately activate each step.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">Client Experience</span>
                </h4>
                <p className="text-faded leading-relaxed">
                  Easily create multiple scheduled drip campaigns for all of
                  your leads. Combine SMS and emails drips within each campaign;
                  set delays or immediately activate each step.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">Integrations</span>
                </h4>
                <p className="text-faded leading-relaxed">
                  Easily create multiple scheduled drip campaigns for all of
                  your leads. Combine SMS and emails drips within each campaign;
                  set delays or immediately activate each step.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">Document Storage</span>
                </h4>
                <p className="text-faded leading-relaxed">
                  Easily create multiple scheduled drip campaigns for all of
                  your leads. Combine SMS and emails drips within each campaign;
                  set delays or immediately activate each step.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">Network Referrals</span>
                </h4>
                <p className="text-faded leading-relaxed">
                  Easily create multiple scheduled drip campaigns for all of
                  your leads. Combine SMS and emails drips within each campaign;
                  set delays or immediately activate each step.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">
                    Email &amp; SMS Communication
                  </span>
                </h4>
                <p className="text-faded leading-relaxed">
                  Easily create multiple scheduled drip campaigns for all of
                  your leads. Combine SMS and emails drips within each campaign;
                  set delays or immediately activate each step.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">
                    Multiple Organizations
                  </span>
                </h4>
                <p className="text-faded leading-relaxed">
                  Easily create multiple scheduled drip campaigns for all of
                  your leads. Combine SMS and emails drips within each campaign;
                  set delays or immediately activate each step.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">Properties</span>
                </h4>
                <p className="text-faded leading-relaxed">
                  Easily create multiple scheduled drip campaigns for all of
                  your leads. Combine SMS and emails drips within each campaign;
                  set delays or immediately activate each step.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">Playbook Marketplace</span>
                </h4>
                <p className="text-faded leading-relaxed">
                  Easily create multiple scheduled drip campaigns for all of
                  your leads. Combine SMS and emails drips within each campaign;
                  set delays or immediately activate each step.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">
                    Customer Experience Support
                  </span>
                </h4>
                <p className="text-faded leading-relaxed">
                  Easily create multiple scheduled drip campaigns for all of
                  your leads. Combine SMS and emails drips within each campaign;
                  set delays or immediately activate each step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Integration;
