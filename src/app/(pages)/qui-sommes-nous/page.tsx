"use client";
import History from "@/components/home/history";
import Hero from "@/components/qui-sommes-nous/hero";
import dynamic from "next/dynamic";
import React from "react";

const DynamicHero = dynamic(() => import("@/components/qui-sommes-nous/hero"), {
  ssr: false,
});

function Page() {
  return (
    <div>
      <DynamicHero />
      <History />
    </div>
  );
}

export default Page;
