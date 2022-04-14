import React from "react";
import Image from "next/image";

const Logo = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}): JSX.Element => {
  return (
    <Image
      src="/assets/logo.svg"
      alt="Logo"
      height={height || 70}
      width={width || 70}
    />
  );
};

export default Logo;
