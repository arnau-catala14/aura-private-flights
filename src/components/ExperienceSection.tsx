import { motion, useScroll, useTransform, useInView } from "framer-motion";
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
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.05]);
  const imgOpacity1 = useTransform(scrollYProgress, [0, 0.45, 0.55], [1, 1, 0]);
  const imgOpacity2 = useTransform(scrollYProgress, [0.45, 0.55, 1], [0, 1, 1]);

  return (
    <section id="experience">
      {/* Sticky scroll section */}
      <div ref={stickyRef} className="relative min-h-[250vh] bg-background">
        <div className="sticky top-0 flex h-screen flex-col md:flex-row">
          {/* Scrolling text left */}
          <div className="flex w-full flex-col justify-center px-8 py-16 md:w-1/2 md:px-16 lg:px-24">
            <motion.div style={{ opacity: imgOpacity1 }} className="absolute inset-0 md:relative md:inset-auto">
              <div className="relative z-10 md:z-auto">
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

            <motion.div style={{ opacity: imgOpacity2 }} className="absolute inset-0 flex flex-col justify-center px-8 md:relative md:inset-auto md:px-0">
              <div className="relative z-10 md:z-auto">
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

          {/* Sticky image right */}
          <div className="hidden w-1/2 overflow-hidden md:block">
            <div className="relative h-full w-full">
              <motion.img
                src={comfortImage}
                alt="Luxury leather seating in private jet cabin"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ scale: imgScale, opacity: imgOpacity1 }}
              />
              <motion.img
                src={diningImage}
                alt="Gourmet dining aboard private jet"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ scale: imgScale, opacity: imgOpacity2 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
