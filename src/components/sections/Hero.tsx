import {
  ArrowRight,
  CalendarCheck2,
  Globe,
  MessageCircle,
  PlayCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ContactTriggerButton from "@/components/contact/ContactTriggerButton";
import HeroMockup from "@/components/ui/HeroMockup";
import Reveal from "@/components/ui/Reveal";
import { CTA_PRIMARY, CTA_SECONDARY } from "@/lib/site-config";

const features = [
  { icon: Globe, label: "Web profesional" },
  { icon: MessageCircle, label: "Chatbot que responde" },
  { icon: CalendarCheck2, label: "Más solicitudes" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-14 sm:pb-32 sm:pt-24 lg:pb-44">
      {/* Fondo: luz difusa + anillos orbitales + nodos conectados. Puramente decorativo. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(79,109,245,0.22),transparent)]"
      />
      <div
        aria-hidden
        className="animate-glow-pulse pointer-events-none absolute -right-40 top-24 -z-10 h-96 w-96 rounded-full bg-accent-cyan/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-72 w-72 rotate-12 bg-[linear-gradient(115deg,rgba(79,109,245,0.10),transparent_60%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[8%] top-[18%] -z-10 hidden h-[420px] w-[420px] rounded-full border border-accent/[0.08] lg:block"
      >
        <div className="animate-orbit absolute inset-0 rounded-full border border-dashed border-accent/[0.14]" />
        <div className="animate-orbit-reverse absolute inset-8 rounded-full border border-dashed border-accent-cyan/[0.12]" />
      </div>
      <svg
        aria-hidden
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -left-10 bottom-0 -z-10 hidden h-[380px] w-[380px] text-accent/[0.16] lg:block"
        fill="none"
      >
        <circle cx="60" cy="300" r="3" fill="currentColor" />
        <circle cx="150" cy="340" r="2.5" fill="currentColor" />
        <circle cx="40" cy="200" r="2" fill="currentColor" />
        <circle cx="180" cy="220" r="3" fill="currentColor" />
        <circle cx="230" cy="120" r="2.5" fill="currentColor" />
        <path
          d="M60 300 L150 340 M60 300 L40 200 M40 200 L180 220 M180 220 L150 340 M180 220 L230 120"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      <Container className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        <div className="flex flex-col items-start gap-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-xs font-medium tracking-wide text-ink/70">
              <Sparkles className="h-3.5 w-3.5 text-accent-light" strokeWidth={2} />
              Para empresas de fontanería y electricidad
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-balance font-display text-[2.75rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-[3.85rem] xl:text-[4.1rem]">
              <span className="text-ink/90">Mientras tú trabajas,</span>{" "}
              <span className="relative inline-block">
                <span aria-hidden className="absolute inset-0 -z-10 select-none blur-2xl">
                  <span className="text-gradient">AltiusGrowth atiende</span>
                </span>
                <span className="text-gradient">AltiusGrowth atiende</span>
              </span>{" "}
              <span className="text-ink/90">a tus clientes.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-balance max-w-xl text-lg leading-relaxed text-ink/65">
              Creamos webs para fontaneros y electricistas con un chatbot de
              IA que responde automáticamente y ayuda a tus clientes a
              solicitar y agendar servicios, incluso cuando estás en obra.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-ink/70 sm:gap-x-0 sm:divide-x sm:divide-white/10">
              {features.map((item) => (
                <li key={item.label} className="flex items-center gap-2 sm:px-4 sm:first:pl-0">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-accent/10">
                    <item.icon className="h-3.5 w-3.5 text-accent-light" strokeWidth={1.75} />
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={240} className="flex flex-col gap-3 sm:flex-row">
            <ContactTriggerButton size="lg">
              {CTA_PRIMARY}
              <ArrowRight className="h-4 w-4" />
            </ContactTriggerButton>
            <Button href="#como-funciona" variant="ghost" size="lg">
              <PlayCircle className="h-4 w-4" />
              {CTA_SECONDARY}
            </Button>
          </Reveal>

          <Reveal delay={320}>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] py-1.5 pl-1.5 pr-4 text-sm text-ink/50">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/[0.05]">
                <ShieldCheck className="h-3.5 w-3.5 text-accent-light" strokeWidth={1.75} />
              </span>
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
