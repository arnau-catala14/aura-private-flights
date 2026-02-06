import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Car, Shield, Hotel } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Limousine Transfer",
    description: "Door-to-door luxury ground transportation, seamlessly coordinated with your flight schedule.",
  },
  {
    icon: Shield,
    title: "Security Detail",
    description: "Discreet, professional close protection services tailored to your itinerary and preferences.",
  },
  {
    icon: Hotel,
    title: "Hotel & Reservations",
    description: "Priority access to the world's most exclusive hotels, restaurants, and private venues.",
  },
];

const ConciergeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-background px-6 py-24 md:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.p
            className="mb-3 font-sans text-xs tracking-luxury text-gold"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            CONCIERGE
          </motion.p>
          <motion.h2
            className="font-display text-3xl font-light text-foreground md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Beyond the Flight
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group border border-border p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_hsl(var(--gold)/0.15)]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            >
              <service.icon
                className="mb-6 h-8 w-8 text-gold transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1}
              />
              <h3 className="mb-3 font-display text-xl font-light text-foreground">
                {service.title}
              </h3>
              <p className="font-sans text-xs font-light leading-relaxed tracking-wider text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConciergeSection;
