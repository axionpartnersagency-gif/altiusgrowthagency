import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      {/*
        Nota para quien edite este archivo (no se muestra a los visitantes):
        el texto de esta plantilla es orientativo, no asesoramiento jurídico.
        Sustituye los campos entre corchetes por los datos reales de la
        empresa y haz que un profesional lo revise antes de publicar.
      */}
      <main className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <h1 className="mb-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mb-10 text-sm text-ink/45">
            Última actualización: {updated}
          </p>
          <div className="flex flex-col gap-6 text-[15px] leading-relaxed text-ink/70 [&_h2]:mt-4 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_strong]:text-ink">
            {children}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
