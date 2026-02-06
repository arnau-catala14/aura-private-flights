import { motion } from "framer-motion";
import heroImage from "@/assets/hero-jet.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <img
          src={heroImage}
          alt="Luxury private jet interior"
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
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <motion.p
          className="mb-4 font-sans text-xs font-light tracking-wide-luxury text-gold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          PRIVATE AVIATION
        </motion.p>
        <motion.h1
          className="font-display text-5xl font-light leading-tight text-cream md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          BEYOND FIRST CLASS
        </motion.h1>
        <motion.p
          className="mt-6 max-w-md font-sans text-sm font-light tracking-wider text-cream/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          The world is yours, on your schedule.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="font-sans text-[10px] tracking-luxury text-cream/40">
            SCROLL
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-gold/60 to-transparent animate-scroll-indicator" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
