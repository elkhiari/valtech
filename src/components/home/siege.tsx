"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const AnimationVariant = {
  initial: (index: number) => ({
    scale: 0,
    y: index === 0 ? -100 : index === 2 ? -100 : 0,
    x: index === 0 ? -100 : index === 2 ? 100 : 0,
  }),
  animate: (index: number) => ({
    scale: index === 1 ? 1.1 : 1,
    y: 0,
    x: 0,
    rotate: index === 1 ? 0 : index === 0 ? -10 : 10,
  }),
};

function Local() {
  const locals = [
    {
      title: "dépôt Kamra, Rabat",
      img: "/images/valtech/kamra.jpg",
    },
    {
      title: "Siège Valtech, Rabat",
      img: "/images/valtech/siege.jpg",
    },
    {
      title: "dépôt NAHDA, Rabat",
      img: "/images/valtech/nahda.jpg",
    },
  ];

  return (
    <div className="w-full p-10 flex flex-col justify-center items-center">
      <div
        className="w-full h-full flex justify-center items-center cursor-pointer"
        style={{ maxWidth: "1200px" }}
      >
        {locals.map((product, index) => (
          <motion.div
            className="w-[400px]  h-[400px] bg-white shadow-lg rounded-lg p-4"
            style={{
              zIndex: index === 1 ? 1 : 0,
            }}
            variants={AnimationVariant}
            initial="initial"
            animate="animate"
            custom={index}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.95 }}
            whileInView="animate"
            viewport={{ once: true }}
            key={index}
          >
            <img
              src={product.img}
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <div className="p-4">
              <h1 className="text-xl font-bold">{product.title}</h1>
            </div>
          </motion.div>
        ))}
      </div>
      {/* <div
        className="w-full h-full flex justify-center items-center cursor-pointer mt-10 uppercase"
        style={{ maxWidth: "1200px" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold"
        >
          Nos locals
        </motion.h1>
      </div> */}
    </div>
  );
}

export default Local;
