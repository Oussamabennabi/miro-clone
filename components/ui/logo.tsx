import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src={"/logo.svg"}
      alt="logo image"
      width={36}
      priority
      height={36}
    />
  );
};

export default Logo