import React from "react";
import Image from "next/image";

const Logo = (): JSX.Element => {
  return <Image src="/assets/logo.svg" alt="Logo" height={100} width={100} />;
};

export default Logo;
