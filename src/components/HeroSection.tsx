import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-jet.jpg";
import { luxuryEase } from "@/lib/animations";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Fleet", href: "#fleet" },
  { label: "Membership", href: "#membership" },
  { label: "Destinations", href: "#destinations" },
];

const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const chars = text.split("");
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex justify-center"
        initial={{ y: "120%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.2, ease: luxuryEase, delay }}
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            className="font-display text-6xl font-light leading-[0.9] text-cream sm:text-8xl md:text-9xl lg:text-[10rem]"
            initial={{ opacity: 0, rotateZ: 8 }}
            animate={{ opacity: 1, rotateZ: 0 }}
            transition={{ duration: 0.6, delay: delay + 0.03 * i, ease: luxuryEase }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0.85]);

  return (
    <section ref={ref} className="relative h-[120vh] w-full overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
        <img
          src={heroImage}
          alt="Luxury private jet on runway at dusk"
          className="h-full w-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-charcoal"
          style={{ opacity: overlayOpacity }}
        />
      </motion.div>

      {/* Animated horizontal lines */}
      <motion.div
        className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 1.8, ease: luxuryEase }}
      />
      <motion.div
        className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 2.2, ease: luxuryEase }}
      />

      {/* Navigation */}
      <motion.nav
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6 md:px-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: luxuryEase }}
      >
        <motion.span
          className="font-display text-2xl font-light tracking-luxury text-cream"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          AURA
        </motion.span>
        <div className="hidden gap-8 md:flex">
          {navItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="font-sans text-xs font-light tracking-luxury text-cream/70 transition-colors duration-300 hover:text-cream"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: luxuryEase }}
            >
              {item.label.toUpperCase()}
            </motion.a>
          ))}
        </div>
        <motion.a
          href="#contact"
          className="border border-gold/40 px-6 py-2 font-sans text-xs tracking-luxury text-cream transition-all duration-300 hover:bg-gold/10"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: luxuryEase }}
          whileHover={{ scale: 1.05, borderColor: "hsl(37, 35%, 60%)" }}
          whileTap={{ scale: 0.97 }}
        >
          INQUIRE
        </motion.a>
      </motion.nav>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex h-screen flex-col items-center justify-center text-center"
        style={{ y: textY, opacity }}
      >
        <motion.p
          className="mb-6 font-sans text-xs font-light tracking-wide-luxury text-gold"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.8, ease: luxuryEase }}
        >
          PRIVATE AVIATION
        </motion.p>

        <div>
          <AnimatedText text="BEYOND" delay={0.6} />
          <AnimatedText text="FIRST CLASS" delay={0.85} />
        </div>

        <motion.p
          className="mt-8 max-w-lg font-sans text-sm font-light tracking-wider text-cream/70 md:text-base"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.6, ease: luxuryEase }}
        >
          The world is yours, on your schedule. Redefining the art of private travel 
          for those who demand nothing less than extraordinary.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.span
            className="font-sans text-[10px] tracking-luxury text-cream/60"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            SCROLL
          </motion.span>
          <motion.div
            className="h-12 w-px bg-gradient-to-b from-gold/60 to-transparent"
            animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
