import Cta from "components/Cta";
import Intro from "components/overview/Intro";
import React from "react";
import Image from "next/image";

const Founders = [
  {
    src: "/assets/img/travis.jpeg",
    name: "Travis Helmig",
    role: "Co-founder & Head of Operations",
    width: "350",
    height: "370",
  },
  {
    src: "/assets/img/ab.jpeg",
    name: "Antonio Bologna",
    role: "Co-founder & Technology Advisor",
    width: "300",
    height: "380",
    bio: "",
  },
];
const OurCulture = [
  {
    title: "Impact",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem inventore temporibus placeat vero, deserunt aliquam!",
  },
  {
    title: "Hyper-focused",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem inventore temporibus placeat vero, deserunt aliquam!",
  },
  {
    title: "Collectivism",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem inventore temporibus placeat vero, deserunt aliquam!",
  },
  {
    title: "Assertiveness",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem inventore temporibus placeat vero, deserunt aliquam!",
  },
  {
    title: "Inclusivity",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem inventore temporibus placeat vero, deserunt aliquam!",
  },
  {
    title: "Transparency",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem inventore temporibus placeat vero, deserunt aliquam!",
  },
];

const about = () => {
  return (
    <>
      <Intro />

      <OurStory />

      <TheFounders />

      <Cta />
    </>
  );
};

