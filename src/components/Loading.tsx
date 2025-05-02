"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm">
      <div className="relative w-20 h-20">
        <div className="absolute top-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
        <motion.div 
          className="absolute top-0 w-full h-full border-4 border-[var(--primary)] rounded-full border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>
      <div className="absolute mt-24 text-[var(--primary)] font-medium">
        Carregando...
      </div>
    </div>
  );
}
