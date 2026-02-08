import { Variants } from "framer-motion";

// Stagger container for child animations
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Fade up with slight rotation for elegance
export const fadeUpRotate: Variants = {
  hidden: { opacity: 0, y: 60, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

// Slide from left
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// Slide from right
export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// Scale reveal (for images)
export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 1.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
  },
};

// Clip path reveal from bottom
export const clipRevealUp: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

// Clip path reveal from left
export const clipRevealLeft: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

// Clip path reveal from right
export const clipRevealRight: Variants = {
  hidden: { clipPath: "inset(0 0 0 100%)" },
  visible: {
    clipPath: "inset(0 0 0 0%)",
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

// Line draw animation
export const lineDraw: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

// Blur in effect
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(20px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

// Character stagger for text
export const charStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03, delayChildren: 0.1 },
  },
};

export const charVariant: Variants = {
  hidden: { opacity: 0, y: 40, rotateZ: 5 },
  visible: {
    opacity: 1,
    y: 0,
    rotateZ: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Smooth luxury ease
export const luxuryEase = [0.22, 1, 0.36, 1] as const;
