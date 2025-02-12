import React from "react";
import { menuItems } from "../Main/data";
import NavItem from "../Header/NavItem";

type prop = { styles?: string };
const Items = ({ styles }: prop) => {
  return (
    <div className={styles}>
      <ul className="md:flex">
        {menuItems.map((item, index) => (
          <li className="py-1" key={index}>
            <NavItem text={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
