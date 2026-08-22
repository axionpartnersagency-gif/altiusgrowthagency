import { ArrowRight, MessageSquareWarning, PhoneMissed, MousePointerClick, UserRoundX } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const scenarios = [
  {
    icon: PhoneMissed,
    text: "Un cliente llama mientras estás debajo de un fregadero. No puedes atender.",
  },
  {
    icon: MessageSquareWarning,
    text: "Escribe por WhatsApp y no le respondes hasta horas después.",
  },
  {
    icon: MousePointerClick,
    text: "Entra en tu web, no sabe qué hacer y la cierra sin dejar sus datos.",
  },
  {
    icon: UserRoundX,
    text: "Busca en Google y termina llamando a otro fontanero o electricista.",
  },
];

export default function Problem() {
  return (
    <section className="bg-ink py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          tone="light"
          eyebrow="El problema"
          title="¿Cuántos clientes puedes estar perdiendo mientras trabajas?"
          description="Cada llamada perdida o mensaje sin responder es una oportunidad que se va con la competencia."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((item, i) => (
            <Reveal key={item.text} delay={i * 90}>
              <div className="flex h-full flex-col gap-4 bg-ink p-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                  <item.icon className="h-5 w-5 text-white/80" strokeWidth={1.75} />
                </span>
                <p className="text-[15px] leading-relaxed text-white/70">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={360}>
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-4">
            <ArrowRight className="h-4 w-4 shrink-0 text-accent-light" />
            <p className="text-sm text-white/70 sm:text-base">
              Resultado: cada semana pierdes solicitudes que nunca llegas a
              ver, sin ni siquiera saber que existieron.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
