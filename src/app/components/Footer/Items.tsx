import React from "react";
import { menuItems } from "../Main/data";
const Items = () => {
  return (
    <div>
      <ul>
        {menuItems.map((item, index) => (
          <li className="py-1" key={index}>
            <a className="text-white font-josefin hover:underline hover:underline-offset-2" href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
