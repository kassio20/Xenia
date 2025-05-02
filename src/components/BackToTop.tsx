"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 bg-[#0f8a7d] hover:bg-[#086b60] text-white rounded-full p-2 sm:p-3 shadow-lg transition-colors"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={20} className="sm:w-5 sm:h-5" />
          <span className="sr-only">Voltar ao topo da página</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

