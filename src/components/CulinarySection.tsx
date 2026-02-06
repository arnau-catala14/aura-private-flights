import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import diningImage from "@/assets/dining.jpg";
import TextReveal from "@/components/TextReveal";

const CulinarySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.05]);

  return (
    <section ref={ref} className="bg-background">
      <div className="flex min-h-screen flex-col md:flex-row">
        {/* Image half with parallax */}
        <div className="relative h-[60vh] w-full overflow-hidden md:h-auto md:w-1/2">
          <motion.img
            src={diningImage}
            alt="Gourmet dining at altitude"
            className="absolute inset-0 h-[120%] w-full object-cover"
            style={{ y: imgY, scale: imgScale }}
          />
          <div className="absolute inset-0 bg-charcoal/20" />
        </div>

        {/* Text half */}
        <div className="flex w-full flex-col justify-center px-8 py-20 md:w-1/2 md:px-16 lg:px-24">
          <motion.p
            className="mb-4 font-sans text-xs tracking-luxury text-gold"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            GASTRONOMY
          </motion.p>
          <TextReveal className="font-display text-4xl font-light leading-tight text-foreground md:text-5xl lg:text-6xl">
            Culinary Altitude
          </TextReveal>
          <motion.div
            className="my-8 h-px w-20 bg-gold/40"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="max-w-lg font-sans text-sm font-light leading-[1.9] tracking-wider text-muted-foreground md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Dining at 40,000 feet requires a scientific approach to flavor. Our sommelier-curated 
            wine list and farm-to-sky menu ensure your palate travels as well as you do. Every ingredient 
            is sourced within 48 hours of your departure, and our partnership with three Michelin-starred 
            Chef Laurent Dupont guarantees a dining experience that defies altitude.
          </motion.p>
          <motion.p
            className="mt-6 max-w-lg font-sans text-sm font-light leading-[1.9] tracking-wider text-muted-foreground md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            At lower cabin pressures, taste buds lose up to 30% of their sensitivity to sweet and salty 
            flavors. Our chefs compensate with umami-rich compositions, aromatic herbs, and perfectly 
            balanced acidity — so every bite tastes precisely as intended, whether you're cruising over 
            the Atlantic or descending into Monaco.
          </motion.p>
          <motion.p
            className="mt-6 max-w-lg font-sans text-sm font-light leading-[1.9] tracking-wider text-muted-foreground md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            From hand-rolled truffle pasta to dry-aged Kobe beef carpaccio, accompanied by a 
            2015 Château Margaux — this is dining without compromise, without turbulence, 
            without equal.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CulinarySection;
