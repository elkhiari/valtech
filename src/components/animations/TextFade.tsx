"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const FadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 0,
    x: 0,
    filter: "blur(10px)",
  },
  animation: ({ x, y }: { x: number; y: number }) => ({
    opacity: 1,
    y: y,
    x: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.3 * x,
      duration: 0.5,
    },
  }),
};

function Textfade({
  children,
  className,
  id,
  hover,
  y = 0,
  x = 0,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  hover?: any;
  y?: number;
  x?: number;
}) {
  return (
    <motion.div
      id={id}
      variants={FadeInAnimationVariant}
      initial="initial"
      whileInView="animation"
      custom={{ x, y }}
      whileHover={hover}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Textfade;
