import React from "react";

const LeaderCard = () => {
  return (
    <div className="text-center p-8
    md:text-start md:bg-white md:absolute md:right-0 md:-bottom-40 lg:-bottom-32 md:p-12 md:w-1/2">
      <h1 className="font-josefin uppercase text-2xl font-semibold mb-4 lg:text-3xl">The leader in interactive VR</h1>

      <p className="font-alata text-stone-400 lg:text-xl">
        Founded in 2011, Loopstudios has been producing world-class virtual
        reality projects for some of the best companies around the globe. Our
        award-winning creations have transformed businesses through digital
        experiences that bind to their brand.
      </p>
    </div>
  );
};

export default LeaderCard;
