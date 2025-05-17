"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Home, Map, TreePine, Sun } from "lucide-react";

const stats = [
  {
    icon: <Home className="w-6 h-6 md:w-8 md:h-8 text-[#0f8a7d]" />,
    value: "Lotes a partir de 150m²",
    label: "Ideais para construir, investir ou ter seu refúgio na praia.",
  },
  {
    icon: <Map className="w-6 h-6 md:w-8 md:h-8 text-[#0f8a7d]" />,
    value: "Entrada a partir de R$ 7 mil",
    label: "Facilidade para começar agora!",
  },
  {
    icon: <TreePine className="w-6 h-6 md:w-8 md:h-8 text-[#0f8a7d]" />,
    value: "32mil m²",
    label: "Área verde",
  },
  {
    icon: <Sun className="w-6 h-6 md:w-8 md:h-8 text-[#0f8a7d]" />,
    value: "100%",
    label: "Infraestrutura",
  },
];

export default function Stats() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-800">
      <motion.div 
        className="container-custom"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-3 sm:p-4 bg-gray-700 shadow-sm rounded-lg border border-gray-600"
              variants={fadeInUp}
            >
              <div className="flex justify-center mb-2 md:mb-4">{stat.icon}</div>
              <div className="text-sm sm:text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
              <div className="text-xs sm:text-xs md:text-sm text-gray-300 px-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

