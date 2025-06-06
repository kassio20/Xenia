"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Home, Map, TreePine, Sun } from "lucide-react";

const stats = [
  {
    icon: <Home className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
    value: "Lotes amplos de até 600m²",
    label: "Ideais para construir, investir ou ter seu refúgio na praia.",
  },
  {
    icon: <Map className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
    value: "Lotes a partir de 85 mil",
    label: "Facilidade para começar agora!",
  },
  {
    icon: <TreePine className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
    value: "Financiamento próprio facilitado",
    label: "Sem consulta ao SPC/Serasa",
  },
  {
    icon: <Sun className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
    value: "Pronto para construir e valorizar",
    label: "Imóvel com escritura",
  },
];

export default function Stats() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-bg-sand">
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
              className="text-center p-6 bg-white shadow-xl rounded-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
              variants={fadeInUp}
            >
              <div className="flex justify-center mb-2 md:mb-4">{stat.icon}</div>
              <div className="text-sm sm:text-lg md:text-xl font-bold text-text-dark mb-1 md:mb-2">{stat.value}</div>
              <div className="text-xs sm:text-xs md:text-sm text-gray-600 px-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

