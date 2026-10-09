import { BadgeEuro, CalendarClock, MessagesSquare, PlayCircle, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/**
 * Prueba social. Solo datos REALES: añade aquí testimonios de clientes
 * cuando los tengas (con su permiso). Mientras la lista esté vacía, la
 * sección muestra los compromisos que ya cumplimos en lugar de testimonios.
 *
 * Ejemplo:
 * { quote: "…", name: "Juan Pérez", business: "Fontanería Pérez", city: "Murcia" }
 */
type Testimonial = {
  quote: string;
  name: string;
  business: string;
  city?: string;
};

const testimonials: Testimonial[] = [];

const commitments = [
  {
    icon: PlayCircle,
    title: "Lo ves funcionando antes",
    detail: "Te enseñamos el asistente en una demo, sin compromiso.",
  },
  {
    icon: BadgeEuro,
    title: "Precio cerrado",
    detail: "1.000 € + 50 €/mes. Sabes lo que pagas antes de empezar.",
  },
  {
    icon: CalendarClock,
    title: "Plazo claro",
    detail: "Te decimos cuándo estará listo antes de empezar.",
  },
  {
    icon: MessagesSquare,
    title: "Trato directo",
    detail: "Hablas con quien monta tu sistema, por WhatsApp o teléfono.",
  },
];

export default function SocialProof() {
  const hasTestimonials = testimonials.length > 0;

  return (
    <section id="confianza" className="bg-paper py-20 sm:py-28">
      <Container className="flex flex-col gap-12 sm:gap-14">
        <SectionHeading
          eyebrow={hasTestimonials ? "Clientes" : "Sin sorpresas"}
          title={
            hasTestimonials
              ? "Lo que dicen fontaneros y electricistas que ya lo usan."
              : "Antes de pagar nada, sabes exactamente qué te llevas."
          }
        />

        {hasTestimonials ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90} className="h-full">
                <figure className="flex h-full flex-col gap-5 rounded-2xl border border-white/[0.07] bg-surface p-6 sm:p-7">
                  <Quote className="h-5 w-5 text-accent-light" strokeWidth={1.75} />
                  <blockquote className="flex-1 text-[15px] leading-relaxed text-ink/80">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="text-sm">
                    <span className="block font-semibold text-ink">{t.name}</span>
                    <span className="text-ink/55">
                      {t.business}
                      {t.city ? ` · ${t.city}` : ""}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="h-full">
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/[0.07] bg-surface p-6 sm:p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10">
                    <item.icon className="h-5 w-5 text-accent-light" strokeWidth={1.75} />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-[15px] font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink/65">{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
