import React from "react";
import CardPdt from "./cardpdt";
import Textfade from "@/components/animations/TextFade";

function Products() {
  return (
    <Textfade className="flex flex-col md:flex-row justify-between items-center w-full h-full">
      <div className="flex  min-w-[33%]  flex-col space-y-4 ">
        <h1 className="text-5xl font-bold uppercase">Produits</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatibus.
        </p>
        <button
          className="bg-black text-white duration-300 border-2 border-black px-4 py-2 rounded-md hover:bg-white hover:text-black"
          type="button"
        >
          <a href="#">En savoir plus</a>
        </button>
      </div>
      <div className="flex h-full  w-full justify-end  *:rounded-md *:overflow-hidden place-items-center *:cursor-pointer">
        <CardPdt
          title="ASSAINISSEMENT LIQUIDE ET SOLIDE"
          img="https://aujourdhui.ma/wp-content/uploads/2019/01/Assainissement-liquide-1.jpg"
          className="translate-x-40 z-50 -translate-y-10"
        />

        <CardPdt
          title="GOLF ET ESPACES VERTS"
          img="https://images.pexels.com/photos/914682/pexels-photo-914682.jpeg"
          className="translate-y-32 translate-x-20"
        />

        <CardPdt
          title="TERRAINS DE SPORT"
          img="https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg"
          className="-translate-y-32"
        />
      </div>
    </Textfade>
  );
}

export default Products;
