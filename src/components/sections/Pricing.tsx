import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactTriggerButton from "@/components/contact/ContactTriggerButton";
import Reveal from "@/components/ui/Reveal";
import { CTA_INFO } from "@/lib/site-config";

const implementation = [
  "Web profesional adaptada a tu negocio",
  "Diseño pensado para móvil",
  "Textos orientados a que te contacten",
  "Asistente que atiende 24/7",
  "Recogida de solicitudes",
  "Agenda e integración con tu calendario",
  "Botón de WhatsApp y contacto",
  "Configuración inicial y puesta en marcha",
];

// Sin "cambios ilimitados": el mantenimiento cubre ajustes pequeños.
const maintenance = [
  "Alojamiento de la web",
  "Mantenimiento técnico",
  "Supervisión del sistema",
  "Soporte cuando lo necesites",
  "Pequeños ajustes, como las respuestas del asistente",
];

export default function Pricing() {
  return (
    <section id="precio" className="bg-paper py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-12 sm:gap-14">
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Precio"
          title="Un sistema completo, a precio cerrado."
          description="No pagas solo una web: pagas tener montado todo lo necesario para atender a tus clientes cuando tú no puedes."
        />

        <Reveal className="w-full max-w-4xl">
          <div className="relative rounded-3xl bg-[linear-gradient(135deg,rgba(79,109,245,0.5),rgba(34,211,238,0.25),rgba(79,109,245,0.15))] p-px shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
            <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-surface p-6 sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
              />

              <div className="relative flex flex-col gap-8">
                <div className="grid gap-5 md:grid-cols-2">
                  {/* Implementación */}
                  <div className="flex flex-col gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-light">
                        Implementación
                      </span>
                      <span className="font-display text-4xl font-bold text-white">1.000 €</span>
                      <span className="text-sm text-white/55">
                        Pago único · el sistema completo, montado y funcionando
                      </span>
                    </div>
                    <ul className="flex flex-col gap-2.5 border-t border-white/10 pt-5">
                      {implementation.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" strokeWidth={2.25} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mantenimiento */}
                  <div className="flex flex-col gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-light">
                        Mantenimiento
                      </span>
                      <span className="font-display text-4xl font-bold text-white">
                        50 €<span className="text-xl font-semibold text-white/50">/mes</span>
                      </span>
                      <span className="text-sm text-white/55">
                        Para que todo siga funcionando sin que tengas que ocuparte
                      </span>
                    </div>
                    <ul className="flex flex-col gap-2.5 border-t border-white/10 pt-5">
                      {maintenance.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" strokeWidth={2.25} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="rounded-xl border border-accent/20 bg-accent/[0.06] px-5 py-4 text-[15px] leading-relaxed text-white/80">
                  <span className="font-semibold text-white">Haz la cuenta:</span>{" "}
                  compara la cuota con lo que cobras por un solo trabajo. Si el
                  sistema evita que se te escape alguno de los que hoy se quedan
                  sin respuesta, ya le estás sacando partido.
                </p>

                <div className="flex flex-col items-center gap-3">
                  <ContactTriggerButton size="lg" className="w-full sm:w-auto sm:min-w-80">
                    {CTA_INFO}
                    <ArrowRight className="h-4 w-4" />
                  </ContactTriggerButton>
                  <span className="text-center text-sm text-white/55">
                    Te respondemos y resolvemos tus dudas antes de que decidas nada.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
