import { ArrowRight, CalendarCheck2, Globe, MessageCircle, PlayCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeroMockup from "@/components/ui/HeroMockup";
import Reveal from "@/components/ui/Reveal";
import { CTA_PRIMARY, CTA_SECONDARY } from "@/lib/site-config";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-14 pt-12 sm:pb-28 sm:pt-20 lg:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(37,99,235,0.10),transparent)]"
      />

      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-start gap-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-1.5 text-xs font-semibold text-ink/60">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Para empresas de fontanería y electricidad
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Mientras tú trabajas,{" "}
              <span className="text-accent">Axion atiende</span> a tus
              clientes.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-balance max-w-xl text-lg leading-relaxed text-ink/60">
              Creamos webs para fontaneros y electricistas con un chatbot de
              IA que responde automáticamente y ayuda a tus clientes a
              solicitar y agendar servicios, incluso cuando estás en obra.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-ink/55">
              <li className="flex items-center gap-1.5">
                <Globe className="h-4 w-4 text-accent" strokeWidth={1.75} />
                Web profesional
              </li>
              <li className="flex items-center gap-1.5">
                <MessageCircle className="h-4 w-4 text-accent" strokeWidth={1.75} />
                Chatbot que responde
              </li>
              <li className="flex items-center gap-1.5">
                <CalendarCheck2 className="h-4 w-4 text-accent" strokeWidth={1.75} />
                Más solicitudes
              </li>
            </ul>
          </Reveal>

          <Reveal delay={240} className="flex flex-col gap-3 sm:flex-row">
            <Button href="#precio" size="lg">
              {CTA_PRIMARY}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#como-funciona" variant="ghost" size="lg">
              <PlayCircle className="h-4 w-4" />
              {CTA_SECONDARY}
            </Button>
          </Reveal>

          <Reveal delay={320}>
            <p className="text-sm text-ink/45">
              Implementación 1.000 € · Mantenimiento 149 €/mes
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <HeroMockup />
        </Reveal>
      </Container>
    </section>
  );
}
