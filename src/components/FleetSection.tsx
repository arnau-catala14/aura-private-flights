import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import jetLight from "@/assets/jet-light.jpg";
import jetMid from "@/assets/jet-mid.jpg";
import jetHeavy from "@/assets/jet-heavy.jpg";
import TextReveal from "@/components/TextReveal";
import { luxuryEase } from "@/lib/animations";

const jets = [
  {
    name: "Citation CJ4",
    category: "LIGHT JET",
    image: jetLight,
    speed: "480 kts",
    range: "2,165 nm",
    passengers: "7-9",
    luggage: "77 cu ft",
    description:
      "The agile workhorse of our fleet. Perfect for shorter continental hops, the CJ4 delivers remarkable speed and efficiency. Its stand-up cabin and flat-floor design belie its light-jet classification, offering a level of comfort that surprises even the most seasoned travelers.",
  },
  {
    name: "Challenger 350",
    category: "SUPER MID-SIZE",
    image: jetMid,
    speed: "528 kts",
    range: "3,200 nm",
    passengers: "8-10",
    luggage: "106 cu ft",
    description:
      "The gold standard of midsize aviation. The Challenger 350 bridges the gap between range and luxury with its wide-body cabin, offering coast-to-coast US travel with ease. The flat floor and 6-foot headroom make it a true office — or bedroom — in the sky.",
  },
  {
    name: "Global 7500",
    category: "ULTRA LONG RANGE",
    image: jetHeavy,
    speed: "590 kts",
    range: "7,700 nm",
    passengers: "14-19",
    luggage: "195 cu ft",
    description:
      "The flagship. The Global 7500 is not merely an aircraft — it is a statement of intent. With four distinct living spaces, a full-size kitchen, and the smoothest ride in aviation courtesy of its wing design, this is where boardrooms meet bedrooms at Mach 0.925.",
  },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
    filter: "blur(10px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: luxuryEase },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.95,
    filter: "blur(10px)",
    transition: { duration: 0.5, ease: luxuryEase },
  }),
};

const FleetSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [[activeIndex, direction], setActive] = useState([0, 0]);
  const jet = jets[activeIndex];

  const next = () => setActive([(activeIndex + 1) % jets.length, 1]);
  const prev = () => setActive([(activeIndex - 1 + jets.length) % jets.length, -1]);

  return (
    <section id="fleet" ref={ref} className="bg-charcoal py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <motion.p
              className="mb-3 font-sans text-xs tracking-luxury text-gold"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: luxuryEase }}
            >
              THE FLEET
            </motion.p>
            <TextReveal className="font-display text-4xl font-light text-cream md:text-6xl lg:text-7xl">
              Select Your Aircraft
            </TextReveal>
          </div>
          <div className="hidden gap-3 md:flex">
            {[prev, next].map((fn, i) => (
              <motion.button
                key={i}
                onClick={fn}
                className="flex h-12 w-12 items-center justify-center border border-cream/20 text-cream/60 transition-all duration-300 hover:border-gold hover:text-gold"
                whileHover={{ scale: 1.1, rotate: i === 0 ? -5 : 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {i === 0 ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Counter with animated number */}
        <motion.p
          className="mb-12 font-sans text-sm text-cream/30"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <motion.span
            key={activeIndex}
            className="inline-block text-gold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: luxuryEase }}
          >
            {String(activeIndex + 1).padStart(2, "0")}
          </motion.span>
          {" / "}
          {String(jets.length).padStart(2, "0")}
        </motion.p>

        {/* Slider with directional animation */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeIndex}
            className="flex flex-col gap-0 md:flex-row"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {/* Image */}
            <div className="w-full overflow-hidden md:w-3/5">
              <motion.img
                src={jet.image}
                alt={jet.name}
                className="aspect-[16/10] w-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.4, ease: luxuryEase }}
              />
            </div>

            {/* Info with staggered children */}
            <motion.div
              className="flex w-full flex-col justify-between border border-cream/10 border-l-0 p-8 md:w-2/5 md:p-12"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
              }}
            >
              <div>
                <motion.p
                  className="font-sans text-[10px] tracking-luxury text-gold"
                  variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                >
                  {jet.category}
                </motion.p>
                <motion.h3
                  className="mt-3 font-display text-3xl font-light text-cream md:text-4xl"
                  variants={{ hidden: { opacity: 0, y: 25, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }}
                >
                  {jet.name}
                </motion.h3>
                <motion.p
                  className="mt-6 font-sans text-xs font-light leading-[1.8] tracking-wider text-cream/50"
                  variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                >
                  {jet.description}
                </motion.p>
              </div>

              <div>
                <motion.div
                  className="my-6 h-px w-full bg-cream/10"
                  variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
                  style={{ originX: 0 }}
                />
                <motion.div
                  className="grid grid-cols-2 gap-6 md:grid-cols-4"
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
                >
                  {[
                    { label: "SPEED", value: jet.speed },
                    { label: "RANGE", value: jet.range },
                    { label: "PASSENGERS", value: jet.passengers },
                    { label: "LUGGAGE", value: jet.luggage },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: luxuryEase } },
                      }}
                    >
                      <p className="font-sans text-[9px] tracking-luxury text-cream/30">
                        {stat.label}
                      </p>
                      <p className="mt-1 font-sans text-sm font-light text-cream/80">
                        {stat.value}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile nav */}
        <div className="mt-6 flex justify-center gap-3 md:hidden">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center border border-cream/20 text-cream/60"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center border border-cream/20 text-cream/60"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
