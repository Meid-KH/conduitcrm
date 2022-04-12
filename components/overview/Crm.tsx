import React from "react";
import Icon from "utils/Icon";
import Image from "next/image";

const Crm = () => {
  return (
    <section
      className="relative 
        before:absolute before:-skew-y-2 before:-translate-y-16 before:top-0 before:left-0 before:h-40 before:w-full before:bg-primary-700
        text-faded bg-primary-700 
        pb-16"
    >
      <div className="relative z-10 bg-gradient-to-b from-primary-700 via-primary-600 to-primary-700">
        <div className="container px-6 mx-auto">
          <div className="text-primary-500 text-center">
            <small className="block text-base font-light mb-4">
              Contact Relationship Management
            </small>
            <h1 className="font-bold text-3xl mx-auto lg:text-5xl lg:leading-tight lg:max-w-xl">
              Effective and productive organization starts here
            </h1>
          </div>
          <div className="max-w-4xl mx-auto mt-6 lg:mt-8">
            <Image
              className="max-w-full mx-auto"
              src={"/assets/img/crm.png"}
              alt="Home Intro BG"
              layout="fill"
            />
          </div>
          <div className="max-w-6xl flex flex-wrap items-center__ justify-between gap-8 mx-auto mt-8 lg:mt-16 lg:gap-16 ">
            <div className="lg:max-w-lg">
              <p className="text-base leading-loose">
                Everything starts with a board, or a visual super table. Start
                with one of 200+ templates or drag and drop 30+ column types to
                customize the workflow of your dreams. Groups, items, sub-items
                and updates are synced in real time to keep everything within
                the context of your actual project, workflow, process, or
                anything else. Status buttons reflect your team&#39;s actual
                work, so all your updates are in one place. Notify team members,
                add files, and link boards together so it&#39;s easy to keep
                track of what&#39;s going on. Save time, streamline processes
                and projects, and keep track of all the moving pieces.
              </p>
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <Icon name="default" />
                <p className="text-base">Line of Description goes here</p>
              </div>
              <div className="space-y-4">
                <Icon name="default" />
                <p className="text-base">Line of Description goes here</p>
              </div>
              <div className="space-y-4">
                <Icon name="default" />
                <p className="text-base">Line of Description goes here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crm;
