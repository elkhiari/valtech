"use client";
import React from "react";
import { HiOutlineArrowLongDown } from "react-icons/hi2";

const isBrowser = () => typeof window !== "undefined";

function Hero() {
  // const click = () => {
  //   if (isBrowser()) {
  //     window.scrollTo({
  //       top: window.innerHeight,
  //       behavior: "smooth",
  //     });
  //   }
  // };
  return (
    <div className="min-h-[100dvh] overflow-y-hidden mb-10 w-full object-cover bg-center bg-no-repeat bg-cover relative flex place-content-center place-items-center flex-col">
      <video
        autoPlay
        loop
        muted
        className="absolute blur-sm -z-10 min-h-[100dvh] min-w-full object-cover"
        src="/videos/bg.mp4"
      />

      <div className="flex xl:flex-row space-y-3 xl:space-y-0 space-x-0 xl:space-x-3 flex-col overflow-hidden place-content-center place-items-center mx-auto max-w-6xl h-default">
        <h1 className="text-2xl xl:text-3xl w-full font-bold text-center text-white">
          Qui sommes-nous ?
        </h1>
        <div className="xl:border-l-4 xl:border-green-300 px-3 bg-center bg-no-repeat">
          <p className="ttext-lg text-justify md:text-xl w-full font-normal text-gray-100">
            Valtech : Votre partenaire de confiance. Transformez vos visions en
            réalité avec nos solutions innovantes d&apos;aménagement urbain et
            sportif, d&apos;irrigation agricole, d&apos;assainissement, de
            traitement des eaux et de géosynthétiques. Ensemble, bâtissons un
            avenir durable.
          </p>
        </div>
      </div>

      <div
        className="
        w-full
        flex
        place-content-center
        place-items-center
        rounded-t-3xl
        transition-all
        duration-300
        ease-in-out -translate-y-20
      "
      >
        <div
          className="
            w-14
            h-14
            bg-white
            rounded-full
            flex
            p-3
            cursor-pointer
            place-content-center
            place-items-center
            shadow-md
            transform
            hover:scale-105
            duration-300
            ease-in-out
            "
          // onClick={}
        >
          <HiOutlineArrowLongDown className="text-[6rem] mx-auto text-gray-600" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
