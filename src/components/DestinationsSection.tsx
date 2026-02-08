import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import destinationsBg from "@/assets/destinations-bg.jpg";
import { luxuryEase } from "@/lib/animations";

const destinations = [
  { city: "Monaco", country: "FRANCE", time: "2h 15m from London" },
  { city: "Dubai", country: "UAE", time: "6h 40m from London" },
  { city: "New York", country: "USA", time: "7h 30m from London" },
  { city: "Geneva", country: "SWITZERLAND", time: "1h 45m from London" },
  { city: "Mykonos", country: "GREECE", time: "3h 30m from London" },
  { city: "Aspen", country: "USA", time: "9h 15m from London" },
];

const AnimatedCity = ({ city, isInView, delay }: { city: string; isInView: boolean; delay: number }) => {
  const chars = city.split("");
  return (
    <span className="inline-flex overflow-hidden">
      {chars.map((c, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView ? { y: "0%", opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + i * 0.04, ease: luxuryEase }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
};

const DestinationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const headlineX = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [-1, 1]);

  return (
    <section id="destinations" ref={ref} className="relative overflow-hidden py-40 md:py-56">
      {/* Parallax Background with subtle rotation */}
      <motion.div className="absolute inset-0" style={{ y, rotate: bgRotate }}>
        <img src={destinationsBg} alt="Aerial cityscape" className="h-[140%] w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/80" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-16">
        <motion.p
          className="mb-3 font-sans text-xs tracking-luxury text-gold"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: luxuryEase }}
        >
          DESTINATIONS
        </motion.p>
        <div className="overflow-hidden">
          <motion.h2
            className="mb-6 font-display text-4xl font-light text-cream md:text-6xl lg:text-7xl"
            style={{ x: headlineX }}
            initial={{ y: "110%" }}
            animate={isInView ? { y: "0%" } : {}}
            transition={{ duration: 0.9, ease: luxuryEase }}
          >
            Exclusive Routes
          </motion.h2>
        </div>
        <motion.div
          className="mb-4 h-px w-24 bg-gold/30"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: luxuryEase }}
          style={{ originX: 0 }}
        />
        <motion.p
          className="mb-16 max-w-lg font-sans text-sm font-light leading-[1.8] tracking-wider text-cream/40"
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ delay: 0.4, ease: luxuryEase }}
        >
          From the sun-drenched Côte d'Azur to the alpine grandeur of the Swiss Alps, 
          our network of preferred FBOs and private terminals ensures your arrival is as 
          exceptional as your destination.
        </motion.p>

        <div className="space-y-0">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.city}
              className="group flex items-baseline justify-between border-t border-cream/10 py-6 transition-colors duration-300 hover:border-gold/30 md:py-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
            >
              <div className="flex items-baseline gap-4 md:gap-8">
                <h3 className="font-display text-3xl font-light text-cream transition-colors duration-300 group-hover:text-gold md:text-5xl lg:text-6xl">
                  <AnimatedCity city={dest.city} isInView={isInView} delay={0.5 + i * 0.1} />
                </h3>
                <motion.span
                  className="hidden font-sans text-xs tracking-luxury text-cream/20 md:inline"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1, ease: luxuryEase }}
                >
                  {dest.time}
                </motion.span>
              </div>
              <motion.span
                className="font-sans text-xs tracking-luxury text-cream/40"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1, ease: luxuryEase }}
              >
                {dest.country}
              </motion.span>
            </motion.div>
          ))}
          <motion.div
            className="border-t border-cream/10"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 1.2, ease: luxuryEase }}
            style={{ originX: 0 }}
          />
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
