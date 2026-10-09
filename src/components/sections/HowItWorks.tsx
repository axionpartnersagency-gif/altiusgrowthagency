import {
  ArrowRight,
  CalendarCheck2,
  ClipboardList,
  MessageCircle,
  MousePointerClick,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ContactTriggerButton from "@/components/contact/ContactTriggerButton";
import { CTA_DEMO } from "@/lib/site-config";

const steps = [
  {
    number: "01",
    icon: MousePointerClick,
    title: "El cliente te encuentra",
    detail:
      "Entra en tu web y en segundos ve qué haces, dónde trabajas y cómo pedirte presupuesto.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Le responden al momento",
    detail:
      "El asistente resuelve sus dudas: horarios, zona, tipo de trabajo, urgencias. A cualquier hora.",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Deja sus datos",
    detail:
      "Nombre, teléfono, dirección y qué le pasa. Lo justo para que sepas de qué va antes de llamar.",
  },
  {
    number: "04",
    icon: CalendarCheck2,
    title: "Pide el servicio o reserva",
    detail:
      "Solicita el trabajo o reserva hueco en tu calendario. Tú lo ves cuando terminas.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-mist py-20 sm:py-32">
      <Container className="flex flex-col gap-12 sm:gap-16">
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Cómo funciona"
          title="Tú sigues con tu trabajo. Tu web atiende al cliente."
          description="Así pasa alguien de buscarte en Google a dejarte su solicitud, sin que tengas que parar."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 110} className="h-full">
              <div className="group flex h-full flex-col gap-4 rounded-2xl border border-white/[0.07] bg-surface p-6 transition-colors duration-300 hover:border-accent/30 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20">
                    <step.icon className="h-5 w-5 text-accent-light" strokeWidth={1.75} />
                  </span>
                  <span aria-hidden className="font-mono text-2xl font-bold text-ink/15">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink/65">
                  {step.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex flex-col items-center gap-3 text-center">
          <ContactTriggerButton variant="ghost" size="lg" className="w-full sm:w-auto">
            {CTA_DEMO}
            <ArrowRight className="h-4 w-4" />
          </ContactTriggerButton>
          <p className="text-sm text-ink/55">
            Te enseñamos el asistente en una demo, sin compromiso.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
