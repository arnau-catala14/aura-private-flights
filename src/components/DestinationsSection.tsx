import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import destinationsBg from "@/assets/destinations-bg.jpg";

const destinations = [
  { city: "Monaco", country: "France" },
  { city: "Dubai", country: "UAE" },
  { city: "New York", country: "USA" },
  { city: "Geneva", country: "Switzerland" },
];

const DestinationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="destinations"
      ref={ref}
      className="relative overflow-hidden py-32 md:py-48"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={destinationsBg}
          alt="City skyline"
          className="h-[120%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/75" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-16">
        <motion.p
          className="mb-3 font-sans text-xs tracking-luxury text-gold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          DESTINATIONS
        </motion.p>
        <motion.h2
          className="mb-16 font-display text-3xl font-light text-cream md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Exclusive Routes
        </motion.h2>

        <div className="space-y-0">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.city}
              className="group flex items-baseline justify-between border-t border-cream/10 py-6 transition-colors duration-300 hover:border-gold/30"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            >
              <h3 className="font-display text-3xl font-light text-cream transition-colors duration-300 group-hover:text-gold md:text-5xl">
                {dest.city}
              </h3>
              <span className="font-sans text-xs tracking-luxury text-cream/40">
                {dest.country.toUpperCase()}
              </span>
            </motion.div>
          ))}
          <div className="border-t border-cream/10" />
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
