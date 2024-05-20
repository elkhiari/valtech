import Hero from "@/components/home/hero";
import LogoCarousel from "@/components/home/logoCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full overflow-y-hidden">
      <Hero />
      <LogoCarousel />
    </div>
  );
}
