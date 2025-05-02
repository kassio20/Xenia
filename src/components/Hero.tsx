"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import { CONTACT_INFO } from "@/constants/contact";
import CTAButton from "./CTAButton";

const navLinks = [
  { name: "Início", href: "#" },
  { name: "O Empreendimento", href: "#empreendimento" },
  { name: "Galeria", href: "#galeria" },
  { name: "Localização", href: "#localizacao" },
  { name: "Contato", href: "#contato" },
];

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Full-screen background with image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/praia1.jpeg"
          alt="Praia em Prado, Bahia"
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay to ensure text is readable */}
      </div>

      {/* Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/90 text-white shadow-md py-4 backdrop-blur-sm"  // Changed to dark theme
            : "bg-transparent text-white py-8"
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <div className="relative z-10">
            <div className={`
              relative ${isScrolled ? "bg-gray-800/50" : "bg-white/10"} backdrop-blur-sm rounded-lg p-4
              ${isScrolled ? "w-80 h-45" : "w-96 h-54"}  
              flex items-center justify-center
              transition-all duration-300
            `}>
              <Image
                src="/logo-estruturar.png"
                alt="Imóveis Estruturar"
                width={isScrolled ? 200 : 250}
                height={isScrolled ? 200 : 250}
                className="object-contain max-h-full"
                priority
              />
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="nav-link text-white hover:text-[#f7b70f] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact button */}
          <a
            href={`tel:${CONTACT_INFO.phoneLink}`}
            className="hidden md:flex items-center gap-2 text-white font-medium hover:text-[#f7b70f] transition-colors"
          >
            <Phone size={18} /> {CONTACT_INFO.phoneFormatted}
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/90 backdrop-blur-sm shadow-md py-4">
            <div className="container-custom flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-[#f7b70f] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={`tel:${CONTACT_INFO.phoneLink}`}
                className="flex items-center gap-2 text-[#f7b70f] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={18} /> {CONTACT_INFO.phoneFormatted}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero content */}
      <div className="relative z-10 h-full flex items-center pt-48 md:pt-64"> {/* Added significant top padding */}
        <div className="container-custom">
          <div className="max-w-2xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              {CONTACT_INFO.company.name}, sua nova vida em <span className="text-[#f7b70f]">Prado-BA</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-gray-100"
            >
              Terrenos a partir de R$15.990 e casas prontas para morar. Localização privilegiada próxima às melhores praias.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <CTAButton href="#contato" type="primary">
                Quero saber mais
              </CTAButton>
              <CTAButton 
                href="#galeria" 
                type="outline" 
                className="border-white text-white hover:bg-white hover:text-[#0f8a7d] px-8 py-4 text-lg font-semibold"
              >
                Ver imóveis
              </CTAButton>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

