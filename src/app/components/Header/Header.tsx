"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo";
import Menu from "./Menu";
import NavItem from "./NavItem";

const Header = () => {
  const menuItems: string[] = [
    "About",
    "Careers",
    "Events",
    "Products",
    "Support",
  ];
  const [menu, setmenu] = useState(false);
  const handleToggle = () => {
    setmenu(!menu);
  };
  return (
    <header
      className={`md:brightness-90 md:bg-hero-desk bg-center bg-no-repeat bg-cover w-full 
                px-5 py-6 md:py-16 md:px-20 lg:px-24 xl:px-36
                ${
                  menu
                    ? `h-screen bg-slate-950`
                    : `bg-hero-mobile h-[34.625rem]`
                } `}
    >
      <nav className="flex justify-between items-center  transition-all duration-1000 ease-in-out">
        <Logo />
        {menu ? (
          <FontAwesomeIcon
            onClick={handleToggle}
            icon={faClose}
            className="text-white w-6 h-auto cursor-pointer "
          />
        ) : (
          <FontAwesomeIcon
            onClick={handleToggle}
            icon={faBars}
            className="text-white w-6 h-auto cursor-pointer md:hidden"
          />
        )}
      <div className="hidden md:block">
        {menuItems.map((item, index) => (
          <NavItem key={index} text={item} />
        ))}
      </div>
      </nav>
      {menu && <Menu />}
      <p
        className="
        w-full md:w-1/2 lg:w-1/3 mt-[10.125rem] md:mt-[6.125rem]
        text-3xl md:text-4xl lg:text-5xl p-5 md:p-7 lg:p-9
       text-white font-josefin uppercase
        border-2 border-white   "
      >
        Immersive experiences that deliver
      </p>
    </header>
  );
};

export default Header;
