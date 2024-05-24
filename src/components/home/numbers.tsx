import React from "react";
import AnimatedCounter from "../animations/counterAnimation";

function Numbers() {
  return (
    <div className="w-full h-[35vh] flex justify-center items-center p-10 ">
      <ul className="w-full max-w-[90%] h-full [&>li]:flex [&>li>h3]:text-black/60 [&>li>h3]:uppercase [&>li>h3]:mb-2 [&>li>h3]:text-xs text-center [&>li>h3]:font-semibold [&>li>h1]:text-6xl [&>li>h1]:font-4bold [&>li]:flex-col  items-center  rounded-md hover:shadow-xl  duration-300 shadow-md flex justify-center place-content-center">
        <li className="w-full h-20 flex justify-center items-center">
          <h3>Projets réalisés</h3>
          <h1 className="!text-8xl text-black">
            <AnimatedCounter from={0} to={99} />
          </h1>
        </li>
        <li className="w-full h-20 flex justify-center items-center">
          <h3>Projets en cours</h3>
          <h1 className="!text-8xl text-black">
            <AnimatedCounter from={0} to={5} />
          </h1>
        </li>
        <li className="w-full h-20 flex justify-center items-center">
          <h3>Produits vendus</h3>
          <h1 className="!text-8xl text-black">
            <AnimatedCounter from={0} to={63} />
          </h1>
        </li>
      </ul>
    </div>
  );
}

export default Numbers;
