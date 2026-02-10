import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { luxuryEase } from "@/lib/animations";

const tiers = [
  {
    name: "Silver Access",
    tagline: "YOUR INTRODUCTION TO AURA",
    price: "Pay-As-You-Fly",
    features: [
      "No annual commitment",
      "Priority booking (72h notice)",
      "Standard catering package",
      "Dedicated booking agent",
      "Access to Light & Mid-Size fleet",
      "Complimentary Wi-Fi",
    ],
    description:
      "For the discerning traveler who values flexibility. Silver Access provides priority positioning in our booking queue with transparent, per-hour pricing and no long-term obligations.",
  },
  {
    name: "Gold Horizon",
    tagline: "THE CONNOISSEUR'S CHOICE",
    price: "From $185,000 /yr",
    featured: true,
    features: [
      "Guaranteed availability (24h notice)",
      "Fixed hourly rates, locked annually",
      "Michelin-star catering included",
      "Full fleet access incl. Global 7500",
      "Dedicated concierge team",
      "Complimentary empty-leg matching",
      "Airport lounge partnerships worldwide",
    ],
    description:
      "The gold standard. Guaranteed aircraft availability with just 24 hours' notice, fixed rates that protect you from market fluctuations, and a culinary experience that transforms every flight into a Michelin-starred occasion.",
  },
  {
    name: "Platinum Legacy",
    tagline: "WITHOUT COMPROMISE",
    price: "By Invitation",
    features: [
      "No blackout dates — ever",
      "Dedicated personal concierge (24/7)",
      "Complimentary helicopter transfers",
      "Empty-leg access across global network",
      "Priority aircraft positioning",
      "Art & pet specialist transport",
      "Diplomatic-grade security available",
      "Custom cabin configuration per flight",
    ],
    description:
      "For those who have transcended the concept of 'booking.' Platinum Legacy members simply state their intention, and the world reorganizes. No blackout dates, no limitations, no compromise.",
  },
];

const MembershipCard = ({
  tier,
  index,
}: {
  tier: typeof tiers[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden border transition-all duration-700 ${
        tier.featured
          ? "border-gold/40 bg-cream/[0.03]"
          : "border-cream/10 bg-cream/[0.02]"
      } backdrop-blur-sm hover:border-gold/60 hover:shadow-[0_0_60px_-20px_hsl(var(--gold)/0.15)]`}
      initial={{ opacity: 0, y: 80, rotateY: index === 0 ? 8 : index === 2 ? -8 : 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0, scale: 1 } : {}}
      transition={{ duration: 1, delay: index * 0.15, ease: luxuryEase }}
      whileHover={{ y: -10, transition: { duration: 0.4 } }}
      style={{ perspective: 1000 }}
    >
      {tier.featured && (
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5, ease: luxuryEase }}
        />
      )}
      <div className="p-8 md:p-10">
        <motion.p
          className="font-sans text-[10px] tracking-luxury text-gold"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: luxuryEase }}
        >
          {tier.tagline}
        </motion.p>
        <motion.h3
          className="mt-3 font-display text-2xl font-light text-cream md:text-3xl"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.4 + index * 0.15, ease: luxuryEase }}
        >
          {tier.name}
        </motion.h3>
        <motion.p
          className="mt-2 font-sans text-lg font-light text-cream/80"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
        >
          {tier.price}
        </motion.p>

        <motion.div
          className="my-6 h-px w-full bg-cream/10"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 + index * 0.15, ease: luxuryEase }}
          style={{ originX: 0 }}
        />

        <p className="mb-6 font-sans text-xs font-light leading-[1.8] tracking-wider text-cream/60">
          {tier.description}
        </p>

        <motion.ul
          className="space-y-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05, delayChildren: 0.6 + index * 0.15 } },
          }}
        >
          {tier.features.map((feature) => (
            <motion.li
              key={feature}
              className="flex items-start gap-3 font-sans text-xs font-light tracking-wider text-cream/75"
              variants={{
                hidden: { opacity: 0, x: -15 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: luxuryEase } },
              }}
            >
              <motion.span
                className="mt-1 h-1 w-1 flex-shrink-0 bg-gold"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1, transition: { duration: 0.3 } },
                }}
              />
              {feature}
            </motion.li>
          ))}
        </motion.ul>

        <motion.a
          href="#contact"
          className={`mt-8 block w-full border py-3 text-center font-sans text-xs tracking-luxury transition-all duration-500 ${
            tier.featured
              ? "border-gold bg-gold/10 text-cream hover:bg-gold/20"
              : "border-cream/20 text-cream/75 hover:border-gold/40 hover:text-cream"
          }`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {tier.featured ? "APPLY NOW" : "LEARN MORE"}
        </motion.a>
      </div>

      {/* Glassmorphism shine effect on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute -top-1/2 -left-1/2 h-[200%] w-[200%] rotate-12 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
};

const MembershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const headlineX = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="membership" ref={ref} className="bg-charcoal px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <motion.p
            className="mb-3 font-sans text-xs tracking-luxury text-gold"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, ease: luxuryEase }}
          >
            MEMBERSHIP
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              className="font-display text-4xl font-light text-cream md:text-6xl lg:text-7xl"
              style={{ x: headlineX }}
              initial={{ y: "110%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{ duration: 0.9, ease: luxuryEase }}
            >
              Aura Membership
            </motion.h2>
          </div>
          <motion.div
            className="mx-auto mt-4 h-px w-24 bg-gold/30"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: luxuryEase }}
          />
          <motion.p
            className="mx-auto mt-6 max-w-xl font-sans text-sm font-light leading-[1.8] tracking-wider text-cream/60"
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ delay: 0.5, ease: luxuryEase }}
          >
            Three tiers of access, each designed for a different relationship with the sky. 
            Every membership includes our white-glove onboarding, personal fleet briefing, 
            and a dedicated aviation advisor.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <MembershipCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
