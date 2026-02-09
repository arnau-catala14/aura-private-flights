import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import connectivityImage from "@/assets/connectivity.jpg";
import TextReveal from "@/components/TextReveal";
import { clipRevealRight, luxuryEase } from "@/lib/animations";

const ConnectivitySection = () => {
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
      <div className="flex min-h-screen flex-col md:flex-row-reverse">
        {/* Text half */}
        <div className="flex w-full flex-col justify-center px-8 py-20 md:w-1/2 md:px-16 lg:px-24">
          <motion.p
            className="mb-4 font-sans text-xs tracking-luxury text-gold"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: luxuryEase }}
          >
            CONNECTIVITY
          </motion.p>
          <TextReveal className="font-display text-4xl font-light leading-tight text-foreground md:text-5xl lg:text-6xl">
            The Command Suite
          </TextReveal>
          <motion.div
            className="my-8 h-px w-20 bg-gold/40"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: luxuryEase }}
            style={{ originX: 0 }}
          />
          {[
            "Your office doesn't end at the tarmac. Every Aura aircraft is equipped with Ka-band satellite connectivity delivering speeds that rival ground-based fibre. Run video conferences, stream markets in real-time, or close deals across time zones — all at Mach 0.85 with zero interruption.",
            "Integrated touchscreen panels control cabin lighting, temperature, entertainment, and window shading from a single interface. Our proprietary flight-tracking display lets you monitor your route, ETA, and weather conditions with the precision of a cockpit instrument panel.",
            "Because true luxury isn't disconnecting from the world — it's commanding it from wherever you choose to be.",
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

        {/* Image half with clip-path reveal */}
        <motion.div
          className="relative h-[60vh] w-full overflow-hidden md:h-auto md:w-1/2"
          variants={clipRevealRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.img
            src={connectivityImage}
            alt="Advanced in-flight connectivity and technology suite"
            className="absolute inset-0 h-[120%] w-full object-cover"
            style={{ y: imgY, scale: imgScale }}
          />
          <div className="absolute inset-0 bg-charcoal/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default ConnectivitySection;
