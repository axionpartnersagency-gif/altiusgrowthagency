import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Axion — Webs con IA para fontaneros y electricistas",
    template: "%s · Axion",
  },
  description:
    "Axion crea páginas web profesionales con un chatbot de IA que atiende a tus clientes, responde sus dudas y te consigue más solicitudes de servicio, incluso mientras trabajas.",
  keywords: [
    "web para fontaneros",
    "web para electricistas",
    "chatbot IA para empresas de servicios",
    "captación de clientes fontanería",
    "agencia web fontanería y electricidad",
  ],
  authors: [{ name: "Axion" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    siteName: "Axion",
    title: "Axion — Mientras tú trabajas, Axion atiende a tus clientes",
    description:
      "Webs profesionales con chatbot de IA para fontaneros y electricistas. Más solicitudes de servicio, sin depender de estar siempre al teléfono.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axion — Mientras tú trabajas, Axion atiende a tus clientes",
    description:
      "Webs profesionales con chatbot de IA para fontaneros y electricistas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} scroll-smooth`}
    >
      <body className="min-h-full bg-paper font-body text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
