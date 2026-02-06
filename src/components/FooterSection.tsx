import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer id="contact" ref={ref} className="bg-charcoal px-6 py-24 md:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* CTA */}
        <div className="mb-24 text-center">
          <motion.p
            className="mb-3 font-sans text-xs tracking-luxury text-gold"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            BEGIN YOUR JOURNEY
          </motion.p>
          <motion.h2
            className="mb-8 font-display text-3xl font-light text-cream md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Request a Quote
          </motion.h2>
          <motion.a
            href="#"
            className="inline-block border border-gold/40 px-12 py-4 font-sans text-xs tracking-luxury text-cream transition-all duration-500 hover:border-gold hover:bg-gold/10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            INQUIRE NOW
          </motion.a>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-cream/10 pt-8 md:flex-row">
          <span className="font-display text-lg tracking-luxury text-cream/60">
            AURA
          </span>
          <div className="flex gap-8">
            {["Fleet", "Membership", "About"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-sans text-xs tracking-luxury text-cream/40 transition-colors duration-300 hover:text-cream/70"
              >
                {link.toUpperCase()}
              </a>
            ))}
          </div>
          <p className="font-sans text-[10px] tracking-wider text-cream/30">
            © 2026 AURA AVIATION
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
