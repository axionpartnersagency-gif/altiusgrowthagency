import {
  ArrowDown,
  ArrowRight,
  MessageSquareWarning,
  MousePointerClick,
  PhoneMissed,
  UserRoundX,
} from "lucide-react";
import { Fragment } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const scenarios = [
  {
    icon: PhoneMissed,
    text: "Te llaman mientras estás debajo de un fregadero. No puedes cogerlo.",
  },
  {
    icon: MessageSquareWarning,
    text: "Te escriben por WhatsApp y no contestas hasta la noche.",
  },
  {
    icon: MousePointerClick,
    text: "Entran en tu web, no ven cómo pedirte presupuesto y se van.",
  },
  {
    icon: UserRoundX,
    text: "Vuelven a Google y llaman al siguiente fontanero o electricista.",
  },
];

// La cadena de lo que pasa con una llamada sin contestar. Sin cifras: el
// argumento es el propio recorrido, que cualquier autónomo reconoce.
const chain = [
  "Una llamada que no puedes coger",
  "El cliente sigue necesitando a alguien",
  "No recibe respuesta",
  "Llama al siguiente que encuentra",
  "Ese trabajo lo hace otro",
];

export default function Problem() {
  return (
    <section id="problema" className="bg-paper py-20 sm:py-32">
      <Container className="flex flex-col gap-12 sm:gap-14">
        <SectionHeading
          tone="light"
          eyebrow="El problema"
          title="Cuando no puedes coger el teléfono, el cliente no espera."
          description="Trabajo hay. El problema es que llega justo cuando tienes las manos ocupadas."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((item, i) => (
            <Reveal key={item.text} delay={i * 90} className="h-full">
              <div className="group flex h-full flex-col gap-4 rounded-2xl border border-white/[0.07] bg-surface p-6 transition-colors duration-300 hover:border-accent/30 sm:p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.06] transition-colors duration-300 group-hover:bg-accent/20">
                  <item.icon className="h-5 w-5 text-white/80 transition-colors duration-300 group-hover:text-accent-light" strokeWidth={1.75} />
                </span>
                <p className="text-[15px] leading-relaxed text-white/75">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="flex flex-col gap-8 rounded-3xl border border-white/[0.08] bg-mist p-6 sm:p-10">
            <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              Lo que pasa con una sola llamada perdida
            </h3>

            <ol className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center lg:gap-3">
              {chain.map((step, i) => {
                const isLast = i === chain.length - 1;
                return (
                  <Fragment key={step}>
                    <li
                      className={`flex-1 rounded-xl border px-4 py-3.5 text-center text-[15px] font-medium leading-snug lg:min-h-[4.5rem] lg:content-center ${
                        isLast
                          ? "border-red-400/30 bg-red-500/10 text-red-200"
                          : "border-white/[0.08] bg-surface text-ink/80"
                      }`}
                    >
                      {step}
                    </li>
                    {!isLast && (
                      <li aria-hidden className="flex justify-center text-ink/30">
                        <ArrowDown className="h-4 w-4 lg:hidden" />
                        <ArrowRight className="hidden h-4 w-4 lg:block" />
                      </li>
                    )}
                  </Fragment>
                );
              })}
            </ol>

            <div className="flex flex-col gap-2 border-t border-white/[0.08] pt-6">
              <p className="text-lg font-semibold text-ink">
                Piensa en lo que cobras por una reparación o una instalación.
              </p>
              <p className="text-[15px] leading-relaxed text-ink/65">
                Eso es lo que se va cada vez que alguien no consigue hablar
                contigo. Y lo peor: nunca sabes cuántas veces ha pasado.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
