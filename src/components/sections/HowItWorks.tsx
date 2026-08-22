import {
  CalendarCheck2,
  ClipboardList,
  MessageCircle,
  MousePointerClick,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    icon: MousePointerClick,
    title: "Visita tu web",
    detail:
      "Una web profesional y rápida: en segundos entiende qué haces y por qué puede confiar en ti.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Conversación con el chatbot",
    detail:
      "Responde dudas al instante — horarios, zona de cobertura, tipos de servicio, urgencias — sin esperas.",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Recogida de datos",
    detail:
      "Nombre, teléfono, dirección y qué necesita: lo justo para que puedas presupuestar sin llamadas previas.",
  },
  {
    number: "04",
    icon: CalendarCheck2,
    title: "Solicitud o reserva",
    detail:
      "Con la información lista, pide el servicio o reserva una franja directamente en tu calendario.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-mist py-24 sm:py-28">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Cómo funciona"
          title="Axion trabaja mientras tú estás trabajando."
          description="De la primera visita a la solicitud lista, en cuatro pasos que ocurren solos."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 110} className="h-full">
              <div className="flex h-full flex-col gap-4 rounded-2xl bg-white p-7 ring-1 ring-ink/[0.06]">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10">
                    <step.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                  </span>
                  <span className="font-display text-2xl font-bold text-ink/15">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink/55">
                  {step.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
