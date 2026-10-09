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

const items = [
  {
    icon: Globe,
    title: "Web profesional",
    detail: "Que dé confianza y deje claro qué haces y dónde trabajas.",
  },
  {
    icon: Smartphone,
    title: "Pensada para el móvil",
    detail: "Tus clientes te buscan desde el móvil. Ahí se ve y funciona bien.",
  },
  {
    icon: PenLine,
    title: "Textos que piden la acción",
    detail: "Escritos para que el visitante te pida presupuesto, no solo para que mire.",
  },
  {
    icon: Bot,
    title: "Asistente 24/7",
    detail: "Responde las preguntas de siempre a cualquier hora, también de noche.",
  },
  {
    icon: UserCheck,
    title: "Datos del cliente, listos",
    detail: "Nombre, teléfono y qué necesita. Llamas sabiendo de qué va.",
  },
  {
    icon: CalendarClock,
    title: "Citas en tu calendario",
    detail: "El cliente puede reservar hueco directamente en tu agenda.",
  },
  {
    icon: Phone,
    title: "WhatsApp y contacto directo",
    detail: "Para el cliente que prefiere escribirte directamente.",
  },
  {
    icon: Rocket,
    title: "Lo montamos nosotros",
    detail: "Te lo dejamos funcionando. Tú no tocas nada técnico.",
  },
];

export default function WhatsIncluded() {
  return (
    <section id="que-incluye" className="bg-paper py-20 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Qué incluye"
          title="Todo lo que necesitas, montado y funcionando."
          description="No te damos una herramienta para que la configures tú. Te entregamos el sistema hecho."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 90} className="h-full">
              <div className="group flex h-full flex-col gap-4 rounded-2xl border border-white/[0.07] bg-surface p-6 transition-colors duration-300 hover:border-accent/30 sm:p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-paper transition-colors duration-300 group-hover:bg-accent/20">
                  <item.icon
                    className="h-5 w-5 text-ink/70 transition-colors duration-300 group-hover:text-accent-light"
                    strokeWidth={1.75}
                  />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-[15px] font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/65">
                    {item.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
