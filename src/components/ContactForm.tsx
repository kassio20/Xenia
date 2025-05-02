"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, Mail, ArrowRight, X, Instagram } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "Terreno",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
    <section id="contato" className="relative">
      <div className="container-custom py-12 sm:py-16 md:py-20">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden mx-4 sm:mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact information */}
            <div className="bg-[#0f8a7d] p-6 sm:p-8 md:p-10 text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">Fale com a gente</h2>
              <p className="mb-8 text-sm sm:text-base">
                Estamos prontos para ajudar você a encontrar o terreno ou casa ideal em Prado. Entre em contato conosco!
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#086b60] p-2 rounded-full mt-1">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Telefone</p>
                    <a href={`tel:${CONTACT_INFO.phoneLink}`} className="text-white hover:underline text-sm sm:text-base">
                      {CONTACT_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#086b60] p-2 rounded-full mt-1">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Email</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-white hover:underline text-sm sm:text-base">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#086b60] p-2 rounded-full mt-1">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Instagram</p>
                    <a 
                      href={CONTACT_INFO.instagram}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:underline text-sm sm:text-base"
                    >
                      @imoveisestruturar
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="p-6 sm:p-8 md:p-10 bg-gray-800 text-white">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Solicitar informações</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f8a7d] bg-gray-700 text-white"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f8a7d] bg-gray-700 text-white"
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f8a7d] bg-gray-700 text-white"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-1">
                      Interesse
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f8a7d] bg-gray-700 text-white"
                      required
                    >
                      <option value="Terreno">Terreno</option>
                      <option value="Casa">Casa Pronta</option>
                      <option value="Investimento">Investimento</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-3 py-2 sm:py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f8a7d] bg-gray-700 text-white"
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="mt-6 w-full bg-[#0f8a7d] hover:bg-[#086b60] text-white py-2 sm:py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <span>Enviar mensagem</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
