import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactTriggerButton from "@/components/contact/ContactTriggerButton";
import Reveal from "@/components/ui/Reveal";
import { CTA_INFO } from "@/lib/site-config";

const included = [
  "Diseño y desarrollo de la web",
  "Diseño 100% responsive",
  "Textos orientados a que te contacten",
  "Asistente 24/7 para tus clientes",
  "Recogida de datos del cliente",
  "Sistema de solicitud y agendamiento",
  "Integración con tu calendario",
  "Botón de WhatsApp y contacto",
  "Configuración inicial completa",
  "Puesta en funcionamiento",
];

// Lo que ocurre tras contratar. Todo sale de lo que ya explicamos en el FAQ:
// sin plazos ni garantías que no podamos asegurar.
const nextSteps = [
  {
    title: "Nos cuentas tu negocio",
    detail: "Servicios, zona, horarios y, si tienes, fotos o logo.",
  },
  {
    title: "Lo montamos",
    detail: "Web, asistente y solicitudes configurados con tu información.",
  },
  {
    title: "Lo ponemos en marcha",
    detail: "Te lo entregamos funcionando. Antes de empezar te decimos el plazo.",
  },
  {
    title: "Seguimos contigo",
    detail: "Alojamiento, soporte y ajustes de las respuestas cuando lo necesites.",
  },
];

export default function Pricing() {
  return (
    <section id="precio" className="bg-mist py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-12 sm:gap-14">
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Precio"
          title="Precio cerrado. Sabes lo que pagas desde el primer día."
          description="Un pago para dejarlo todo montado y una cuota pequeña para que siga funcionando."
        />

        <Reveal className="w-full max-w-3xl">
          <div className="relative rounded-3xl bg-[linear-gradient(135deg,rgba(79,109,245,0.5),rgba(34,211,238,0.25),rgba(79,109,245,0.15))] p-px shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
            <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-surface p-6 sm:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
              />

              <div className="relative flex flex-col gap-10">
                <div className="flex flex-col gap-2 text-center sm:text-left">
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-light">
                    Sistema AltiusGrowth
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-white">
                    Web profesional + asistente que atiende a tus clientes
                  </h3>
                </div>

                <div className="flex flex-col gap-6 border-y border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-col gap-1 text-center sm:text-left">
                    <span className="text-sm text-white/60">Implementación</span>
                    <span className="font-display text-4xl font-bold text-white">
                      1.000 €
                    </span>
                    <span className="text-xs text-white/50">
                      Pago único · Diseño, montaje y puesta en marcha
                    </span>
                  </div>
                  <div className="hidden h-12 w-px bg-white/10 sm:block" />
                  <div className="flex flex-col gap-1 text-center sm:text-left">
                    <span className="text-sm text-white/60">Mantenimiento</span>
                    <span className="font-display text-4xl font-bold text-white">
                      50 €<span className="text-xl font-semibold text-white/50">/mes</span>
                    </span>
                    <span className="text-xs text-white/50">
                      Alojamiento, soporte y supervisión
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-sm font-semibold text-white">Qué incluye</span>
                  <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {included.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/75">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" strokeWidth={2.25} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-sm font-semibold text-white">
                    Qué pasa después de contratar
                  </span>
                  <ol className="grid gap-3 sm:grid-cols-2">
                    {nextSteps.map((step, i) => (
                      <li
                        key={step.title}
                        className="flex gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
                      >
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 font-mono text-xs font-bold text-accent-light">
                          {i + 1}
                        </span>
                        <span className="flex flex-col gap-0.5">
                          <span className="text-sm font-semibold text-white">{step.title}</span>
                          <span className="text-sm leading-relaxed text-white/60">{step.detail}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                <p className="rounded-xl border border-accent/20 bg-accent/[0.06] px-5 py-4 text-[15px] leading-relaxed text-white/80">
                  <span className="font-semibold text-white">Haz la cuenta:</span>{" "}
                  compara la cuota con lo que cobras por un solo trabajo. Si la
                  web te ayuda a no perder alguno de los que hoy se te escapan,
                  ya le estás sacando partido.
                </p>

                <div className="flex flex-col items-center gap-3">
                  <ContactTriggerButton size="lg" className="w-full">
                    {CTA_INFO}
                    <ArrowRight className="h-4 w-4" />
                  </ContactTriggerButton>
                  <span className="text-sm text-white/55">
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
