"use client";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu2Line } from "react-icons/ri";
import React, { useState } from "react";
import Menu from "./menu";
import clsx from "clsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="text-white justify-between flex items-center w-full fixed top-0 z-[100]">
        <div className={clsx("flex w-full duration-100")}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={
              "text-2xl h-14 w-14 flex place-content-center place-items-center rounded-br-3xl  text-black " +
              (!isOpen ? "bg-white" : "")
            }
          >
            {isOpen ? <AiOutlineClose /> : <RiMenu2Line />}
          </button>
        </div>
        {/* <img
          src="https://www.valtech.ma/images/valtech/logo.svg"
          className="object-contain p-3 w-64 h-14 bg-white rounded-b-2xl"
        /> */}
        <div className="flex items-center w-full justify-between"></div>
      </div>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Navbar;
