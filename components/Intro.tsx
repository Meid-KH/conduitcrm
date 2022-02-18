import Link from "next/link";
import Logo from "components/Logo";
import React from "react";
import Image from "next/image";

import Button from "components/Button";
import LogoShadow from "assets/img/logo-shadow.png";
import HomeIntroBG from "assets/img/home-intro-bg.png";

const Intro = () => {
  return (
    <header className="px-6 py-8 lg:py-[40px] bg-primary-700 text-faded max-w-[1920px]">
      <div className="w-[540px] absolute -left-16 -top-14">
        <img src={LogoShadow.src} alt="Logo preview" />
      </div>
      <div className="h-[104px] max-w-[1780px] mx-auto flex justify-between items-center">
        <div className="w-28">
          <Logo />
        </div>
        <nav className="flex items-center gap-11">
          <Link href="/">
            <a className="text-[18px] hover:text-white">Product</a>
          </Link>
          <Link href="/">
            <a className="text-[18px] hover:text-white">Pricing</a>
          </Link>
          <Link href="/">
            <a className="text-[18px] hover:text-white">Resources</a>
          </Link>
          <Link href="/">
            <a className="text-[18px] hover:text-white">About</a>
          </Link>
          <Link href="/">
            <a className="text-[18px] hover:text-white">Contact us</a>
          </Link>
        </nav>
        <nav className="flex items-center gap-11">
          <Link href="/">
            <a className="text-[18px] hover:text-white">Log in</a>
          </Link>
          <Link href="/">
            <a className="block">
              <Button primary>Get started</Button>
            </a>
          </Link>
        </nav>
      </div>

      <div className="relative z-10 max-w-[1086px] mx-auto text-center mt-40">
        <h1 className="text-6xl font-bold uppercase leading-snug mb-9">
          Manage all your leads{" "}
          <span className="block text-8xl text-primary-500">Like a pro</span>
        </h1>
        <p className="text-3xl leading-snug">
          Streamline and simplify{" "}
          <span className="underline decoration-2 decoration-wavy underline-offset-2 decoration-amber-500">
            lead-processing pipelines
          </span>
          , so that real estate and loan professionals can focus more on helping
          clients and less on managing the process.
        </p>
        <div className="flex justify-center gap-5 mt-20">
          <Link href="/">
            <a className="block">
              <Button>Explore more</Button>
            </a>
          </Link>
          <Link href="/">
            <a className="block">
              <Button primary>Get started</Button>
            </a>
          </Link>
        </div>
      </div>
      <div className="max-w-full mx-auto -translate-y-48 -mb-96">
        <img
          className="max-w-full mx-auto"
          src={HomeIntroBG.src}
          alt="Home Intro BG"
        />
      </div>
    </header>
  );
};

export default Intro;
