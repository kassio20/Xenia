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
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Contact */}
            <div>
              <img
                src="/logo-estruturar.png"
                alt="Imóveis Estruturar"
                className="h-16 w-auto mb-4"
              />
              <p className="text-gray-400 mb-4">
                Sua parceira para os melhores investimentos em Prado, Bahia.
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+5573999147925"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone size={18} /> (73) 99914-7925
                </a>
                <a
                  href="mailto:contato@imoveisestruturar.com.br"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail size={18} /> contato@imoveisestruturar.com.br
                </a>
                <p className="flex items-center gap-2 text-gray-300">
                  <MapPin size={18} /> Prado, Bahia - Brasil
                </p>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#empreendimento" className="text-gray-300 hover:text-white transition-colors">
                    O Empreendimento
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="text-gray-300 hover:text-white transition-colors">
                    Galeria
                  </a>
                </li>
                <li>
                  <a href="#localizacao" className="text-gray-300 hover:text-white transition-colors">
                    Localização
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-gray-300 hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/imoveisestruturar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://wa.me/5573999147925"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors"
                >
                  <Phone size={20} />
                </a>
              </div>
              <p className="mt-6 text-gray-400 text-sm">
                Horário de Atendimento:<br />
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} Imóveis Estruturar. Todos os direitos reservados.
            </p>
            <p className="mt-2">
              Desenvolvido por KMM Soluções em Tecnologia
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
