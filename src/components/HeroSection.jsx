import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

export default function HeroSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="relative h-screen flex items-center justify-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h1 className="text-6xl font-bold text-farm-green dark:text-farm-yellow mb-8">
          Ferme El Hjouji
        </h1>
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg"
              data-image-placeholder={`hero-${item}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
