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
        {/* Mobile background image */}
        <div className="block md:hidden">
          <Image 
            src="/images/praia1.jpeg"
            alt="Praia em Prado, Bahia"
            fill
            quality={90}
            priority
            style={{ 
              objectFit: 'cover', 
              objectPosition: 'center 25%',  // Better positioning for mobile
              transform: 'scale(1.1)'  // Slight zoom for better coverage
            }}
          />
        </div>
        
        {/* Desktop background image */}
        <div className="hidden md:block">
          <Image 
            src="/images/praia1.jpeg"
            alt="Praia em Prado, Bahia"
            fill
            quality={95}
            priority
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center center'
            }}
          />
        </div>
        
        {/* Dark overlay with improved contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>

      {/* Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/90 text-white shadow-md py-3 sm:py-4 backdrop-blur-sm"
            : "bg-transparent text-white py-5 sm:py-8"
        }`}
      >
        <div className="container-custom">
          {/* Desktop layout - Logo and navigation */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Logo - Now full width on mobile, aligned left on desktop */}
            <div className="w-full flex justify-center md:justify-start md:w-auto px-0 sm:px-0">
              <div className={`
                relative bg-transparent p-0 sm:p-2
                ${isScrolled 
                  ? "w-full sm:w-64 md:w-auto h-[100px] sm:h-auto aspect-auto sm:aspect-[3/2]" 
                  : "w-full sm:w-80 md:w-auto h-[120px] sm:h-auto aspect-auto sm:aspect-[3/2]"
                }
                flex items-center justify-center
                transition-all duration-300
                mx-auto md:mx-0
              `}>
                <Image
                  src="/logo-estruturar-new.jpeg"
                  alt="Imóveis Estruturar"
                  width={isScrolled ? 260 : 300}
                  height={isScrolled ? 100 : 120}
                  className="object-contain object-center max-h-full max-w-full"
                  priority
                  style={{ 
                    objectFit: 'contain', 
                    objectPosition: 'center center' 
                  }}
                />
              </div>
            </div>

            {/* Navigation and contact - Now in a separate div for proper alignment */}
            <div className="hidden md:flex md:items-center md:space-x-6 mt-4 md:mt-0">
              {/* Desktop navigation */}
              <nav className="flex gap-6 items-center">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className="nav-link text-white hover:text-[#f7b70f] transition-colors whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Contact button */}
              <a
                href={`tel:${CONTACT_INFO.phoneLink}`}
                className="flex items-center gap-2 text-white font-medium hover:text-[#f7b70f] transition-colors whitespace-nowrap"
              >
                <Phone size={18} /> {CONTACT_INFO.phoneFormatted}
              </a>
            </div>

            {/* Mobile menu button - Stays at the top right */}
            <button
              className="md:hidden absolute top-3 right-3 text-2xl z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/90 backdrop-blur-sm shadow-md py-4 z-50">
              <div className="container-custom flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white hover:text-[#f7b70f] transition-colors py-2 border-b border-gray-800 last:border-b-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href={`tel:${CONTACT_INFO.phoneLink}`}
                  className="flex items-center gap-2 text-[#f7b70f] font-medium py-2 mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone size={18} /> {CONTACT_INFO.phoneFormatted}
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 h-full flex items-center pt-44 sm:pt-48 md:pt-64">
        <div className="container-custom">
          <div className="max-w-2xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
            >
              {CONTACT_INFO.company.name}, 
              <span className="text-[#f7b70f] block sm:inline"> sua nova vida em Prado-BA</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100"
            >
              Terrenos com entrada a partir de R$15.990 e casas prontas para morar. Localização privilegiada próxima às melhores praias.
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

