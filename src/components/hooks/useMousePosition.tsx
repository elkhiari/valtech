"use client";
import { useState, useEffect } from "react";

// Define the type for the mouse position
interface MousePosition {
  x: number | null;
  y: number | null;
}

const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: null,
    y: null,
  });

  const updateMousePosition = (e: MouseEvent): void => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Check if window is defined to ensure the code runs only on the client side
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", updateMousePosition);

      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }
  }, []);

  return mousePosition;
};

export default useMousePosition;
