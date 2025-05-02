"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, Mail, ArrowRight, X } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "Terreno",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `Olá, sou ${formData.name}. Estou interessado em ${formData.interest} em Prado. Por favor, entre em contato comigo para mais informações.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${CONTACT_INFO.whatsapp}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  if (!isOpen) {
    return (
      <motion.button
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#0f8a7d] text-white p-4 rounded-l-lg shadow-lg z-50"
      >
        <ArrowRight size={24} />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="floating-form md:w-80 lg:w-96"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-[#0f8a7d]">Fale Conosco</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>
      </div>

      <p className="text-gray-600 mb-6 text-sm">
        Preencha o formulário e entraremos em contato com você o mais breve possível.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <User size={16} />
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f8a7d] focus:border-transparent"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <Phone size={16} />
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Seu telefone"
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f8a7d] focus:border-transparent"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <Mail size={16} />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Seu email"
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f8a7d] focus:border-transparent"
            />
          </div>

          <div>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f8a7d] focus:border-transparent"
            >
              <option value="Terreno">Terreno</option>
              <option value="Casa">Casa Pronta</option>
              <option value="Investimento">Investimento</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full btn-primary py-3"
          >
            Falar pelo WhatsApp
          </button>
        </div>
      </form>

      <p className="text-xs text-gray-500 mt-4 text-center">
        Ao enviar, você concorda em receber comunicações da Imóveis Estruturar.
      </p>
    </motion.div>
  );
}

