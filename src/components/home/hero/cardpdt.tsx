import FromBottom from "@/components/animations/Fade";
import React from "react";

function CardPdt({
  title,
  img,
  className,
  y,
  x,
  imgClassName,
  txt = false,
}: Readonly<{
  title: string;
  img: string;
  className?: string;
  y?: number;
  x?: number;
  imgClassName?: string;
  txt?: boolean;
}>) {
  return (
    <div className={"z-10 w-80 group h-80 *:duration-300 " + className}>
      <img
        className={
          "w-80 h-80  object-cover absolute -z-50 top-0 left-0 group-hover:blur-sm " +
          imgClassName
        }
        src={img}
        alt="valtech"
      />
      <div
        className={
          "w-full h-full flex flex-col justify-end p-2 object-contain group-hover:opacity-100 text-[0px] group-hover:text-xl opacity-0  bg-black/50"
        }
      >
        <div className="absolute w-full h-full top-0 left-0 ">
          <div className="w-full h-full flex items-center  justify-center text-white group-hover:text-white">
            <p
              className={
                txt ? " rotate-90 text-center" : "p-5 rotate-0 text-center"
              }
            >
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPdt;
