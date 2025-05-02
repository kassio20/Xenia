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
    description: "Terrenos de 400m² a 600m² prontos para construir sua casa dos sonhos em Prado.",
    icon: <Home className="w-10 h-10 text-[#0f8a7d]" />,
  },
  {
    id: 2,
    title: "Próximo à Praia",
    description: "Localização privilegiada a poucos minutos das melhores praias de Prado.",
    icon: <Waves className="w-10 h-10 text-[#0f8a7d]" />,
  },
  {
    id: 3,
    title: "Área Verde",
    description: "Empreendimento com ampla área verde e preservação ambiental para seu conforto.",
    icon: <TreePine className="w-10 h-10 text-[#0f8a7d]" />,
  },
  {
    id: 4,
    title: "Infraestrutura Completa",
    description: "Água encanada, energia elétrica e ruas planejadas com toda a infraestrutura.",
    icon: <Map className="w-10 h-10 text-[#0f8a7d]" />,
  },
  {
    id: 5,
    title: "Segurança",
    description: "Controle de acesso e monitoramento para você e sua família viverem com tranquilidade.",
    icon: <Shield className="w-10 h-10 text-[#0f8a7d]" />,
  },
  {
    id: 6,
    title: "Valorização Garantida",
    description: "Investimento em região de alto potencial de valorização imobiliária.",
    icon: <TrendingUp className="w-10 h-10 text-[#0f8a7d]" />,
  },
];

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="empreendimento" className="py-20 bg-gray-900 text-white">
      <div className="container-custom">
        <h2 className="section-title text-white">
          Diferenciais do <span className="text-[#0f8a7d]">Empreendimento</span>
        </h2>
        <p className="section-subtitle text-gray-300">
          Vila Taipu foi planejado para proporcionar o máximo de conforto, segurança e qualidade de vida para você e sua família.
        </p>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="card p-6 flex flex-col items-center text-center bg-gray-800 border border-gray-700 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 p-4 bg-gray-700 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="#contato" className="btn-primary">
            Quero garantir meu terreno
          </a>
        </motion.div>
      </div>
    </section>
  );
}

