"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function Products() {
  const pdt = [
    {
      category: "Produits sportifs",
      products: [
        {
          name: "Ballons de football",
          image_url:
            "https://www.airzen.fr/wp-content/uploads/2022/11/AdobeStock_209922283-scaled-e1667911357285.jpeg",
        },
        {
          name: "Raquettes de tennis",
          image_url:
            "https://static.latribune.fr/2204315/top-3-des-meilleures-raquettes-de-tennis.jpg",
        },
        {
          name: "Vélos de route",
          image_url:
            "https://blog.ekosport.fr/wp-content/uploads/2021/05/choisir-ses-chaussures-de-velo-route.jpg",
        },
        {
          name: "Tapis de yoga",
          image_url:
            "https://cdn.shopify.com/s/files/1/0070/9555/0067/files/tapis_de_yoga_ef4366fc-b922-43cf-a743-66f4746832b3_600x600.jpg?v=1645551544",
        },
        {
          name: "Haltères",
          image_url:
            "https://www.ericfavre.com/lifestyle/wp-content/uploads/2020/06/barres-halteres.jpg",
        },
        {
          name: "Baskets de course",
          image_url:
            "https://blog.ekosport.fr/wp-content/uploads/2021/09/Running-top-5-2021-hoka-mach-4-jaune.jpg",
        },
        {
          name: "Sacs de sport",
          image_url:
            "https://media.gqmagazine.fr/photos/63205bc95e9e5a2a0c6deb8b/16:9/w_2560%2Cc_limit/GettyImages-1365424608.jpg",
        },
        {
          name: "Vêtements de sport",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Équipements de protection (casques, genouillères)",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Montres de sport",
          image_url: "/images/testpdt/Untitled.png",
        },
      ],
    },
    {
      category: "Espaces verts",
      products: [
        {
          name: "Tondeuses à gazon",
          image_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VjbbSSs1pNyve3WQt-kcuFPDHthYhHxVaBHEbGkVPg&s",
        },
        {
          name: "Systèmes d'arrosage",
          image_url:
            "https://cdn.shopify.com/s/files/1/0521/1147/4838/files/arrosage-automatique-enterre.jpg?v=1660308183",
        },
        {
          name: "Plantes ornementales",
          image_url:
            "https://www.bioactualites.ch/fileadmin/_processed_/0/c/csm_Lautrejardin_Regine_Kern_Faessler_FiBL_1200_06f814a432.jpg",
        },
        {
          name: "Engrais",
          image_url:
            "https://magazine.hortus-focus.fr/wp-content/uploads/sites/2/2022/09/engrais-main-fotoduets-1200x800-1.jpg",
        },
        {
          name: "Semences de gazon",
          image_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq5hRdTBJXYiACeT3DzG6Wx2D-64bIIm8ktvj-xbvPYA&s",
        },
        {
          name: "Équipements de jardinage (pelles, râteaux)",
          image_url:
            "https://i.f1g.fr/media/cms/orig/2023/01/19/471687f9b63900e69837dcd7d5acdf2c9a230e02494c3b825fa3514dbfbd47ad.jpg",
        },
        {
          name: "Mobilier de jardin",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Parterres de fleurs",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Barbecues de jardin",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Bordures de jardin",
          image_url: "/images/testpdt/Untitled.png",
        },
      ],
    },
    {
      category: "Produits agricoles",
      products: [
        {
          name: "Tracteurs",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Semences",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Engrais",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Pesticides",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Machines de récolte",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Systèmes d'irrigation",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Aliments pour animaux",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Serres",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Matériel de labourage",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Systèmes de stockage des grains",
          image_url: "/images/testpdt/Untitled.png",
        },
      ],
    },
    {
      category: "Produits géosynthétiques et de drainage",
      products: [
        {
          name: "Géotextiles",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Géomembranes",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Géogrilles",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Géocellules",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Tubes de drainage",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Matelas drainants",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Géocomposites",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Barrières anti-érosion",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Nattes de protection",
          image_url: "/images/testpdt/Untitled.png",
        },
        {
          name: "Systèmes de filtration",
          image_url: "/images/testpdt/Untitled.png",
        },
      ],
    },
  ];

  const t = [
    "Produits sportifs",
    "Espaces verts",
    "Produits agricoles",
    "Produits géosynthétiques et de drainage",
  ];

  const [selected, setSelected] = useState("Produits sportifs");
  return (
    <div className="my-10  bg-slate-100 p-5 w-full text-black  uppercase font-bold cursor-pointer overflow-hidden">
      <div className="w-full px-4 h-full flex flex-wrap md:space-x-2 space-x-2 space-y-2 md:space-y-0 items-center">
        {t.map((e, x) => (
          <motion.div
            initial={{
              opacity: 0,
              y: -50,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { delay: 0.2 * x },
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { delay: 0.2 * x },
            }}
            key={e}
            className={`px-4 py-2 duration-300 rounded-full text-xs ${
              selected === e
                ? "bg-black text-white"
                : "bg-black/5 hover:bg-black/10 text-black/30 hover:text-black/60"
            }`}
            onClick={() => setSelected(e)}
          >
            {e}
          </motion.div>
        ))}
      </div>
      <div className="h-[calc(100%-4rem)] w-full flex items-center justify-center">
        {pdt.map((e) =>
          e.category === selected ? (
            <div
              key={e.category}
              className="w-full h-full flex items-center justify-center"
            >
              <div className="grid grid-cols-4 w-full p-4 gap-4">
                {e.products.slice(0, 7).map((p, i) => (
                  <motion.div
                    viewport={{ once: true }}
                    initial={{
                      opacity: 0,
                      filter: "blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      filter: "blur(0px)",
                      transition: { duration: 0.5, delay: 0.2 * i },
                    }}
                    whileInView={{
                      opacity: 1,
                      filter: "blur(0px)",
                      transition: { duration: 0.5, delay: 0.2 * i },
                    }}
                    key={p.name}
                    className="flex hover:z-50 flex-col items-center w-full  p-4 bg-white shadow-sm rounded-md hover:scale-125 hover:rotate-3 duration-300"
                  >
                    <img
                      src={
                        // "/images/Terrains/" +
                        // // random between 0 and 2
                        // (Math.floor(Math.random() * 3) + 1) +
                        // ".jpg"
                        p.image_url
                      }
                      alt={p.name}
                      className="h-44 object-cover w-full rounded-md"
                    />
                    <div className="w-full">
                      <h1 className="text-sm font-bold line-clamp-1">
                        {p.name}
                      </h1>
                    </div>
                  </motion.div>
                ))}
                <motion.div
                  initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.5, delay: 0.2 * 7 },
                  }}
                  whileInView={{
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.5, delay: 0.2 * 7 },
                  }}
                  className="flex flex-col items-center place-content-center w-full  p-4 bg-white shadow-sm rounded-md hover:bg-green-200 duration-300"
                >
                  <h1 className="text-sm font-bold">Voir plus</h1>
                </motion.div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Products;
