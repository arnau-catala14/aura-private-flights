import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import comfortImage from "@/assets/comfort.jpg";
import diningImage from "@/assets/dining.jpg";
import TextReveal from "@/components/TextReveal";

const ExperienceSection = () => {
  const stickyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end end"],
  });

  // First panel visible 0-50%, second panel visible 50-100%
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.05]);
  const panel1Opacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);
  const panel2Opacity = useTransform(scrollYProgress, [0.4, 0.5, 1], [0, 1, 1]);
  const panel1Y = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "-20%"]);
  const panel2Y = useTransform(scrollYProgress, [0.4, 0.6], ["20%", "0%"]);

  return (
    <section id="experience">
      <div ref={stickyRef} className="relative h-[200vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="flex h-full flex-col md:flex-row">
            {/* Text side */}
            <div className="relative flex w-full items-center md:w-1/2">
              {/* Panel 1: Curated Comfort */}
              <motion.div
                style={{ opacity: panel1Opacity, y: panel1Y }}
                className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24"
              >
                <div>
                  <p className="mb-4 font-sans text-xs tracking-luxury text-gold">THE EXPERIENCE</p>
                  <TextReveal className="font-display text-4xl font-light leading-tight text-foreground md:text-5xl lg:text-6xl">
                    Curated Comfort
                  </TextReveal>
                  <motion.div className="my-6 h-px w-20 bg-gold/40" />
                  <p className="max-w-md font-sans text-sm font-light leading-[1.8] tracking-wider text-muted-foreground md:text-base">
                    Sink into hand-stitched Italian leather, enveloped by the silence of precision
                    engineering. Every surface, every texture, every detail has been meticulously
                    considered — from the matte-finish walnut veneer consoles to the temperature-regulated
                    cabin that maintains your preferred climate at any altitude.
                  </p>
                  <p className="mt-4 max-w-md font-sans text-sm font-light leading-[1.8] tracking-wider text-muted-foreground md:text-base">
                    Our cabins are sanctuaries of stillness. Noise-cancelling architecture reduces external
                    sound to a whisper, allowing you to conduct business, rest, or simply exist in peace.
                    The ambient lighting adjusts to circadian rhythms, easing jet lag before you even land.
                  </p>
                </div>
              </motion.div>

              {/* Panel 2: Michelin Star Dining */}
              <motion.div
                style={{ opacity: panel2Opacity, y: panel2Y }}
                className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24"
              >
                <div>
                  <p className="mb-4 font-sans text-xs tracking-luxury text-gold">IN-FLIGHT DINING</p>
                  <TextReveal className="font-display text-4xl font-light leading-tight text-foreground md:text-5xl lg:text-6xl" delay={0.1}>
                    Michelin Star Dining
                  </TextReveal>
                  <motion.div className="my-6 h-px w-20 bg-gold/40" />
                  <p className="max-w-md font-sans text-sm font-light leading-[1.8] tracking-wider text-muted-foreground md:text-base">
                    Our partnerships with world-renowned chefs ensure every journey is a culinary voyage.
                    From Dom Pérignon to beluga caviar, your palate is our priority — 40,000 feet above the ordinary.
                    Each meal is crafted to order, using ingredients sourced from the finest purveyors across five continents.
                  </p>
                  <p className="mt-4 max-w-md font-sans text-sm font-light leading-[1.8] tracking-wider text-muted-foreground md:text-base">
                    Whether you desire a seven-course tasting menu or a perfectly simple wagyu steak,
                    our onboard galley transforms into a kitchen that rivals any Michelin-starred establishment on the ground.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Sticky image side */}
            <div className="hidden w-1/2 overflow-hidden md:block">
              <div className="relative h-full w-full">
                <motion.img
                  src={comfortImage}
                  alt="Luxury leather seating in private jet cabin"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ scale: imgScale, opacity: panel1Opacity }}
                />
                <motion.img
                  src={diningImage}
                  alt="Gourmet dining aboard private jet"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ scale: imgScale, opacity: panel2Opacity }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
