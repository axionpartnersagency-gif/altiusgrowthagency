import {
  ArrowRight,
  ClipboardCheck,
  Clock,
  PhoneCall,
  PlayCircle,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ContactTriggerButton from "@/components/contact/ContactTriggerButton";
import HeroMockup from "@/components/ui/HeroMockup";
import Reveal from "@/components/ui/Reveal";
import { CTA_PRIMARY, CTA_SECONDARY } from "@/lib/site-config";

const features = [
  { icon: Clock, label: "Atiende 24/7" },
  { icon: ClipboardCheck, label: "Apunta qué necesita" },
  { icon: PhoneCall, label: "Tú llamas al terminar" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-12 sm:pb-32 sm:pt-24 lg:pb-40">
      {/* Fondo: luz difusa muy suave. Puramente decorativo. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(79,109,245,0.22),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-24 -z-10 h-96 w-96 rounded-full bg-accent-cyan/[0.07] blur-[100px]"
      />

      <Container className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        <div className="flex flex-col items-start gap-7 sm:gap-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-xs font-medium tracking-wide text-ink/75">
              <Wrench className="h-3.5 w-3.5 text-accent-light" strokeWidth={2} />
              Para fontaneros y electricistas
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-balance font-display text-[2.6rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-[3.85rem] xl:text-[4.1rem]">
              <span className="text-ink">Deja de perder clientes</span>{" "}
              <span className="text-gradient">mientras estás trabajando.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-balance max-w-xl text-lg leading-relaxed text-ink/70">
              Cuando tienes las manos ocupadas no puedes coger el teléfono. Te
              montamos una web con un asistente que atiende a quien te busca,
              a cualquier hora, apunta qué necesita y te deja la solicitud lista
              para cuando termines.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="flex flex-col gap-3 text-sm font-medium text-ink/75 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-0 sm:gap-y-3 sm:divide-x sm:divide-white/10">
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

          <Reveal delay={240} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <ContactTriggerButton size="lg" className="w-full sm:w-auto">
              {CTA_PRIMARY}
              <ArrowRight className="h-4 w-4" />
            </ContactTriggerButton>
            <Button href="#como-funciona" variant="ghost" size="lg" className="w-full sm:w-auto">
              <PlayCircle className="h-4 w-4" />
              {CTA_SECONDARY}
            </Button>
          </Reveal>

          <Reveal delay={320}>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] py-1.5 pl-1.5 pr-4 text-sm text-ink/60">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/[0.05]">
                <ShieldCheck className="h-3.5 w-3.5 text-accent-light" strokeWidth={1.75} />
              </span>
              Precio cerrado: 1.000 € + 50 €/mes
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
