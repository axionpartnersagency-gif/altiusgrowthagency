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
    <section className="bg-paper py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          tone="light"
          eyebrow="El problema"
          title="¿Cuántos clientes puedes estar perdiendo mientras trabajas?"
          description="Cada llamada perdida o mensaje sin responder es una oportunidad que se va con la competencia."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((item, i) => (
            <Reveal key={item.text} delay={i * 90} className="h-full">
              <div className="group flex h-full flex-col gap-4 rounded-2xl border border-white/[0.07] bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_48px_-20px_rgba(79,109,245,0.35),0_0_0_1px_rgba(79,109,245,0.12)] sm:p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.06] transition-colors duration-300 group-hover:bg-accent/20">
                  <item.icon className="h-5 w-5 text-white/80 transition-colors duration-300 group-hover:text-accent-light" strokeWidth={1.75} />
                </span>
                <p className="text-[15px] leading-relaxed text-white/65">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={360}>
          <div className="flex items-center gap-3 rounded-full border border-accent/20 bg-accent/[0.06] px-6 py-4">
            <ArrowRight className="h-4 w-4 shrink-0 text-accent-light" />
            <p className="text-sm text-white/75 sm:text-base">
              Resultado: cada semana pierdes solicitudes que nunca llegas a
              ver, sin ni siquiera saber que existieron.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
