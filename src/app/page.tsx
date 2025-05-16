import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import ContactForm from "@/components/ContactForm";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Imóveis Estruturar - Terrenos e Casas em Prado, Bahia",
  description: "Conheça os imóveis da Estruturar, com terrenos a partir de R$15.990 e casas prontas em Prado, Bahia. Localização privilegiada próxima às melhores praias.",
  keywords: "terrenos, casas, Prado, Bahia, investimento, imóveis, praia, incorporação, loteamento",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://imoveisestruturar.com.br",
    siteName: "Imóveis Estruturar",
    title: "Imóveis Estruturar - Terrenos e Casas em Prado, Bahia",
    description: "Conheça os imóveis da Estruturar, com terrenos a partir de R$15.990 e casas prontas em Prado, Bahia. Localização privilegiada próxima às melhores praias.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imóveis Estruturar em Prado, Bahia",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Features Section */}
      <Features />

      {/* Gallery Section */}
      <Gallery />

      {/* Location Section */}
      <Location />

      {/* Contact Form - Floating */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container-custom px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company info */}
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <img
                  src="/logo-rodape.png"
                  alt="Imóveis Estruturar"
                  className="h-16 w-auto object-contain"
                  style={{ maxWidth: "163px", maxHeight: "91px" }}
                />
              </div>
              <p className="text-gray-400 text-sm sm:text-base text-center md:text-left">
                Sua parceira para investimentos seguros em Prado. Oferecemos terrenos e casas com a melhor qualidade e localização.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a 
                  href="https://www.instagram.com/imoveisestruturar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#f7b70f] transition-colors bg-pink-600 hover:bg-pink-700 p-2 rounded-full"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://wa.me/5573998323357" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#f7b70f] transition-colors bg-green-600 hover:bg-green-700 p-2 rounded-full"
                  aria-label="WhatsApp"
                >
                  <Phone size={20} />
                </a>
                <a 
                  href="mailto:contato@imoveisestruturar.com.br"
                  className="text-white hover:text-[#f7b70f] transition-colors bg-blue-600 hover:bg-blue-700 p-2 rounded-full"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center md:text-left">Links Rápidos</h3>
              <ul className="space-y-2 text-sm sm:text-base text-center md:text-left">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#empreendimento" className="text-gray-400 hover:text-white transition-colors">
                    O Empreendimento
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="text-gray-400 hover:text-white transition-colors">
                    Galeria
                  </a>
                </li>
                <li>
                  <a href="#localizacao" className="text-gray-400 hover:text-white transition-colors">
                    Localização
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-gray-400 hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center md:text-left">Contato</h3>
              <ul className="space-y-2 text-sm sm:text-base text-center md:text-left">
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Phone size={16} className="text-[#0f8a7d]" />
                  <a href="tel:+5573998323357" className="text-gray-400 hover:text-white transition-colors">
                    (73) 99832-3357
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Mail size={16} className="text-[#0f8a7d]" />
                  <a href="mailto:contato@imoveisestruturar.com.br" className="text-gray-400 hover:text-white transition-colors">
                    contato@imoveisestruturar.com.br
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin size={16} className="text-[#0f8a7d]" />
                  <span className="text-gray-400">Prado, Bahia - Brasil</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-gray-400">Seg-Sex: 8h às 18h</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2 pl-0 md:pl-6">
                  <span className="text-gray-400">Sáb: 8h às 12h</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Imóveis Estruturar. Todos os direitos reservados.</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">Desenvolvido por KMM Soluções em Tecnologia</p>
          </div>
        </div>
      </footer>
    </>
  );
}
