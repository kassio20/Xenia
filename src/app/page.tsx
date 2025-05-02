import Image from "next/image";
import { Instagram, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 font-sans">
      {/* Header Section */}
      <header className="text-center py-10 px-4">
        <Image 
          src="/logo-estruturar.png" 
          alt="Imóveis Estruturar Logo" 
          className="mx-auto w-48 md:w-64 mb-6" 
          width={256}
          height={128}
          priority
        />
        <h1 className="text-4xl font-bold text-green-400">🏡 Sua Nova Vida Começa em Prado - BA</h1>
        <p className="mt-4 text-xl">Casas prontas e terrenos amplos com entrada a partir de R$15.990.</p>
        <p className="mt-2">Morar ou investir nunca foi tão acessível e seguro.</p>
        <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          👉 Quero conhecer essa oportunidade!
        </button>
      </header>

      {/* Video Section */}
      <section className="px-4 py-10 bg-gray-800 text-center">
        <h2 className="text-2xl font-semibold mb-4">🎬 Vídeo de Apresentação</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-3xl aspect-video bg-gray-700 flex items-center justify-center rounded-lg">
            <p className="text-gray-400">Vídeo de apresentação será inserido aqui</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-10 bg-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-center">📍 O que você encontra em Prado - BA:</h2>
        <ul className="max-w-2xl mx-auto space-y-2 list-disc list-inside">
          <li>Terrenos de 400m² a 600m² prontos para construir</li>
          <li>Casas prontas para morar ou alugar</li>
          <li>Entrada a partir de R$15.990</li>
          <li>Parcelamento facilitado, direto, sem burocracia</li>
          <li>Água encanada, energia elétrica, ruas abertas</li>
          <li>Localização privilegiada</li>
        </ul>
        <div className="text-center mt-6">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            👉 Quero minha oportunidade agora
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-10 bg-gray-800">
        <h2 className="text-2xl font-semibold mb-4 text-center">🌟 Um bairro planejado para viver ou investir</h2>
        <ul className="max-w-2xl mx-auto space-y-2 list-disc list-inside">
          <li>Morar a poucos metros da praia</li>
          <li>Viver com infraestrutura, segurança e liberdade</li>
          <li>Investir numa região em pleno crescimento turístico</li>
          <li>Valorizar seu patrimônio a cada ano</li>
        </ul>
        <p className="text-center mt-6 max-w-2xl mx-auto">Aqui você não compra apenas um terreno. Você compra qualidade de vida e um futuro próspero.</p>
        <div className="text-center mt-6">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            👉 Descubra agora Prado
          </button>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="px-4 py-10 bg-gray-700">
        <h2 className="text-2xl font-semibold mb-6 text-center">💰 Por que investir em Prado?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-green-400">Crescimento turístico</h3>
            <p>Prado é um dos destinos turísticos em maior expansão no sul da Bahia, atraindo visitantes o ano todo.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-green-400">Valorização imobiliária</h3>
            <p>Imóveis na região têm apresentado valorização constante, garantindo retorno seguro para investidores.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-green-400">Qualidade de vida</h3>
            <p>Natureza abundante, praias paradisíacas e um estilo de vida tranquilo com infraestrutura urbana.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-10 bg-gray-800">
        <h2 className="text-2xl font-semibold mb-6 text-center">👥 O que dizem nossos clientes</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="italic mb-4">"Investir em Prado foi a melhor decisão que tomei. O terreno valorizou em menos de um ano e o processo foi super tranquilo."</p>
            <p className="font-semibold">— Carlos R., São Paulo</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="italic mb-4">"Comprei uma casa pronta e hoje alugo para temporada. O retorno tem sido excelente e a equipe da Estruturar me deu todo o suporte."</p>
            <p className="font-semibold">— Ana M., Salvador</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-10 bg-gray-900 text-center border-t border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Entre em contato com a Imobiliária</h2>
        <p className="mb-4">Imóveis Estruturar - Sua parceira para investimentos seguros em Prado</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <a 
            href="https://www.instagram.com/imoveisestruturar" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition duration-300"
          >
            <Instagram className="w-5 h-5" /> Instagram
          </a>
          <a 
            href="https://wa.me/5573999147925" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition duration-300"
          >
            <Phone className="w-5 h-5" /> WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6 px-4 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Imóveis Estruturar. Todos os direitos reservados.</p>
        <p className="text-sm text-gray-500 mt-2">Terrenos e casas em Prado - Bahia</p>
      </footer>
    </div>
  );
}
