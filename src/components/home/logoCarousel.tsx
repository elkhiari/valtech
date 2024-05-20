"use client";
import React, { useEffect, useRef } from "react";

export default function LogoCarousel() {
  const logos = [
    "https://www.valtech.ma/images/valtech/partners/toro.jpg",
    "https://www.valtech.ma/images/valtech/partners/club_car.jpg",
    "https://www.valtech.ma/images/valtech/partners/foley_united.jpg",
    "https://www.valtech.ma/images/valtech/partners/par_aide.jpg",
    "https://www.valtech.ma/images/valtech/partners/redexim.jpg",
    "https://www.valtech.ma/images/valtech/partners/shibaura.jpg",
    "https://www.valtech.ma/images/valtech/partners/shibaura.jpg",
    "https://www.valtech.ma/images/valtech/partners/standard_golf_company.jpg",
    "https://www.valtech.ma/images/valtech/partners/wittek.jpg",
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
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul
        ref={carouselRef}
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-24 animate-infinite-scroll"
      >
        {logos.map((l, i) => (
          <li key={i}>
            <img
              src={l}
              alt={`Placeholder ${i + 1}`}
              className="grayscale hover:grayscale-0 duration-300"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
