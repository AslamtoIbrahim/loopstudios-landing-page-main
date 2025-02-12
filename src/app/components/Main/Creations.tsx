import React from "react";
import { creations } from "./data";
import Image from "next/image";
import SeeAllButton from "./SeeAllButton";

const Creations = () => {
  return (
    <div className="py-12 md:mt-24 grid justify-center justify-items-center items-center
     md:grid-cols-3 md:gap-8 ">
      <h1 className="uppercase font-josefin font-semibold text-2xl md:justify-self-start 
      xl:text-3xl 2xl:text-6xl mb-4 md:mb-0">
        Our creations
      </h1>
      <section className="
       md:row-start-2 md:col-span-3
      md:grid md:grid-cols-4 md:grid-rows-2 md:gap-4">
        {creations.map((item, index) => {
          return (
            <div key={index} className="cursor-pointer group relative py-4 brightness-95">
              <h2
                className=" group-hover:text-black  w-2/5
                uppercase font-josefin font-medium text-xl text-white
                absolute left-4 md:left-5 xl:left-6 2xl:left-9 bottom-4 md:bottom-6 xl:bottom-7 2xl:bottom-9
                xl:text-2xl 2xl:text-4xl  ">
                {item.title}
              </h2>
              <picture className="group-hover:opacity-35">
                <source media="(min-width: 760px)" srcSet={item.imageDesktop} />
                <Image
                  src={item.imageMobile}
                  alt={item.title}
                  width={654}
                  height={240}
                />
              </picture>
            </div>
          );
        })}
      </section>
      <section className="md:col-start-3 md:col-end-4 md:justify-self-end mt-4 md:mt-0">
          <SeeAllButton />
      </section>
    </div>
  );
};

export default Creations;
