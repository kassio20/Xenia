"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, Loader } from "lucide-react";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' fill='%230f8a7d'%3E%3Crect width='800' height='400'/%3E%3C/svg%3E",
    alt: "Vista aérea do empreendimento",
  },
  {
    id: 2,
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' fill='%23f7b70f'%3E%3Crect width='800' height='400'/%3E%3C/svg%3E",
    alt: "Modelo de casa no condomínio",
  },
  {
    id: 3,
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' fill='%23086b60'%3E%3Crect width='800' height='400'/%3E%3C/svg%3E",
    alt: "Área de lazer com piscina",
  },
  {
    id: 4,
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' fill='%23374151'%3E%3Crect width='800' height='400'/%3E%3C/svg%3E",
    alt: "Praia próxima ao empreendimento",
  },
  {
    id: 5,
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' fill='%23e5a90e'%3E%3Crect width='800' height='400'/%3E%3C/svg%3E",
    alt: "Vista do pôr do sol em Prado",
  },
  {
    id: 6,
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' fill='%234ade80'%3E%3Crect width='800' height='400'/%3E%3C/svg%3E",
    alt: "Área verde do condomínio",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const openLightbox = (image: GalleryImage) => {
    setIsLoading(true);
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <section id="galeria" className="py-10 sm:py-16 md:py-20 bg-gray-800 text-white">
      <div className="container-custom px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center">
          <span className="text-[#0f8a7d]">Conheça</span> nossos imóveis
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-10 text-center max-w-3xl mx-auto">
          Terrenos amplos e casas prontas em uma localização privilegiada de Prado, Bahia
        </p>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative aspect-video overflow-hidden rounded-lg shadow-lg cursor-pointer bg-gray-700"
              variants={fadeInUp}
              onClick={() => openLightbox(image)}
              // Lazy load images that are further down
              style={{ 
                transform: index > 2 ? 'translateZ(0)' : undefined 
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 640px) 95vw, (max-width: 1024px) 45vw, 30vw"
                  loading={index < 3 ? "eager" : "lazy"}
                  onLoadStart={() => setIsLoading(true)}
                  onLoad={handleImageLoad}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm sm:text-base font-medium">Ver detalhes</span>
                </div>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <a href="#contato" className="inline-block bg-[#0f8a7d] hover:bg-[#086b60] text-white py-2 sm:py-3 px-6 sm:px-8 rounded-md transition-colors duration-300">
            Agende uma visita
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-2 sm:p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Fechar"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>
          
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 border-4 border-gray-300 border-t-white rounded-full animate-spin"></div>
            </div>
          )}
          
          <div 
            className="relative max-w-full sm:max-w-4xl w-full h-auto max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={450}
              className="object-contain w-full h-auto max-h-[70vh] sm:max-h-[80vh]"
              onLoad={handleImageLoad}
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 60vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 sm:p-4">
              <h3 className="text-sm sm:text-lg font-bold">{selectedImage.alt}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

