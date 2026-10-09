import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ContactTriggerButton from "@/components/contact/ContactTriggerButton";
import Reveal from "@/components/ui/Reveal";
import { CTA_TALK, siteConfig } from "@/lib/site-config";

export default function FinalCTA() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-[linear-gradient(160deg,var(--color-accent),var(--color-accent-dark))] py-20 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(255,255,255,0.18),transparent)]"
      />
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 opacity-40"
      />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <h2 className="text-balance max-w-3xl font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
            El próximo cliente que no puedas atender no tiene por qué irse con
            otro.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="max-w-xl text-balance text-lg text-white/90">
            Cuéntanos cómo trabajas hoy y te explicamos, sin compromiso, cómo
            quedaría en tu negocio.
          </p>
        </Reveal>

        <Reveal delay={180} className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <ContactTriggerButton
            size="lg"
            className="w-full bg-none! bg-surface shadow-[0_8px_20px_-6px_rgba(0,0,0,0.4)] hover:bg-black hover:shadow-[0_10px_24px_-6px_rgba(0,0,0,0.5)] sm:w-auto"
          >
            {CTA_TALK}
            <ArrowRight className="h-4 w-4" />
          </ContactTriggerButton>
          <Button
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="lg"
            className="w-full text-white! ring-white/40! hover:bg-white/10! hover:ring-white/70! sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            Escribir por WhatsApp
          </Button>
        </Reveal>

        <Reveal delay={240}>
          <a
            href={siteConfig.emailHref}
            className="-my-2 inline-flex items-center gap-1.5 py-2 text-sm text-white/80 hover:text-white"
          >
            <Mail className="h-4 w-4" />
            {siteConfig.email}
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
