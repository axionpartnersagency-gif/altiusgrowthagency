import {
  Bot,
  CalendarClock,
  Globe,
  PenLine,
  Phone,
  Rocket,
  Smartphone,
  UserCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

// Primero el beneficio (título), después la funcionalidad (etiqueta).
const items = [
  {
    icon: Bot,
    feature: "Asistente 24/7",
    title: "Atiende las primeras preguntas aunque estés trabajando.",
  },
  {
    icon: UserCheck,
    feature: "Recogida de solicitudes",
    title: "Cuando vuelves a estar disponible, ya sabes quién te ha contactado y qué necesita.",
  },
  {
    icon: CalendarClock,
    feature: "Agenda y calendario",
    title: "Menos llamadas y mensajes para cuadrar una visita.",
  },
  {
    icon: Phone,
    feature: "WhatsApp y contacto directo",
    title: "El cliente te contacta por el canal que ya usa.",
  },
  {
    icon: Globe,
    feature: "Web profesional",
    title: "Quien te busca ve en segundos qué haces, dónde trabajas y cómo pedirte presupuesto.",
  },
  {
    icon: Smartphone,
    feature: "Diseño para móvil",
    title: "Se ve y funciona bien en el móvil, que es desde donde te buscan.",
  },
  {
    icon: PenLine,
    feature: "Textos orientados a contactar",
    title: "Cada página lleva al visitante a pedirte el servicio, no solo a mirar.",
  },
  {
    icon: Rocket,
    feature: "Configuración y puesta en marcha",
    title: "Te lo dejamos funcionando. Tú no tocas nada técnico.",
  },
];

export default function WhatsIncluded() {
  return (
    <section id="que-incluye" className="bg-mist py-20 sm:py-32">
      <Container className="flex flex-col gap-12 sm:gap-14">
        <SectionHeading
          eyebrow="Qué incluye"
          title="Un sistema completo, no solo una web."
          description="Todo esto entra en la implementación. Te lo entregamos montado y funcionando."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.feature} delay={(i % 4) * 90} className="h-full">
              <div className="group flex h-full flex-col gap-4 rounded-2xl border border-white/[0.07] bg-surface p-6 transition-colors duration-300 hover:border-accent/30 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20">
                    <item.icon className="h-5 w-5 text-accent-light" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/55">
                    {item.feature}
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold leading-snug text-ink">
                  {item.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="flex flex-col gap-1 rounded-2xl border border-accent/20 bg-accent/[0.06] px-6 py-5 text-[15px] text-ink/75 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <span>
              <span className="font-semibold text-ink">Implementación completa:</span>{" "}
              web, atención automática, solicitudes, agenda y WhatsApp.
            </span>
            <span className="shrink-0 font-display text-lg font-bold text-ink">
              1.000 € · pago único
            </span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
