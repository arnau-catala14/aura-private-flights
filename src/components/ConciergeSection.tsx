import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import comfortImage from "@/assets/comfort.jpg";
import heroImage from "@/assets/hero-jet.jpg";
import jetMid from "@/assets/jet-mid.jpg";
import destinationsBg from "@/assets/destinations-bg.jpg";
import TextReveal from "@/components/TextReveal";

const services = [
  {
    title: "Chauffeur Drive",
    subtitle: "GROUND TRANSFER",
    description:
      "A Rolls-Royce Phantom awaits you on the tarmac — no terminals, no waiting. Our chauffeurs are trained in executive protection and discretion, ensuring your transition from sky to ground is seamless, secure, and silent.",
    image: comfortImage,
  },
  {
    title: "Yacht Connections",
    subtitle: "SEA & SKY",
    description:
      "Step off the jet and onto the deck. Our direct-to-dock service coordinates your landing with your vessel's berth, whether it's a 40-meter Benetti in Antibes or a classic sailing yacht in the Aegean. No roads, no traffic, no delays.",
    image: heroImage,
  },
  {
    title: "Secure Logistics",
    subtitle: "PROTECTION",
    description:
      "When discretion is paramount. Armed close-protection officers, counter-surveillance, secure vehicle convoys, and advance teams. Our security division operates to diplomatic standards for clients who require — or simply prefer — absolute operational security.",
    image: jetMid,
  },
  {
    title: "Pet & Art Transport",
    subtitle: "SPECIALIST CARGO",
    description:
      "Whether it's a Basquiat or a Bernese Mountain Dog, we transport what matters most. Climate-controlled cargo holds, custom crating, veterinary standby, and insurance-backed art handling ensure your precious cargo arrives in perfect condition.",
    image: destinationsBg,
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-charcoal/50 transition-colors duration-500 group-hover:bg-charcoal/70" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <p className="mb-2 font-sans text-[10px] tracking-luxury text-gold">
            {service.subtitle}
          </p>
          <h3 className="font-display text-2xl font-light text-cream md:text-3xl">
            {service.title}
          </h3>
          <p className="mt-3 max-w-sm font-sans text-xs font-light leading-[1.8] tracking-wider text-cream/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
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
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          CONCIERGE
        </motion.p>
        <div className="overflow-hidden">
          <motion.h2
            className="mb-20 font-display text-4xl font-light text-cream md:text-6xl lg:text-7xl"
            style={{ x: headlineX }}
            initial={{ y: "110%" }}
            animate={isInView ? { y: "0%" } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Beyond the Flight
          </motion.h2>
        </div>

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
