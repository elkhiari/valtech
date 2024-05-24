"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const FadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
    filter: "blur(10px)",
    scale: 0.6,
  },
  animation: ({ x, y }: { x: number; y: number }) => ({
    opacity: 1,
    y: y,
    x: x,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: 0.3 * y * 0.01,
    },
  }),
};

function FromBottom({
  children,
  className,
  id,
  hover,
  y = 0,
  x = 0,
  index,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  hover?: any;
  y?: number;
  x?: number;
  index?: number;
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

export default FromBottom;
