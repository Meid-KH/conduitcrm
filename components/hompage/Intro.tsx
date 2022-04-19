import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "components/Button";
import Icon from "utils/Icon";

const Intro = () => {
  return (
    <div className="bg-primary-700">
      <div className="stars" />
      <div className="stars2" />
      <div className="stars3" />
      <div className="container px-6 mx-auto overflow-hidden">
        <div className=" text-faded relative z-10 max-w-[1286px] mx-auto text-center pt-16">
          <h1 className="text-3xl leading-snug font-bold uppercase lg:text-5xl lg:leading-relaxed mb-14">
            <span>Manage all your leads</span>
            <span className="block text-4xl lg:text-7xl text-primary-500">
              Like a pro
            </span>
          </h1>
          <p className=" mx-auto leading-relaxed lg:text-xl lg:max-w-2xl font-light">
            <span>Streamline and simplify your business with</span>
            <span className="underline underline-offset-4 mx-1 decoration-wavy decoration-amber-300">
              lead-processing pipelines
            </span>
            <span>
              , so that real estate and loan professionals can focus more on
              helping clients and less on managing the process.
            </span>
          </p>
          <div className="flex flex-wrap justify-center gap-5 mt-36">
            <Link href="/">
              <a className="block">
                <Button>Explore more</Button>
              </a>
            </Link>
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
        <div className="max-w-4xl -mx-8 lg:mx-auto lg:-translate-y-36 lg:-mb-72">
          <Image
            src="/assets/img/home-intro-bg.png"
            alt="Home Intro BG"
            width={1607}
            height={1500}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
