import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import comfortImage from "@/assets/comfort.jpg";
import diningImage from "@/assets/dining.jpg";
import TextReveal from "@/components/TextReveal";

const ExperiencePanel = ({
  label,
  title,
  paragraphs,
  image,
  imageAlt,
  reverse = false,
  delay = 0,
}: {
  label: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <div
      ref={ref}
      className={`flex min-h-screen flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      {/* Text */}
      <div className="flex w-full items-center px-8 py-20 md:w-1/2 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay }}
        >
          <p className="mb-4 font-sans text-xs tracking-luxury text-gold">{label}</p>
          <TextReveal className="font-display text-4xl font-light leading-tight text-foreground md:text-5xl lg:text-6xl" delay={delay}>
            {title}
          </TextReveal>
          <motion.div className="my-6 h-px w-20 bg-gold/40" />
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className={`${i > 0 ? "mt-4" : ""} max-w-md font-sans text-sm font-light leading-[1.8] tracking-wider text-muted-foreground md:text-base`}
            >
              {p}
            </p>
          ))}
        </motion.div>
      </div>

      {/* Image */}
      <div ref={imgRef} className="relative min-h-[50vh] w-full overflow-hidden md:min-h-0 md:w-1/2">
        <motion.img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ scale: imgScale }}
        />
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-background">
      <ExperiencePanel
        label="THE EXPERIENCE"
        title="Curated Comfort"
        paragraphs={[
          "Sink into hand-stitched Italian leather, enveloped by the silence of precision engineering. Every surface, every texture, every detail has been meticulously considered — from the matte-finish walnut veneer consoles to the temperature-regulated cabin that maintains your preferred climate at any altitude.",
          "Our cabins are sanctuaries of stillness. Noise-cancelling architecture reduces external sound to a whisper, allowing you to conduct business, rest, or simply exist in peace. The ambient lighting adjusts to circadian rhythms, easing jet lag before you even land.",
        ]}
        image={comfortImage}
        imageAlt="Luxury leather seating in private jet cabin"
      />
      <ExperiencePanel
        label="IN-FLIGHT DINING"
        title="Michelin Star Dining"
        paragraphs={[
          "Our partnerships with world-renowned chefs ensure every journey is a culinary voyage. From Dom Pérignon to beluga caviar, your palate is our priority — 40,000 feet above the ordinary. Each meal is crafted to order, using ingredients sourced from the finest purveyors across five continents.",
          "Whether you desire a seven-course tasting menu or a perfectly simple wagyu steak, our onboard galley transforms into a kitchen that rivals any Michelin-starred establishment on the ground.",
        ]}
        image={diningImage}
        imageAlt="Gourmet dining aboard private jet"
        reverse
        delay={0.1}
      />
    </section>
  );
};

export default ExperienceSection;
