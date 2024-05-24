"use client";

const isBrowser = () => typeof window !== "undefined";

import { AiOutlineClose } from "react-icons/ai";
import { RiMenu2Line } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import Menu from "./menu";
import clsx from "clsx";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [scroll, setScroll] = useState(0);

  return (
    <div
      className={clsx(
        "w-full  flex z-[1000] justify-between fixed  top-0 duration-300 items-center p-3 px-10 ",
        {
          "bg-white  text-black h-14": scroll > 10,
          "md:bg-transparent bg-white text-black  md:text-white md:h-20 h-14":
            scroll < 10,
        }
      )}
    >
      <div>
        <Link href="/">
          <img
            src="https://www.valtech.ma/images/valtech/logo.svg"
            // className="object-contain p-3  h-14  rounded-b-2xl"
            className={clsx("object-contain h-12", {
              // "h-14": scroll >= 10,
              // "md:h-32 h-14 md:mt-10": scroll < 10,
            })}
          />
          {/* <img
            src="/logo.svg"
            className={clsx("object-contain h-14  rounded-b-2xl", {
              // "h-14": scroll >= 10,
              // "md:h-32 h-14 md:mt-10": scroll < 10,
            })}
          /> */}
        </Link>
      </div>

      <ul
        className={clsx(
          "md:flex items-center left-0 md:top-auto justify-between  w-full max-w-md  font-semibold text-xs bg-white md:bg-transparent  p-5 md:p-0  duration-300  absolute md:relative ",
          {
            "-top-[40vh] md:left-auto": !isOpen,
            "top-full  md:left-auto": isOpen,
          }
        )}
      >
        <li className={clsx("flex items-center relative group cursor-pointer")}>
          <span className="p-4 md:p-0 ">Aménagement</span>
          <MdKeyboardArrowDown className="group-hover:rotate-180 duration-300" />
          <div className="absolute z-10 top-full left-1/2 h-0 group-hover:h-auto -translate-x-1/2">
            <ul className="w-96 h-0 md:mt-2 overflow-hidden  group-hover:h-60 duration-300 text-black bg-white  rounded-md shadow-md">
              <li>
                <Link href="#">
                  <p className="p-3 hover:pl-6 duration-300  hover:bg-slate-200/50">
                    Aménagement urbain
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="p-3 hover:pl-6 duration-300  hover:bg-slate-200/50">
                    Aménagement sportif
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="p-3 hover:pl-6 duration-300  hover:bg-slate-200/50">
                    Irrigation agriculture
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="p-3 hover:pl-6 duration-300  hover:bg-slate-200/50">
                    Assainissement
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="p-3 hover:pl-6 duration-300  hover:bg-slate-200/50">
                    Traitment des eaux
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="p-3 hover:pl-6 duration-300  hover:bg-slate-200/50">
                    Géosynthétiques et Solutions de drainage
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className={clsx("flex items-center relative group cursor-pointer")}>
          <span className="p-4 md:p-0 ">Produits</span>
          <MdKeyboardArrowDown className="group-hover:rotate-180 duration-300" />
          <div className="absolute z-10 top-full left-1/2 h-0 group-hover:h-auto -translate-x-1/2">
            <ul className="w-96 h-0 md:mt-2 overflow-hidden  group-hover:h-40 duration-300 bg-white text-black rounded-md shadow-md">
              <li>
                <Link href="#">
                  <p className="p-3 hover:pl-6 duration-300  hover:bg-slate-200/50">
                    Produits sportifs
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="p-3 hover:pl-6 duration-300  hover:bg-slate-200/50">
                    Espaces verts
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="p-3 hover:pl-6 duration-300  hover:bg-slate-200/50">
                    Produits agricoles
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="p-3 hover:pl-6 duration-300  hover:bg-slate-200/50">
                    Produits géosynthétiques et de drainage
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link href="/qui-sommes-nous" className="p-4 md:p-0 ">
            Qui sommes-nous ?
          </Link>
        </li>
        <li>
          <Link href="/#contact" className="p-4 md:p-0 ">
            Contactez-nous
          </Link>
        </li>
      </ul>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={
            "text-2xl h-14 w-14 md:hidden flex place-content-center place-items-center z-[1000] rounded-br-3xl  text-black "
          }
        >
          {isOpen ? <AiOutlineClose /> : <RiMenu2Line />}
        </button>
        {/* <Link
          href="/En"
          lang="en"
          hrefLang="en"
          className="font-black text-sm rounded-full p-3  text-white"
        >
          En
        </Link> */}
      </div>
    </div>
  );
  return (
    <>
      <div className="text-white justify-between flex items-center w-full fixed top-0 z-[100]">
        <div className={clsx("flex w-full duration-100")}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={
              "text-2xl h-14  w-14 flex place-content-center place-items-center rounded-br-3xl  text-black " +
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
