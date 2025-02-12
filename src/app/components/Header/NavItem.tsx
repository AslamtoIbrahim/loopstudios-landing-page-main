import React from "react";

type props = {
  text: string;
};
const NavItem = ({ text }: props) => {
  return (
    <a
      className="text-white font-josefin text-lg mx-2 md:mx-3 lg:mx-4 cursor-pointer
        relative hover:after:absolute hover:after:content-[''] hover:after:h-[0.2rem] md:hover:after:h-1 hover:after:w-8 hover:after:bg-white hover:after:left-1/4 hover:after:-bottom-2 md:hover:after:-bottom-4"
    >
      {text}
    </a>
  );
};

export default NavItem;
