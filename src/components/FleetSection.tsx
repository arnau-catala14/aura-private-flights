import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import jetLight from "@/assets/jet-light.jpg";
import jetMid from "@/assets/jet-mid.jpg";
import jetHeavy from "@/assets/jet-heavy.jpg";

const jets = [
  {
    name: "Citation CJ4",
    category: "Light Jet",
    image: jetLight,
    speed: "480 kts",
    range: "2,165 nm",
    passengers: "7",
  },
  {
    name: "Challenger 350",
    category: "Mid-Size",
    image: jetMid,
    speed: "528 kts",
    range: "3,200 nm",
    passengers: "10",
  },
  {
    name: "Global 7500",
    category: "Heavy Jet",
    image: jetHeavy,
    speed: "590 kts",
    range: "7,700 nm",
    passengers: "19",
  },
];

const FleetSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="fleet" ref={ref} className="bg-charcoal px-6 py-24 md:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.p
          className="mb-3 font-sans text-xs tracking-luxury text-gold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          THE FLEET
        </motion.p>
        <motion.h2
          className="mb-16 font-display text-3xl font-light text-cream md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Select Your Aircraft
        </motion.h2>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {jets.map((jet, i) => (
            <motion.div
              key={jet.name}
              className="min-w-[280px] flex-shrink-0 border border-cream/10 md:min-w-0"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="overflow-hidden">
                <motion.img
                  src={jet.image}
                  alt={jet.name}
                  className="aspect-[4/5] w-full object-cover"
                  animate={{ scale: hoveredIndex === i ? 1.05 : 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className="p-6">
                <p className="font-sans text-[10px] tracking-luxury text-gold">
                  {jet.category.toUpperCase()}
                </p>
                <h3 className="mt-2 font-display text-xl font-light text-cream">
                  {jet.name}
                </h3>
                <div className="mt-4 h-px w-full bg-cream/10" />
                <div className="mt-4 grid grid-cols-3 gap-4">
                  {[
                    { label: "SPEED", value: jet.speed },
                    { label: "RANGE", value: jet.range },
                    { label: "PAX", value: jet.passengers },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-sans text-[9px] tracking-luxury text-cream/40">
                        {stat.label}
                      </p>
                      <p className="mt-1 font-sans text-xs font-light text-cream/80">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
