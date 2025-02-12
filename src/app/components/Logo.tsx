import React from "react";
import Image from "next/image";
import logo from "../../../public/pictures/images/logo.svg";

type props = {
  width?: number;
  height?: number;
};
const Logo = ({ width = 192, height = 32 }: props) => {
  return (
    <div>
      <a href="#">
        <Image src={logo} alt="logo image" width={width} height={height} />
      </a>
    </div>
  );
};

export default Logo;
