"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Home, 
  Waves, 
  TreePine, 
  Map, 
  Shield, 
  TrendingUp 
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Terrenos Amplos",
    description: "Lotes a partir de 150m² prontos para construir sua casa dos sonhos em Prado.",
    icon: <Home className="w-12 h-12 text-primary" />,
  },
  {
    id: 2,
    title: "Próximo à Praia",
    description: "Localização privilegiada a poucos minutos das melhores praias de Prado.",
    icon: <Waves className="w-12 h-12 text-primary" />,
  },
  {
    id: 3,
    title: "Área Verde",
    description: "Empreendimento com ampla área verde e preservação ambiental para seu conforto.",
    icon: <TreePine className="w-12 h-12 text-primary" />,
  },
  {
    id: 4,
    title: "Infraestrutura Completa",
    description: "Água encanada, energia elétrica e ruas planejadas com toda a infraestrutura.",
    icon: <Map className="w-12 h-12 text-primary" />,
  },
  {
    id: 5,
    title: "Segurança",
    description: "Controle de acesso e monitoramento para você e sua família viverem com tranquilidade.",
    icon: <Shield className="w-12 h-12 text-primary" />,
  },
  {
    id: 6,
    title: "Valorização Garantida",
    description: "Investimento em região de alto potencial de valorização imobiliária.",
    icon: <TrendingUp className="w-12 h-12 text-primary" />,
  },
];

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="empreendimento" className="py-12 sm:py-16 md:py-20 bg-bg-sand">
      <div className="container-custom px-4 sm:px-6">
        <h2 className="section-title text-text-dark text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          Diferenciais do <span className="text-primary">Empreendimento</span>
        </h2>
        <p className="section-subtitle text-gray-600 text-base sm:text-lg md:text-xl mb-8 sm:mb-12">
          Vila Taipu foi planejado para proporcionar o máximo de conforto, segurança e qualidade de vida para você e sua família.
        </p>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="card p-4 sm:p-6 flex flex-col items-center text-center bg-gradient-to-b from-white via-bg-sand-light to-bg-sand shadow-xl border-2 border-secondary-dark rounded-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-3 sm:mb-4 p-4 sm:p-5 bg-gradient-to-br from-secondary/30 to-secondary/50 rounded-full shadow-lg border-2 border-secondary-dark transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:rotate-3 feature-icon-container">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-text-dark">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-8 sm:mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="#contato" className="btn-primary inline-block">
            Quero garantir meu terreno
          </a>
        </motion.div>
      </div>
    </section>
  );
}

