"use client";
import { useEffect, useState } from "react";
import Travaux from "./Travaux";
import Products from "./Products";

export default function Hero() {
  const [isTravaux, setisTravaux] = useState(false);

  // every 3s change the state
  useEffect(() => {
    const interval = setInterval(() => {
      setisTravaux((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, [isTravaux]);
  return (
    <div className="h-[120vh] pb-[20vh] flex justify-center items-center *:duration-500 main bg-[#eef9ee]">
      <div className="w-full h-default p-20 relative">
        {isTravaux ? <Travaux /> : <Products />}
      </div>
      <div className="bottom-0 absolute left-0 p-4 *:duration-500 flex *:space-y-4 place-items-center *:uppercase   [&>h1]:cursor-pointer [&>h1]:px-4 [&>h1]:py-2">
        <h1
          onClick={() => setisTravaux(true)}
          className={!isTravaux === true ? "text-black/20" : "text-black "}
        >
          Travaux
        </h1>
        <div className="w-8 h-[2px] bg-black "></div>
        <h1
          onClick={() => setisTravaux(false)}
          className={isTravaux ? "text-black/20" : "text-black "}
        >
          Produits
        </h1>
      </div>

      {/* <div className="rotate-[-2deg] absolute top-[96vh] -left-10 w-[110%] h-40 bg-[#eef9ee]  flex justify-center items-center "></div> */}
    </div>
  );
}
