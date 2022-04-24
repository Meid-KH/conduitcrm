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
                  <span className="text-primary-500">Timelines</span>
                </h4>
                <p className="text-faded leading-relaxed">
                  Oversee every lead interaction with users, including lead
                  history, communication exchange, pipleine changes, notes, and
                  email/call engagements.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">Click to call</span>
                </h4>
                <p className="text-faded leading-relaxed">
                  Easily, click to immediately call a lead directly from each
                  user&apos;s phone number. Conduit connects you and your lead
                  immediately and without complex setups, logging each call
                  interaction and SMS leads when calling fails.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">Automation</span>
                </h4>
                <p className="text-faded leading-relaxed">
                  With Conduit, you can create pipeline automations, for every
                  lead movement within stages. Automatically assign tags, teams,
                  SMS, milestones, and notes.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">Notes</span>
                </h4>
                <p className="text-faded leading-relaxed">
                  Attach notes to any lead&apos;s timeline. Use notes as a
                  simple mechanism to keep track of important deailts within the
                  lifespan of a lead interaction.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">Client Experience</span>
                </h4>
                <p className="text-faded leading-relaxed">
                  Conduit&apos;s Client Experience will ensure that your
                  contacts always have the best experience throughout the
                  transaction. Automatically send emails or sms once they have
                  reach any pipeline stage.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">Integrations</span>
                </h4>
                <p className="text-faded leading-relaxed">
                  Connect 1000&apos;s of applications to Conduit with our Zapier
                  integration app. This will allow you to automatically import
                  leads into Conduit.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">Document Storage</span>
                </h4>
                <p className="text-faded leading-relaxed">
                  Securely upload documents to each lead for easy access. Upload
                  up to 500 mb of documents to all your leads.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">Network Referrals</span>
                </h4>
                <p className="text-faded leading-relaxed">
                  You can now have a list of all your important business
                  referrals inside Conduit. Refer them to other users, leads, or
                  share your leads to your network with just one click.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">
                    Email &amp; SMS Communication
                  </span>
                </h4>
                <p className="text-faded leading-relaxed">
                  Easily send SMS or emails to all your leads. Create templates
                  with dynamic template variables that will autofill with user
                  and lead information isntantaneously and secure.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">
                    Multiple Organizations
                  </span>
                </h4>
                <p className="text-faded leading-relaxed">
                  With the enterprise edition of Conduit, experience the ability
                  to create multiple organizations within one account,
                  simplifying the experience and avoiding long and complicated
                  setups.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">Properties</span>
                </h4>
                <p className="text-faded leading-relaxed">
                  Maintain a list of all your properties within Conduit. Assign
                  properties to leads, and create deals that links them with
                  leads.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:max-w-md">
                <h4 className="font-medium text-xl">
                  <span className="text-primary-500">Playbook Marketplace</span>
                </h4>
                <p className="text-faded leading-relaxed">
                  Don&apos;t know where to start? Use one of our predefined
                  playbook templates from top real estate professionals, that
                  will set you apart from the rest, by automatically creating
                  templates, pipelines, tags, and campaigns.
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
