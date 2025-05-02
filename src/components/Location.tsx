"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Navigation, Car, Clock } from "lucide-react";

const locationFeatures = [
  {
    id: 1,
    title: "Localização Privilegiada",
    description: "A apenas 5 minutos das melhores praias de Prado, Bahia.",
    icon: <MapPin className="w-6 h-6 text-[#0f8a7d]" />,
  },
  {
    id: 2,
    title: "Fácil Acesso",
    description: "Acesso por estradas bem conservadas e sinalizadas.",
    icon: <Navigation className="w-6 h-6 text-[#0f8a7d]" />,
  },
  {
    id: 3,
    title: "Proximidade",
    description: "Próximo ao comércio local, restaurantes e opções de lazer.",
    icon: <Car className="w-6 h-6 text-[#0f8a7d]" />,
  },
  {
    id: 4,
    title: "Tempo de Viagem",
    description: "A 1h do aeroporto mais próximo e 10min do centro da cidade.",
    icon: <Clock className="w-6 h-6 text-[#0f8a7d]" />,
  },
];

export default function Location() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="localizacao" className="py-20 bg-gray-900 text-white">
      <div className="container-custom">
        <h2 className="section-title text-white">
          <span className="text-[#0f8a7d]">Localização</span> Estratégica
        </h2>
        <p className="section-subtitle text-gray-300">
          A Imóveis Estruturar está localizada em um dos melhores pontos de Prado, com fácil acesso às praias e ao centro da cidade.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {/* Map */}
          <motion.div
            ref={ref}
            className="w-full h-[400px] bg-gray-800 rounded-lg overflow-hidden shadow-md" 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122511.56366556428!2d-39.29952564446615!3d-17.336451761950856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x736c90e01fa22b5%3A0xa9cb9def84e52efe!2sPrado%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1716657314592!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Location features */}
          <div>
            <motion.div
              ref={ref}
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
            >
              {locationFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg shadow-md border border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-2 bg-gray-700 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href="#contato"
                className="btn-outline inline-flex items-center gap-2"
              >
                Quero conhecer
                <MapPin size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

