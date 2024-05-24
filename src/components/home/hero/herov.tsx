import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

function Herov() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const slides = [
    {
      title: "Terrain Prince Moulay El Hassan, F.U.S., Rabat",
      category: "Terrain de sport",
      description:
        "lorem ipsum dolsit amet, consectetur adipiscing elit loream ipsum dolor sit onsectetur adipiscing elit",
      img: "/images/Terrains/1.jpg",
    },
    {
      title: "Golf d'Amelkis, Marrakech",
      category: "	Golfs et espaces verts",
      description:
        "lorem ipsum dolor sitsit amet, consectetur adipiscing elit loream ipsum dolor sit tetur adipiscing elit",
      img: "/images/Terrains/4.jpg",
    },
    {
      title: "Complexe sportif de Fès",
      category: "Terrain de sport",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit loream ipsum dolor sit dipiscing elit",
      img: "/images/Terrains/2.jpg",
    },
    {
      title: "Royal Golf, El Jadida",
      category: "Golfs et espaces verts",
      description:
        "lorem isit amet, consectetur adipiscing elit loream ipsum dolor sit it amet, consectetur adipiscing elit",
      img: "/images/Terrains/6.jpg",
    },
    {
      title: "Terrain El Abdi, El Jadida",
      category: "Terrain de sport",
      description:
        "Votre partenaire en travaux publics lorem ipsum dolor sit amet, consectetur adipiscing elit",
      img: "/images/Terrains/3.jpg",
    },
    {
      title: "Golf de Samanah, Marrakech",
      category: "Golfs et espaces verts",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit loream ipsum dolor sit amet, consectetur adipiscing elit",
      img: "/images/Terrains/5.jpg",
    },
    {
      title: "Royal Golf Dar Es Salam, Rabat",
      category: "Golfs et espaces verts",
      description:
        "lorem ipsum dolorsit amet, consectetur adipiscing elit loream ipsum dolor sit lit",
      img: "/images/Terrains/77.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!transitioning) {
        setTransitioning(true);
        setTimeout(() => {
          setCurrent((prevCurrent) =>
            prevCurrent === slides.length - 1 ? 0 : prevCurrent + 1
          );
          setTransitioning(false);
        }, 1000);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length, transitioning]);

  const handleClick = (index: number) => {
    if (!transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setTransitioning(false);
      }, 500);
    }
  };

  return (
    <div className="w-full h-[100vh]  flex items-center justify-center">
      <div className="w-full h-full relative">
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full absolute top-0 bg-black left-0 flex items-center justify-center"
          >
            <img
              src={slides[current].img}
              alt={slides[current].title}
              className="object-cover w-full h-full opacity-40"
            />
            {/* <div
              className="bg-fixed bg-cover bg-center opacity-40 w-full h-full absolute top-0 left-0"
              style={{
                backgroundImage: `url(${slides[current].img})`,
              }}
            ></div> */}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            key={current}
            initial={{
              opacity: 0,
              y: 100,
              filter: "blur(10px)",
            }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(10px)", y: 100 }}
            transition={{ duration: 1 }}
            className="w-full h-full  z-50 absolute top-0 left-0 flex items-center "
          >
            <div className="md:w-1/2 text-center md:text-left w-full text-white p-20 space-y-2">
              <h1 className="md:text-4xl text-2xl font-bold">
                {slides[current].title}
              </h1>
              <p className="text-lg">{slides[current].description}</p>
              {/*  category place */}
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <div className="bg-white w-10 h-1"></div>
                <p className="text-xs">{slides[current].category}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-10 z-[200] left-0 w-full flex items-center justify-center">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`h-5 md:h-10 mx-2 duration-300 relative rounded-full cursor-pointer ${
                i === current
                  ? "bg-white md:w-20 w-10"
                  : "bg-gray-500 md:w-10 w-5"
              }`}
              onClick={() => handleClick(i)}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute top-52 right-52 rotate-12 backdrop-blur-sm animate max-w-lg w-full p-4 bg-white rounded-md  bg-opacity-40  items-center justify-center">
          <span className="text-2xl font-bold text-green-700">Valtech</span> :
          Votre partenaire de confiance. Transformez vos visions en réalité avec
          nos solutions innovantes d&apos;aménagement urbain et sportif,
          d&apos;irrigation agricole, d&apos;assainissement, de traitement des
          eaux et de géosynthétiques. Ensemble, bâtissons un avenir durable.
        </div>
      </div>
    </div>
  );
}

export default Herov;
