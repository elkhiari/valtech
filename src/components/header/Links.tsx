import React from "react";

function Links() {
  return (
    <div className="flex  place-items-center md:place-items-start justify-center  w-full md:space-x-20 md:flex-row flex-col">
      <ul className="group ">
        <li>
          <h1 className="text-4xl uppercase  md:mb-20 mb-5 font-bold  cursor-pointer">
            Travaux
          </h1>
        </li>
        <li className="text-sm hover:translate-x-4 p-1 duration-300 group-hover:text-white cursor-pointer">
          Aménagement urbain
        </li>
        <li className="text-sm hover:translate-x-4 p-1 duration-300 group-hover:text-white cursor-pointer">
          Aménagement sportif
        </li>
        <li className="text-sm hover:translate-x-4 p-1 duration-300 mt-4 group-hover:text-white cursor-pointer">
          Irrigation agriculture
        </li>
        <li className="text-sm hover:translate-x-4 p-1 duration-300 mt-4 group-hover:text-white cursor-pointer">
          Assainissement
        </li>
        <li className="text-sm hover:translate-x-4 p-1 duration-300 group-hover:text-white cursor-pointer">
          Traitment des eaux
        </li>
        <li className="text-sm hover:translate-x-4 p-1 duration-300 group-hover:text-white cursor-pointer">
          Géosynthétiques et Solutions de drainage
        </li>
      </ul>
      <div className="w-[0.2px]  bg-black/30"></div>
      <ul className="group mt-10 md:mt-0">
        <li>
          <h1 className="text-4xl uppercase md:mb-20 mb-5 font-bold cursor-pointer">
            Produits
          </h1>
        </li>
        <li className="text-sm hover:translate-x-4 p-1 duration-300 group-hover:text-white cursor-pointer">
          Produits sportifs
        </li>
        <li className="text-sm hover:translate-x-4 p-1 duration-300 group-hover:text-white cursor-pointer">
          Espaces verts
        </li>
        <li className="text-sm my-4 hover:translate-x-4 p-1 duration-300 group-hover:text-white cursor-pointer">
          Produits agricoles
        </li>
        <li className="text-sm hover:translate-x-4 p-1 duration-300 group-hover:text-white cursor-pointer">
          Produits géosynthétiques et de drainage
        </li>
      </ul>
    </div>
  );
}

export default Links;
