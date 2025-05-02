import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vilataipu.com.br'),
  title: "Imóveis Estruturar, sua nova vida em Prado-BA",
  description: "Conheça o Vila Taipu, um loteamento com terrenos a partir de R$15.990 e casas prontas em Prado, Bahia. Localização privilegiada próxima às melhores praias.",
  keywords: "terrenos, casas, Prado, Bahia, investimento, imóveis, praia, incorporação, loteamento",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://vilataipu.com.br",
    siteName: "Imóveis Estruturar - Prado, Bahia",
    title: "Imóveis Estruturar, sua nova vida em Prado-BA",
    description: "Conheça o Vila Taipu, um loteamento com terrenos a partir de R$15.990 e casas prontas em Prado, Bahia. Localização privilegiada próxima às melhores praias.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imóveis Estruturar em Prado, Bahia",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased font-sans bg-white`}
      >
        <PageTransition>
          {children}
        </PageTransition>
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
