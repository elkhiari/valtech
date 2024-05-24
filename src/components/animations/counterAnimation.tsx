"use client";

import {
  KeyframeOptions,
  animate,
  useInView,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import { useRef } from "react";
const isBrowser = () => typeof window !== "undefined";

type AnimatedCounterProps = {
  from: number;
  to: number;
  animationOptions?: KeyframeOptions;
};

const AnimatedCounter = ({
  from,
  to,
  animationOptions,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    // Set initial value
    element.textContent = String(from);

    // Ensure window is defined (code runs only on the client side)
    if (isBrowser()) {
      // If reduced motion is enabled in system's preferences
      if (window.matchMedia("(prefers-reduced-motion)").matches) {
        element.textContent = String(to);
        return;
      }

      const controls = animate(from, to, {
        duration: 1,
        ease: "easeOut",
        ...animationOptions,
        onUpdate(value) {
          element.textContent = value.toFixed(0) + (value === to ? "+" : "");
        },
      });

      // Cancel on unmount
      return () => {
        controls.stop();
      };
    }
  }, [ref, inView, from, to]);

  return <span ref={ref} />;
};

export default AnimatedCounter;
