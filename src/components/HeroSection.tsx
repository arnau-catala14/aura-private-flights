import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-jet.jpg";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const headlineX = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} className="relative h-[120vh] w-full overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
        <img
          src={heroImage}
          alt="Luxury private jet on runway at dusk"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
      </motion.div>

      {/* Navigation */}
      <motion.nav
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6 md:px-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span className="font-display text-2xl font-light tracking-luxury text-cream">
          AURA
        </span>
        <div className="hidden gap-8 md:flex">
          {["Fleet", "Experience", "Destinations", "Membership"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-sans text-xs font-light tracking-luxury text-cream/70 transition-colors duration-300 hover:text-cream"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="border border-gold/40 px-6 py-2 font-sans text-xs tracking-luxury text-cream transition-all duration-300 hover:bg-gold/10"
        >
          INQUIRE
        </a>
      </motion.nav>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex h-screen flex-col items-center justify-center text-center"
        style={{ y: textY, opacity }}
      >
        <motion.p
          className="mb-6 font-sans text-xs font-light tracking-wide-luxury text-gold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          PRIVATE AVIATION
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-6xl font-light leading-[0.9] text-cream sm:text-8xl md:text-9xl lg:text-[10rem]"
            style={{ x: headlineX }}
            initial={{ y: "120%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.6 }}
          >
            BEYOND
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-6xl font-light leading-[0.9] text-cream sm:text-8xl md:text-9xl lg:text-[10rem]"
            initial={{ y: "120%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.75 }}
          >
            FIRST CLASS
          </motion.h1>
        </div>

        <motion.p
          className="mt-8 max-w-lg font-sans text-sm font-light tracking-wider text-cream/50 md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          The world is yours, on your schedule. Redefining the art of private travel 
          for those who demand nothing less than extraordinary.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <span className="font-sans text-[10px] tracking-luxury text-cream/40">
            SCROLL
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-gold/60 to-transparent animate-scroll-indicator" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
