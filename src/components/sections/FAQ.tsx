"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

const faqs = [
  {
    q: "¿Funciona mientras estoy trabajando?",
    a: "Sí, para eso está. El asistente atiende a quien entra en tu web a cualquier hora: cuando estás en una obra, conduciendo o fuera de horario. Tú revisas las solicitudes cuando terminas.",
  },
  {
    q: "¿Necesito saber de tecnología?",
    a: "No. Lo montamos y configuramos nosotros. Tú solo nos cuentas cómo trabajas.",
  },
  {
    q: "¿Necesito cambiar mi web actual?",
    a: "No necesariamente. Podemos hacerte una web nueva o valorar la que ya tienes y añadirle el asistente y el sistema de solicitudes, si su estructura lo permite.",
  },
  {
    q: "¿Mis clientes pueden escribirme por WhatsApp?",
    a: "Sí. Añadimos un botón de WhatsApp para el cliente que prefiere escribirte directamente en lugar de usar el asistente.",
  },
  {
    q: "¿Puedo cambiar lo que responde el asistente?",
    a: "Sí. Lo configuramos con las preguntas y respuestas de tu negocio, y lo ajustamos cuando lo necesites dentro del mantenimiento.",
  },
  {
    q: "¿Qué tengo que aportar para empezar?",
    a: "Poco: tus servicios, zona de trabajo, horarios y, si tienes, fotos o logo. Del resto nos encargamos nosotros.",
  },
  {
    q: "¿Qué incluye cada pago?",
    a: "Los 1.000 € (pago único) cubren el diseño, el montaje y la puesta en marcha. Los 50 €/mes cubren alojamiento, soporte y supervisión del sistema.",
  },
  {
    q: "¿Cuánto se tarda en tenerlo funcionando?",
    a: "Depende de tu negocio y de lo rápido que nos pases la información. Te damos el plazo antes de empezar, sin sorpresas.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-mist py-20 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Lo que suelen preguntarnos fontaneros y electricistas."
          description={
            <>
              ¿Tienes otra duda?{" "}
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent-light underline underline-offset-4 hover:text-ink"
              >
                Escríbenos por WhatsApp
              </a>{" "}
              y te respondemos directamente.
            </>
          }
        />

        <div className="flex flex-col divide-y divide-white/[0.08] border-t border-white/[0.08]">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 rounded-lg px-3 py-5 -mx-3 text-left transition-colors duration-200 hover:bg-white/[0.03] hover:text-accent-light"
                  >
                    <span className="font-display text-[15px] font-semibold text-ink sm:text-base">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-ink/40 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-accent-light" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="pb-5 pr-8 text-[15px] leading-relaxed text-ink/70">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
