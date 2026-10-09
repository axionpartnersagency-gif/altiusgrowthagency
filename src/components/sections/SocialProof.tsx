import { BadgeEuro, CalendarClock, MessagesSquare, PlayCircle, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/**
 * Prueba social. SOLO DATOS REALES y con permiso del cliente.
 *
 * - caseStudies: casos reales (cliente → problema → solución → resultado).
 *   El resultado debe ser verificable; si no hay cifra real, descríbelo sin
 *   números.
 * - testimonials: frases literales de clientes.
 *
 * Mientras ambas listas estén vacías, la sección solo muestra los
 * compromisos que ya cumplimos. En cuanto añadas un caso o testimonio,
 * aparece automáticamente encima.
 *
 * Ejemplos:
 * { client: "Fontanería Pérez", city: "Teruel", problem: "…", solution: "…", result: "…" }
 * { quote: "…", name: "Juan Pérez", business: "Fontanería Pérez", city: "Teruel" }
 */
type CaseStudy = {
  client: string;
  city?: string;
  problem: string;
  solution: string;
  result: string;
};

type Testimonial = {
  quote: string;
  name: string;
  business: string;
  city?: string;
};

const caseStudies: CaseStudy[] = [];
const testimonials: Testimonial[] = [];

const commitments = [
  {
    icon: PlayCircle,
    title: "Lo ves funcionando antes",
    detail: "Te enseñamos el sistema en una demo, sin compromiso.",
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
  const hasProof = caseStudies.length > 0 || testimonials.length > 0;

  return (
    <section id="confianza" className="bg-paper py-20 sm:py-28">
      <Container className="flex flex-col gap-12 sm:gap-14">
        <SectionHeading
          eyebrow={hasProof ? "Casos reales" : "Sin sorpresas"}
          title={
            hasProof
              ? "Fontaneros y electricistas que ya lo usan."
              : "Antes de pagar nada, sabes exactamente qué te llevas."
          }
        />

        {caseStudies.length > 0 && (
          <div className="grid gap-5 lg:grid-cols-2">
            {caseStudies.map((c, i) => (
              <Reveal key={c.client} delay={i * 90} className="h-full">
                <article className="flex h-full flex-col gap-4 rounded-2xl border border-white/[0.07] bg-surface p-6 sm:p-7">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {c.client}
                    {c.city ? <span className="font-normal text-ink/55"> · {c.city}</span> : null}
                  </h3>
                  <dl className="flex flex-col gap-3 text-[15px] leading-relaxed">
                    {(
                      [
                        ["Problema", c.problem],
                        ["Solución", c.solution],
                        ["Resultado", c.result],
                      ] as const
                    ).map(([label, value]) => (
                      <div key={label}>
                        <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-accent-light">
                          {label}
                        </dt>
                        <dd className="text-ink/75">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        {testimonials.length > 0 && (
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
        )}

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
      </Container>
    </section>
  );
}
