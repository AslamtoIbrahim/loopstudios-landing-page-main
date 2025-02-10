import React from "react";

type props = {
  key: React.Key | null | undefined;
  text: string;
};
const NavItem = ({ text, key }: props) => {
  return <a className="text-white font-josefin text-lg mx-2 md:mx-3 lg:mx-4 cursor-pointer
  relative hover:after:absolute hover:after:content-[''] hover:after:h-1 hover:after:w-8 hover:after:bg-white hover:after:left-1/4 hover:after:-bottom-4 " key={key}>{text}</a>;
};

export default NavItem;
