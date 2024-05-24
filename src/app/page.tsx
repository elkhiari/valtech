"use client";
import AnimatedCounter from "@/components/animations/counterAnimation";
import Hero from "@/components/home/hero/hero";
import Herov from "@/components/home/hero/herov";
import History from "@/components/home/history";
import LogoCarousel from "@/components/home/logoCarousel";
import Map from "@/components/home/map";
import Numbers from "@/components/home/numbers";
import Products from "@/components/home/products";
import Terrains from "@/components/home/siege";
import Image from "next/image";
import Contactus from "@/components/home/contact-us";
import { useEffect } from "react";

export default function Home() {
  // const { x, y } = useMousePosition();
  return (
    <div className="w-full overflow-y-hidden">
      <Herov />
      <Numbers />
      <LogoCarousel />
      <Terrains />
      <Products />
      <Map />
      <Contactus />
      {/* <History /> */}
    </div>
  );
}
