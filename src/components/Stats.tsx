"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Home, Map, TreePine, Sun } from "lucide-react";

const stats = [
  {
    icon: <Home className="w-8 h-8 text-[var(--primary)]" />,
    value: "400m²",
    label: "Terrenos a partir de",
  },
  {
    icon: <Map className="w-8 h-8 text-[var(--primary)]" />,
    value: "5min",
    label: "Da praia",
  },
  {
    icon: <TreePine className="w-8 h-8 text-[var(--primary)]" />,
    value: "32mil m²",
    label: "Área verde",
  },
  {
    icon: <Sun className="w-8 h-8 text-[var(--primary)]" />,
    value: "100%",
    label: "Infraestrutura",
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <motion.div 
        className="container-custom"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={fadeInUp}
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

