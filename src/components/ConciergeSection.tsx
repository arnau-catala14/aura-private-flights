import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import chauffeurImage from "@/assets/chauffeur.jpg";
import yachtImage from "@/assets/yacht.jpg";
import securityImage from "@/assets/security.jpg";
import artTransportImage from "@/assets/art-transport.jpg";
import TextReveal from "@/components/TextReveal";
import { luxuryEase } from "@/lib/animations";

const services = [
  {
    title: "Chauffeur Drive",
    subtitle: "GROUND TRANSFER",
    description:
      "A Rolls-Royce Phantom awaits you on the tarmac — no terminals, no waiting. Our chauffeurs are trained in executive protection and discretion, ensuring your transition from sky to ground is seamless, secure, and silent.",
    image: chauffeurImage,
  },
  {
    title: "Yacht Connections",
    subtitle: "SEA & SKY",
    description:
      "Step off the jet and onto the deck. Our direct-to-dock service coordinates your landing with your vessel's berth, whether it's a 40-meter Benetti in Antibes or a classic sailing yacht in the Aegean. No roads, no traffic, no delays.",
    image: yachtImage,
  },
  {
    title: "Secure Logistics",
    subtitle: "PROTECTION",
    description:
      "When discretion is paramount. Armed close-protection officers, counter-surveillance, secure vehicle convoys, and advance teams. Our security division operates to diplomatic standards for clients who require — or simply prefer — absolute operational security.",
    image: securityImage,
  },
  {
    title: "Pet & Art Transport",
    subtitle: "SPECIALIST CARGO",
    description:
      "Whether it's a Basquiat or a Bernese Mountain Dog, we transport what matters most. Climate-controlled cargo holds, custom crating, veterinary standby, and insurance-backed art handling ensure your precious cargo arrives in perfect condition.",
    image: artTransportImage,
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  // Each card gets a unique entrance direction
  const directions = [
    { x: -60, y: 40, rotate: -3 },
    { x: 60, y: 40, rotate: 3 },
    { x: -60, y: 40, rotate: 2 },
    { x: 60, y: 40, rotate: -2 },
  ];
  const dir = directions[index];

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden"
      initial={{ opacity: 0, x: dir.x, y: dir.y, rotate: dir.rotate, filter: "blur(8px)" }}
      animate={isInView ? { opacity: 1, x: 0, y: 0, rotate: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.9, delay: index * 0.12, ease: luxuryEase }}
      whileHover={{ y: -8, transition: { duration: 0.4 } }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.8, ease: luxuryEase }}
        />
        <div className="absolute inset-0 bg-charcoal/50 transition-colors duration-500 group-hover:bg-charcoal/70" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <motion.p
            className="mb-2 font-sans text-[10px] tracking-luxury text-gold"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.12, ease: luxuryEase }}
          >
            {service.subtitle}
          </motion.p>
          <h3 className="font-display text-2xl font-light text-cream md:text-3xl">
            {service.title}
          </h3>
          <motion.div
            className="mt-2 h-px w-0 bg-gold/40 transition-all duration-700 group-hover:w-16"
          />
          <p className="mt-3 max-w-sm font-sans text-xs font-light leading-[1.8] tracking-wider text-cream/75 opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ConciergeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const headlineX = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="bg-charcoal px-6 py-32 md:px-16 md:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.p
          className="mb-3 font-sans text-xs tracking-luxury text-gold"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: luxuryEase }}
        >
          CONCIERGE
        </motion.p>
        <div className="overflow-hidden">
          <motion.h2
            className="mb-6 font-display text-4xl font-light text-cream md:text-6xl lg:text-7xl"
            style={{ x: headlineX }}
            initial={{ y: "110%" }}
            animate={isInView ? { y: "0%" } : {}}
            transition={{ duration: 0.9, ease: luxuryEase }}
          >
            Beyond the Flight
          </motion.h2>
        </div>
        <motion.div
          className="mb-20 h-px w-32 bg-gold/30"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.4, ease: luxuryEase }}
          style={{ originX: 0 }}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConciergeSection;
