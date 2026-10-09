import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Manrope } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { ContactModalProvider } from "@/components/contact/ContactModalContext";
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

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Web para fontaneros y electricistas · AltiusGrowth",
    template: "%s · AltiusGrowth",
  },
  description:
    "Webs para fontaneros y electricistas que atienden a tus clientes 24/7 y recogen sus solicitudes mientras tú trabajas. Precio cerrado: 1.000 € + 50 €/mes.",
  keywords: [
    "web para fontaneros",
    "web para electricistas",
    "página web fontanería",
    "página web electricista autónomo",
    "conseguir clientes fontanería",
    "atender llamadas mientras trabajo",
    "asistente 24/7 para fontaneros",
  ],
  authors: [{ name: "AltiusGrowth" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    siteName: "AltiusGrowth",
    title: "Deja de perder clientes mientras estás trabajando · AltiusGrowth",
    description:
      "Webs para fontaneros y electricistas que atienden a tus clientes a cualquier hora y te dejan la solicitud lista para cuando termines.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deja de perder clientes mientras estás trabajando · AltiusGrowth",
    description:
      "Webs para fontaneros y electricistas que atienden a tus clientes a cualquier hora.",
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
      className={`${display.variable} ${body.variable} ${mono.variable} overflow-x-hidden scroll-smooth`}
    >
      <body className="min-h-full overflow-x-hidden bg-paper font-body text-ink antialiased">
        <div
          aria-hidden
          className="bg-grid pointer-events-none fixed inset-0 -z-50 h-full w-full"
        />
        <div
          aria-hidden
          className="animate-drift pointer-events-none fixed -top-40 left-1/2 -z-50 h-[560px] w-[min(900px,150vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(79,109,245,0.16),transparent_65%)]"
        />
        <ContactModalProvider>{children}</ContactModalProvider>
      </body>
    </html>
  );
}
