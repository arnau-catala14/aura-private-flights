import { useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";

export const useKineticScroll = (range: number = 100) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-range, range]);
  const smoothX = useSpring(x, { stiffness: 100, damping: 30 });
  return { ref, x: smoothX, scrollYProgress };
};

export const useParallax = (distance: number = 100) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  return { ref, y, scrollYProgress };
};

export const useMaskReveal = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.4"],
  });
  return { ref, scrollYProgress };
};
