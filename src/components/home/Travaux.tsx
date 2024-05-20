"use client";
import React, { useEffect, useRef } from "react";

export default function LogoCarousel() {
  const logos = [
    "https://www.valtech.ma/images/valtech/business/terrains-sport/carousel/1.jpg",
    "https://www.valtech.ma/images/valtech/business/terrains-sport/carousel/2.jpg",
    "https://www.valtech.ma/images/valtech/business/terrains-sport/carousel/3.jpg",
    "https://www.valtech.ma/images/valtech/business/terrains-sport/carousel/4.jpg",
    "https://www.valtech.ma/images/valtech/business/assainissement-liquide-et-solide/carousel/1.jpg",
    "https://www.valtech.ma/images/valtech/business/assainissement-liquide-et-solide/carousel/2.jpg",
    "https://www.valtech.ma/images/valtech/business/assainissement-liquide-et-solide/carousel/3.jpg",
    "https://www.valtech.ma/images/valtech/business/etancheite-geomembrane/carousel/1.jpg",
    "https://www.valtech.ma/images/valtech/business/etancheite-geomembrane/carousel/2.jpg",
    "https://www.valtech.ma/images/valtech/business/etancheite-geomembrane/carousel/3.jpg",
  ];

  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ul = carouselRef.current;
    if (ul) {
      const clone = ul.cloneNode(true) as HTMLUListElement;
      clone.setAttribute("aria-hidden", "true");
      ul.parentNode?.appendChild(clone);
    }
  }, []);

  return (
    <div className="w-full cc inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul
        ref={carouselRef}
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 md:[&_img]:max-w-80 [&_img]:max-w-40 animate-infinite-scroll-reverse"
      >
        {logos.map((l, i) => (
          <li
            key={i}
            className="text-sm bg-white  duration-300 text-black p-4 space-y-4 cursor-pointer"
          >
            <img
              src={l}
              alt={`Placeholder ${i + 1}`}
              className="duration-300 rounded-md"
            />
            <h1 className="font-bold">
              Bassin supérieur de la station de transfert d’énergie par pompage
              d’Afourer
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
}
