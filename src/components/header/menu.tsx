import clsx from "clsx";
import React from "react";
import Links from "./Links";

function Menu({
  isOpen,
  setIsOpen,
}: Readonly<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>) {
  return (
    <div
      className={clsx(" duration-500 flex fixed top-0 left-0 z-[50]", {
        "h-[0px] bg-white rounded-br-full w-[0px] overflow-hidden": !isOpen,
        "w-full h-default bg-red-600": isOpen,
      })}
    >
      <div
        className={clsx(
          "w-screen h-screen flex duration-500 justify-center items-center",
          {
            "opacity-0": !isOpen,
            "delay-500": isOpen,
          }
        )}
      >
        <div className="w-screen h-screen flex items-center overflow-auto pt-52  md:pt-10">
          <Links />
        </div>
      </div>
    </div>
  );
}

export default Menu;
