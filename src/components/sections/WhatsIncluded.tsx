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
    detail: "Diseñada para tu negocio, rápida y orientada a conversión.",
  },
  {
    icon: Smartphone,
    title: "Diseño responsive",
    detail: "Perfecta en el móvil, que es donde te van a encontrar.",
  },
  {
    icon: PenLine,
    title: "Copy que convierte",
    detail: "Textos pensados para que el visitante dé el siguiente paso.",
  },
  {
    icon: Bot,
    title: "Chatbot de IA 24/7",
    detail: "Responde preguntas frecuentes en cualquier momento del día.",
  },
  {
    icon: UserCheck,
    title: "Recogida de datos",
    detail: "Nombre, contacto y necesidad, listos para que tú los gestiones.",
  },
  {
    icon: CalendarClock,
    title: "Solicitud y agendamiento",
    detail: "Integrado con tu calendario para reservar citas directamente.",
  },
  {
    icon: Phone,
    title: "WhatsApp y contacto directo",
    detail: "Un canal más para el cliente que prefiere escribirte ya.",
  },
  {
    icon: Rocket,
    title: "Configuración y puesta en marcha",
    detail: "Nos encargamos de todo hasta dejarlo funcionando.",
  },
];

export default function WhatsIncluded() {
  return (
    <section id="que-incluye" className="bg-paper py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Qué incluye"
          title="El Sistema AltiusGrowth, completo desde el primer día."
          description="Todo lo necesario para pasar de una web que no convierte a un sistema que capta y organiza clientes por ti."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 90} className="h-full">
              <div className="group flex h-full flex-col gap-4 rounded-2xl border border-white/[0.07] bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_48px_-20px_rgba(79,109,245,0.35),0_0_0_1px_rgba(79,109,245,0.12)] sm:p-7">
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
                  <p className="text-sm leading-relaxed text-ink/55">
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
