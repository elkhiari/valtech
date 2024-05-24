import Textfade from "@/components/animations/TextFade";
import React from "react";
import CardPdt from "./cardpdt";

function Travaux() {
  return (
    <Textfade className="flex flex-col md:flex-row justify-between items-center w-full h-full">
      <div className="flex min-w-[33%]   flex-col space-y-4 ">
        <h1 className="text-5xl font-bold uppercase">Travaux</h1>
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
      {/* <div className="flex h-full w-full justify-end  *:rounded-md *:overflow-hidden place-items-center *:cursor-pointer"> */}

      <div className="flex h-full w-full justify-end *:max-w-44 space-x-8 *:object-cover ">
        {/* <img
          src="https://aujourdhui.ma/wp-content/uploads/2019/01/Assainissement-liquide-1.jpg"
          alt="club car"
        /> */}
        <CardPdt
          title="ASSAINISSEMENT LIQUIDE ET SOLIDE"
          img="https://aujourdhui.ma/wp-content/uploads/2019/01/Assainissement-liquide-1.jpg"
          className="h-full -translate-y-7 overflow-hidden relative"
          imgClassName="h-full w-full object-cover"
          txt={true}
        />
        {/* <img
          className="translate-y-10"
          src="https://images.pexels.com/photos/914682/pexels-photo-914682.jpeg"
          alt="club car"
        /> */}
        <CardPdt
          title="GOLF ET ESPACES VERTS"
          img="https://images.pexels.com/photos/914682/pexels-photo-914682.jpeg"
          className="translate-y-0 h-full overflow-hidden relative"
          imgClassName="h-full w-full object-cover"
          txt={true}
        />

        <CardPdt
          title="TERRAINS DE SPORT"
          img="https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg"
          className="-translate-y-16 h-full overflow-hidden relative"
          imgClassName="h-full w-full object-cover"
          txt={true}
        />

        {/* <img
          className="-translate-y-10"
          src="https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg"
          alt="club car"
        /> */}
      </div>
    </Textfade>
  );
}

export default Travaux;
