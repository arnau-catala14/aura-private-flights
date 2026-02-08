import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import sanctuaryImage from "@/assets/sanctuary.jpg";
import TextReveal from "@/components/TextReveal";
import { clipRevealLeft, luxuryEase } from "@/lib/animations";

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
        {/* Image half with clip-path reveal */}
        <motion.div
          className="relative h-[60vh] w-full overflow-hidden md:h-auto md:w-1/2"
          variants={clipRevealLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.img
            src={sanctuaryImage}
            alt="Luxurious private jet cabin wellness sanctuary"
            className="absolute inset-0 h-[120%] w-full object-cover"
            style={{ y: imgY, scale: imgScale }}
          />
          <div className="absolute inset-0 bg-charcoal/20" />
        </motion.div>

        {/* Text half */}
        <div className="flex w-full flex-col justify-center px-8 py-20 md:w-1/2 md:px-16 lg:px-24">
          <motion.p
            className="mb-4 font-sans text-xs tracking-luxury text-gold"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: luxuryEase }}
          >
            WELLNESS
          </motion.p>
          <TextReveal className="font-display text-4xl font-light leading-tight text-foreground md:text-5xl lg:text-6xl">
            The Sanctuary
          </TextReveal>
          <motion.div
            className="my-8 h-px w-20 bg-gold/40"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: luxuryEase }}
            style={{ originX: 0 }}
          />
          {[
            "Your cabin is more than a seat — it's a cocoon engineered for restoration. Circadian lighting systems shift warmth and intensity to match your destination's timezone, resetting your body clock mid-flight. Bespoke aromatherapy diffusers fill the cabin with notes of sandalwood and bergamot, calibrated to reduce cortisol and ease the mind.",
            "Heated cashmere blankets, memory-foam daybeds, and a cabin pressure maintained at a lower altitude equivalent than any commercial aircraft — every physiological detail is addressed. Our onboard wellness concierge can arrange guided meditation sessions, acupressure treatments, or simply ensure absolute silence for uninterrupted rest.",
            "Land not just on time, but renewed. Our clients report arriving more rested than when they departed — because at Aura, the journey itself is the retreat.",
          ].map((text, i) => (
            <motion.p
              key={i}
              className={`${i > 0 ? "mt-6" : ""} max-w-lg font-sans text-sm font-light leading-[1.9] tracking-wider text-muted-foreground md:text-base`}
              initial={{ opacity: 0, y: 25, filter: "blur(5px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.2, ease: luxuryEase }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulinarySection;
