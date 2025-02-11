import React from "react";

const LeaderCard = () => {
  return (
    <div className="text-center p-8
       md:text-start md:bg-white md:absolute md:right-0 md:-bottom-32 lg:-bottom-32
       xl:-bottom-8 md:p-10 xl:p-16 md:w-1/2  2xl:-bottom-1">

      <h1 className="font-josefin uppercase text-2xl font-semibold mb-4 lg:text-3xl 2xl:text-7xl">The leader in interactive VR</h1>

      <p className="font-alata text-stone-400 md:text-base lg:text-xl 2xl:text-4xl">
        Founded in 2011, Loopstudios has been producing world-class virtual
        reality projects for some of the best companies around the globe. Our
        award-winning creations have transformed businesses through digital
        experiences that bind to their brand.
      </p>
    </div>
  );
};

export default LeaderCard;
