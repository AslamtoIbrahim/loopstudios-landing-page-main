import React from "react";
import { menuItems } from "../Main/data";

const Menu = () => {
  return (
    <div className="h-full text-white ">
      <ul
        className="flex flex-col gap-4 h-full justify-center font-josefin uppercase text-2xl px-5 -mt-14
      "
      >
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className="hover:underline hover:underline-offset-2" href="#">{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
