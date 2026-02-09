import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const TextReveal = ({ children, className = "", delay = 0, as = "h2" }: TextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Tag = motion[as];

  return (
    <div ref={ref} className="overflow-hidden pb-1">
      <Tag
        className={className}
        initial={{ y: "110%" }}
        animate={isInView ? { y: "0%" } : {}}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      >
        {children}
      </Tag>
    </div>
  );
};

export default TextReveal;
