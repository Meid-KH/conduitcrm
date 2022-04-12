import React from "react";
import Link from "next/link";
import Button from "components/Button";
import Icon from "utils/Icon";
import Cta from "components/Cta";
import Lead from "components/overview/Lead";
import Image from "next/image";

const feature = () => {
  return (
    <>
      <section
        className="bg-primary-700
        pt-10 pb-32 lg:pt-16 lg:pb-48"
      >
        <div className="container px-6 mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 justify-between">
            <div className="flex-1 text-faded relative z-10">
              <h1 className="text-3xl leading-snug font-bold uppercase lg:text-5xl lg:leading-relaxed mb-6">
                Process your leads
                <span className="block text-4xl lg:text-7xl">
                  <span className="text-primary-500">Blazingly fast</span>
                </span>
              </h1>
              <ul className="space-y-2 text-lg pt-3">
                <li>
                  <span className="text-xl mr-2">✅</span> Lead automation
                  through pipeline life-cycle
                </li>
                <li>
                  <span className="text-xl mr-2">✅</span> Easy pipeline
                  configuration
                </li>
                <li>
                  <span className="text-xl mr-2">✅</span> Pipeline stage deal
                  activatation
                </li>
                <li>
                  <span className="text-xl mr-2">✅</span> Automatic milestones
                  lead assignment
                </li>
              </ul>
              <div className="mt-10">
                <Link href="/">
                  <a className="block">
                    <Button primary>
                      <div className="flex items-center gap-2">
                        Get started
                        <span className="w-6 rotate-90 -mr-6">
                          <Icon name="arrow" />
                        </span>
                      </div>
                    </Button>
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex-1 max-w-md lg:max-w-xl">
              <Image
                className="max-w-full mx-auto"
                src="/assets/img/feature.png"
                alt="Home Intro BG"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </section>
      <Lead />
      <section className="bg-gradient-to-b from-primary-700 to-primary-600 text-faded py-32 lg:py-44">
        <div className="container px-6 mx-auto">
          <div className="max-w-5xl mx-auto space-y-6 lg:space-y-10">
            {[0, 1, 2, 3, 4].map((item, index) => {
              const isEven: Boolean = index % 2 ? true : false;
              // console.log(isEven);

              return (
                <div
                  key={index}
                  className={`flex flex-wrap md:flex-nowrap gap-x-8 md:gap-x-8 ${
                    isEven && "md:flex-row-reverse"
                  }`}
                >
                  {/* <img
								src="https://source.unsplash.com/400x250"
								alt=""
                className="flex-shrink-0"
							/> */}
                  <span className="flex-shrink-0 block w-[400px] max-w-full h-[250px] bg-primary-600 border border-primary-700 shadow-inner shadow-primary-700"></span>
                  <div className="py-5 px-3">
                    <h3 className="text-xl text-primary-500 font-bold mb-3">
                      Contact Relationship Management
                    </h3>
                    <p className="text-base leading-relaxed">
                      Effective and productive organization starts here Lorem
                      ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="relative 
        before:absolute before:-skew-y-2 before:-translate-y-16 before:top-0 before:left-0 before:h-40 before:w-full before:bg-primary-700
        text-faded bg-primary-700 
        pt-16 pb-16 lg:pb-24 -mb-16"
      >
        <div className="relative z-10 bg-gradient-to-b from-primary-700 via-primary-600 to-primary-700">
          <div className="container px-6 mx-auto -my-12">
            <div className="text-primary-500 text-center">
              <h1 className="font-bold text-3xl mx-auto lg:text-5xl lg:leading-tight lg:max-w-xl">
                A few more things
              </h1>
            </div>
            <div className="max-w-6xl mx-auto mt-12 lg:mt-20">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                  <div
                    key={index}
                    className="text-left md:text-center space-y-2 lg:space-y-3"
                  >
                    <h3 className="text-xl lg:text-2xl text-primary-500 font-bold">
                      Lorem ipsum dolor sit
                    </h3>
                    <p className="text-sm lg:text-base leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum dolorem et placeat voluptates? Accusamus, quibusdam.
                      Deleniti, reprehenderit aut.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
};

export default feature;
