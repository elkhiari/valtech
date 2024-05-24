"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

function FastClick() {
  const [ddevis, setDdevis] = useState(false);
  const refC = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (refC.current && !refC.current.contains(e.target as Node)) {
        setDdevis(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div
      ref={refC}
      className="fixed top-1/2 z-[100] -translate-y-1/2 right-0  rounded-l-lg  duration-300 flex items-center justify-center cursor-pointer"
    >
      <ul className="w-full *:cursor-pointer  h-full flex overflow-y-hidden  rounded-l-md flex-col justify-center">
        <li className="group   cursor-pointer bg-slate-100 flex place-content-center">
          <button
            onClick={() => setDdevis(!ddevis)}
            // className="group flex place-content-center place-items-center"
            className="p-2 py-4"
          >
            <div
              className="rotate-0 text-black text-xs font-bold uppercase"
              style={{ writingMode: "vertical-rl" }}
            >
              Demander devis
            </div>
          </button>
        </li>
        <li className="group p-2 cursor-pointer text-white instagram">
          <BsInstagram className="text-2xl" />
          <span className="sr-only">Instagram</span>
        </li>
        <li className="facebook p-2 cursor-pointer text-white">
          <BsFacebook className="text-2xl" />
          <span className="sr-only">Facebook</span>
        </li>
        <li className="linkedin p-2 cursor-pointer text-white">
          <BsLinkedin className="text-2xl" />
          <span className="sr-only">Linkedin</span>
        </li>
        {/* li with text 'demende devis' and rotate them 90deg */}
      </ul>
      <div
        className={clsx(
          "bg-white px-10 absolute duration-300 right-0 w-[400px]  p-2 cursor-pointer rounded-lg",
          { "-translate-x-20": ddevis },
          { "translate-x-[500px] ": !ddevis }
        )}
      >
        <Devis />
      </div>
    </div>
  );
}

export default FastClick;

function Devis() {
  return (
    <div className="my-6 mx-auto max-w-xl  font-[sans-serif]">
      <h1 className="text-3xl text-[#333] font-extrabold text-center">
        Demande de devis
      </h1>
      <form className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Nom"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500"
        />
        <input
          type="text"
          placeholder="Numéro de téléphone"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500"
        />
        <input
          type="text"
          placeholder="Nom de l'entreprise"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500"
        />
        {/* <textarea
          placeholder="Message"
          rows={6}
          className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-blue-500"
        ></textarea> */}
        <button
          type="button"
          className="text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 w-full"
        >
          envoyer
        </button>
      </form>
    </div>
  );
}
