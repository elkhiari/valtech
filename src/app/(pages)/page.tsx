"use client";
import LogoCarousel from "@/components/home/logoCarousel";
import Map from "@/components/home/map";
import Numbers from "@/components/home/numbers";
import Products from "@/components/home/products";
import Terrains from "@/components/home/siege";
import Contactus from "@/components/home/contact-us";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const DynamicHerov = dynamic(() => import("@/components/home/hero/herov"), {
  ssr: false,
});

const DynamicMap = dynamic(() => import("@/components/home/map"), {
  ssr: false,
});

const DynamicContactus = dynamic(() => import("@/components/home/contact-us"), {
  ssr: false,
});

const DynamicTerrains = dynamic(() => import("@/components/home/siege"), {
  ssr: false,
});

const DynamicProducts = dynamic(() => import("@/components/home/products"), {
  ssr: false,
});

const DynamicNumbers = dynamic(() => import("@/components/home/numbers"), {
  ssr: false,
});

const DynamicLogoCarousel = dynamic(
  () => import("@/components/home/logoCarousel"),
  {
    ssr: false,
  }
);

export default function Home() {
  useEffect(() => {}, []);
  return (
    <div className="w-full overflow-y-hidden">
      <DynamicHerov />
      <DynamicNumbers />
      <DynamicLogoCarousel />
      <DynamicTerrains />
      <DynamicProducts />
      <DynamicMap />
      <DynamicContactus />
    </div>
  );
}