const OurStory = () => (
  <section
    className="relative
        before:absolute before:-skew-y-2 before:-translate-y-16 before:top-0 before:left-0 before:h-40 before:w-full before:bg-white 
        bg-white text-primary-600 
        pt-10 pb-24 lg:pt-16 lg:pb-32"
  >
    <div className="relative z-10">
      <div className="container px-6 mx-auto">
        <div className="text-center">
          <small className="block text-lg uppercase tracking-widest font-light mb-2">
            Our story
          </small>
          <h1 className="font-bold text-3xl uppercase tracking-wider mx-auto lg:text-5xl lg:leading-tight lg:max-w-xl">
            Where it all began
          </h1>
        </div>
        <div className="max-w-4xl mx-auto mt-6 lg:mt-8">
          <div
            className="text-base text-justify leading-relaxed mx-auto mt-4 space-y-4
                first-letter:text-4xl first-letter:font-semibold first-letter:mr-0.5"
          >
            <p>
              Conduit CRM came from necessity. It did not begin as a CRM, it
              began as a problem. At the time, Travis and his wife were triple
              icon agents at the fastest-growing real estate brokerage in the
              country. They were at the point in their career where they wanted
              to start diversifying their business. Travis retired as a real
              estate agent and jumped into mortgage lending. His wife became a
              broker and they both became investors in real estate. You might be
              saying to yourself, where is the problem?
            </p>
            <p>
              The greatest problem was growth. Travis grew out of real estate
              CRMs because they solely focus on real estate. Mortgage platforms
              would not work because they focused on mortgages. They quickly
              found that finding a platform that works with real estate,
              lending, and investing along with allowing their teams to
              communicate was impossible. They knew they needed to create
              something that fit their needs. However, something like Salesforce
              would require huge amounts of time, effort, and a lot of money
              along with HEAVY monthly costs forever. We realized this was not a
              problem but an opportunity.
            </p>
            <p>
              Antonio Bologna, is a seasoned entrepreneur, and engineer, with
              years of experience in the platform space. After discussing the
              vision and researching competitors, found out that most platforms
              and CRMs were missing key elements. One is a process, the ability
              to set up a business that never changes. This creates a consistent
              client experience, continuity inside teams, and one that allows
              you to focus on the most important part of your business, PROFITS.
            </p>
            <p>
              One of the most important aspects that the founders wanted to
              create, was a community where users were more than just users.
              That is why Conduit is the only platform that allows users to earn
              money by becoming affiliates. Being a part of eXp Realty, the
              fastest growing real estate brokerage, Travis learned that feeling
              like you are part of something drives you to become better. That
              is why the founders decided that Conduit should not be something
              you just use in your business, but it should be a part of your
              business. Becoming a Conduit Affiliate you can work towards
              getting residual income or just a free platform with all the bells
              and whistles. Conduit is not just another Real Estate CRM, it is a
              real estate platform, we are all in this together. Let Conduit be
              your business in a box.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TheFounders = () => (
  <section className="bg-gradient-to-b from-primary-700 to-primary-700 text-faded pt-24 lg:pt-30">
    <div className="container px-6 mx-auto">
      <div className="text-primary-500 text-center">
        <small className="block text-lg text-primary-400 uppercase tracking-widest font-light mb-2">
          Who are we
        </small>
        <h1 className="font-bold text-3xl uppercase tracking-wider mx-auto lg:text-5xl lg:leading-tight lg:max-w-xl">
          Meet the founders
        </h1>
      </div>
      <div className="max-w-5xl mx-auto mt-16 lg:mt-20 space-y-16">
        {/* Fouters Row */}
        {Founders.map((founder, index) => {
          const isEven: Boolean = index % 2 ? true : false;

          return (
            <div
              key={index}
              className={`flex flex-wrap md:flex-nowrap 
                  ${isEven && "md:flex-row-reverse"}
                  items-center justify-between__ gap-8 lg:gap-16`}
            >
              <Image
                src={founder.src}
                alt={founder.name}
                width={founder.width}
                height={founder.height}
              />
              <div className="w-full">
                <h2 className="text-2xl tracking-wide uppercase text-primary-500 font-bold mb-1">
                  {founder?.name}
                </h2>
                <div className="text-md text-primary-400 font-medium__">
                  {founder?.role}
                </div>
                <p className="text-base text-justify leading-loose mt-4">
                  Everything starts with a board, or a visual super table. Start
                  with one of 200+ templates or drag and drop 30+ column types
                  to customize the workflow of your dreams. Groups, items,
                  sub-items and updates are synced in real time to keep
                  everything within the context of your actual project,
                  workflow, process, or anything else. Status buttons reflect
                  your team&#39;s actual work, so all your updates are in one
                  place. Notify team members, add files, and link boards
                  together so it&#39;s easy to keep track of what&#39;s going
                  on. Save time, streamline processes and projects, and keep
                  track of all the moving pieces.
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-5xl mx-auto mt-28 lg:mt-44">
        <div className="text-primary-500 text-center">
          <small className="block text-lg text-primary-400 uppercase tracking-widest font-light mb-2">
            our culture
          </small>
          <h1 className="font-bold text-3xl uppercase tracking-wider mx-auto lg:text-5xl lg:leading-tight lg:max-w-xl">
            It&#39;s all about the people
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 my-10 lg:gap-x-16 lg:my-16">
          {OurCulture.map((culture, index) => (
            <div key={index} className="space-y-2">
              <h2 className="text-2xl tracking-wider uppercase__ text-primary-400 font-semibold mb-1">
                {culture?.title}
              </h2>

              <p className="text-base leading-loose mt-4">
                Voluptatum, laborum nihil! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Labore ullam amet architecto
                dolorum rem accusantium earum voluptatum, consequatur cupiditate
                quidem voluptatem tempore, nobis, maiores dolores a fugit minima
                autem. Tempore eligendi et quidem. Architecto quis, nihil libero
                possimus aliquam nulla laudantium delectus. Mollitia in aliquid
                quaerat vitae aliquam reprehenderit alias, dolorem ea non?
              </p>
            </div>
          ))}
        </div>

        <div className="text-primary-500 text-center pt-6">
          <h1 className="font-semibold text-3xl tracking-wide mx-auto lg:text-4xl lg:leading-tight lg:max-w-xl">
            Locations
          </h1>
        </div>
        <div className="flex justify-center gap-8 mt-6 lg:gap-16 lg:mt-10">
          {["Austin, Texas"].map((location, index) => (
            <div key={index} className="grid place-items-center space-y-3">
              <div className="w-24 h-24 rounded-lg bg-gray-200"></div>
              <h3 className="text-lg text-faded font-semibold">{location}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default about;
