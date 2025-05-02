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
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  // Staggered animation for gallery items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="galeria" className="py-20 bg-gray-800 text-white">
      <div className="container-custom">
        <h2 className="section-title text-white">
          Galeria de <span className="text-[#0f8a7d]">Imagens</span>
        </h2>
        <p className="section-subtitle text-gray-300">
          Conheça o empreendimento Vila Taipu através das nossas imagens. Um lugar perfeito para morar ou investir em Prado, Bahia.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              variants={itemVariants}
              onClick={() => openLightbox(image)}
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  onLoadStart={() => setIsLoading(true)}
                  onLoad={() => setIsLoading(false)}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">Ver imagem</span>
                </div>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
                    <Loader className="w-8 h-8 text-primary animate-spin" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>
          <div
            className="relative max-w-4xl w-full h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
              />
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <Loader className="w-10 h-10 text-white animate-spin" />
                </div>
              )}
            </div>
            <p className="text-white text-center mt-4 text-lg">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}

