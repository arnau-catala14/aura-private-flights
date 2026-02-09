import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "@/components/MagneticButton";
import TextReveal from "@/components/TextReveal";
import { luxuryEase } from "@/lib/animations";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer id="contact" ref={ref} className="bg-charcoal px-6 py-32 md:px-16 lg:py-44">
      <div className="mx-auto max-w-7xl">
        {/* CTA */}
        <div className="mb-32 text-center">
          <motion.p
            className="mb-4 font-sans text-xs tracking-luxury text-gold"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, ease: luxuryEase }}
          >
            BEGIN YOUR JOURNEY
          </motion.p>
          <TextReveal className="font-display text-5xl font-light text-cream md:text-7xl lg:text-8xl">
            Request a Quote
          </TextReveal>
          <motion.div
            className="mx-auto mt-4 h-px w-20 bg-gold/30"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.5, ease: luxuryEase }}
          />
          <motion.p
            className="mx-auto mt-6 max-w-md font-sans text-sm font-light leading-[1.8] tracking-wider text-cream/40"
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ delay: 0.6, ease: luxuryEase }}
          >
            Whether it's a last-minute departure or a meticulously planned itinerary, 
            our team responds within 60 minutes. Your next flight begins with a single inquiry.
          </motion.p>
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7, ease: luxuryEase }}
          >
            <MagneticButton
              href="#"
              className="inline-block border border-gold/40 px-16 py-5 font-sans text-xs tracking-luxury text-cream transition-all duration-500 hover:border-gold hover:bg-gold/10"
            >
              INQUIRE NOW
            </MagneticButton>
          </motion.div>
        </div>

        {/* Footer Links */}
        <motion.div
          className="flex flex-col items-center justify-between gap-8 border-t border-cream/10 pt-8 md:flex-row"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: luxuryEase }}
        >
          <motion.span
            className="font-display text-lg tracking-luxury text-cream/60"
            whileHover={{ scale: 1.05, color: "hsl(37, 35%, 60%)" }}
          >
            AURA
          </motion.span>
          <div className="flex gap-8">
            {[
              { label: "Experience", href: "#experience" },
              { label: "Fleet", href: "#fleet" },
              { label: "Membership", href: "#membership" },
              { label: "Destinations", href: "#destinations" },
            ].map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="font-sans text-xs tracking-luxury text-cream/40 transition-colors duration-300 hover:text-cream/70"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.08, ease: luxuryEase }}
                whileHover={{ y: -2 }}
              >
                {link.label.toUpperCase()}
              </motion.a>
            ))}
          </div>
          <p className="font-sans text-[10px] tracking-wider text-cream/30">
            © 2026 AURA AVIATION
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
