import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const included = [
  "Diseño y desarrollo de la web",
  "Diseño 100% responsive",
  "Copy orientado a conversión",
  "Chatbot de IA 24/7",
  "Recogida de datos del cliente",
  "Sistema de solicitud y agendamiento",
  "Integración con tu calendario",
  "Botón de WhatsApp y contacto",
  "Configuración inicial completa",
  "Puesta en funcionamiento",
];

export default function Pricing() {
  return (
    <section id="precio" className="bg-mist py-24 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Precio"
          title="Un único sistema. Sin letra pequeña."
          description="Todo lo que necesitas para captar y convertir más clientes, en un solo precio claro."
        />

        <Reveal className="w-full max-w-3xl">
          <div className="relative rounded-3xl bg-[linear-gradient(135deg,rgba(79,109,245,0.5),rgba(34,211,238,0.25),rgba(79,109,245,0.15))] p-px shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_50px_100px_-30px_rgba(79,109,245,0.4)]">
            <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-surface p-8 sm:p-12">
              <div
                aria-hidden
                className="animate-glow-pulse pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
              />
              <div
                aria-hidden
                style={{ animationDelay: "1.5s" }}
                className="animate-glow-pulse pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-cyan/10 blur-3xl"
              />

              <div className="relative flex flex-col gap-10">
                <div className="flex flex-col gap-2 text-center sm:text-left">
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-light">
                    Sistema AltiusGrowth
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-white">
                    Web profesional + chatbot de IA
                  </h3>
                </div>

                <div className="flex flex-col gap-6 border-y border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-col gap-1 text-center sm:text-left">
                    <span className="text-sm text-white/50">Implementación</span>
                    <span className="font-display text-4xl font-bold text-white">
                      1.000 €
                    </span>
                    <span className="text-xs text-white/40">Pago único</span>
                  </div>
                  <div className="hidden h-12 w-px bg-white/10 sm:block" />
                  <div className="flex flex-col gap-1 text-center sm:text-left">
                    <span className="text-sm text-white/50">Mantenimiento</span>
                    <span className="font-display text-4xl font-bold text-white">
                      149 €<span className="text-xl font-semibold text-white/50">/mes</span>
                    </span>
                    <span className="text-xs text-white/40">
                      Alojamiento, soporte y supervisión
                    </span>
                  </div>
                </div>

                <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" strokeWidth={2.25} />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button href="#contacto" size="lg" className="w-full">
                  Quiero mi sistema AltiusGrowth
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
