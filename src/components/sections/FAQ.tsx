"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  {
    q: "¿Necesito cambiar mi web actual?",
    a: "No necesariamente. Podemos partir de cero con una web nueva orientada a conversión, o valorar tu web actual y añadir el chatbot y el sistema de solicitud si la estructura lo permite.",
  },
  {
    q: "¿El chatbot funciona cuando estoy trabajando?",
    a: "Sí. El chatbot atiende a tus visitantes las 24 horas, también cuando estás en una obra, de camino a un servicio o fuera de horario.",
  },
  {
    q: "¿Puede conectarse con WhatsApp?",
    a: "Sí, añadimos un botón de contacto directo por WhatsApp para los clientes que prefieren escribirte ahí en lugar de usar el chatbot.",
  },
  {
    q: "¿Puedo modificar las preguntas que responde?",
    a: "Sí. Configuramos el chatbot con las preguntas y respuestas propias de tu negocio, y podemos ajustarlas cuando lo necesites como parte del mantenimiento.",
  },
  {
    q: "¿Qué necesito aportar para empezar?",
    a: "Poco: información básica de tu negocio (servicios, zona de cobertura, horarios) y, si tienes, fotos o logo. Nosotros nos encargamos del resto del proceso.",
  },
  {
    q: "¿El precio incluye el mantenimiento?",
    a: "La implementación (1.000 €) cubre el diseño, desarrollo y puesta en marcha. La cuota de 149 €/mes cubre alojamiento, soporte y supervisión del sistema.",
  },
  {
    q: "¿Cuánto se tarda en tener la web funcionando?",
    a: "El plazo depende de la complejidad de tu negocio y de lo rápido que nos facilites la información inicial. Te lo concretamos antes de empezar, sin sorpresas.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper py-24 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Lo que suelen preguntarnos fontaneros y electricistas."
          description="Si tienes otra duda, escríbenos y te respondemos directamente."
        />

        <div className="flex flex-col divide-y divide-ink/10 border-t border-ink/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display text-[15px] font-semibold text-ink sm:text-base">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-ink/40 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-accent" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="pb-5 pr-8 text-[15px] leading-relaxed text-ink/60">
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
