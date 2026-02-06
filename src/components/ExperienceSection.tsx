import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import comfortImage from "@/assets/comfort.jpg";
import diningImage from "@/assets/dining.jpg";

interface ExperienceBlockProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

const ExperienceBlock = ({ title, subtitle, description, image, imageAlt, reverse }: ExperienceBlockProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`flex flex-col gap-8 md:gap-16 ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center`}>
      {/* Image with reveal mask */}
      <motion.div
        className="w-full overflow-hidden md:w-1/2"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.img
          src={image}
          alt={imageAlt}
          className="aspect-[4/5] w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>

      {/* Text */}
      <div className="w-full md:w-1/2 md:px-12">
        <motion.p
          className="mb-3 font-sans text-xs tracking-luxury text-gold"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
        <motion.h2
          className="font-display text-3xl font-light leading-tight text-foreground md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {title}
        </motion.h2>
        <motion.div
          className="my-6 h-px w-16 bg-gold/40"
          initial={{ width: 0 }}
          animate={isInView ? { width: 64 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
        <motion.p
          className="font-sans text-sm font-light leading-relaxed tracking-wider text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-background px-6 py-24 md:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl space-y-24 lg:space-y-32">
        <ExperienceBlock
          subtitle="THE EXPERIENCE"
          title="Curated Comfort"
          description="Sink into hand-stitched Italian leather, enveloped by the silence of precision engineering. Every surface, every texture, every detail has been considered — so you can simply arrive, and be."
          image={comfortImage}
          imageAlt="Luxury leather seating in private jet cabin"
        />
        <ExperienceBlock
          subtitle="IN-FLIGHT DINING"
          title="Michelin Star Dining"
          description="Our partnerships with world-renowned chefs ensure every journey is a culinary voyage. From Dom Pérignon to beluga caviar, your palate is our priority — 40,000 feet above the ordinary."
          image={diningImage}
          imageAlt="Gourmet dining aboard private jet"
          reverse
        />
      </div>
    </section>
  );
};

export default ExperienceSection;
