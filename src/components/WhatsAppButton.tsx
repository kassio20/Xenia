"use client";

import { MessageCircle } from 'lucide-react';  // Changing to MessageCircle which is more reliable
import { motion } from "framer-motion";
import { CONTACT_INFO } from '@/constants/contact';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={CONTACT_INFO.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-lg"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", bounce: 0.5 }}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="sr-only">Abrir WhatsApp</span>
    </motion.a>
  );
}

