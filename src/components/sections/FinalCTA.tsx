import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { CTA_PRIMARY, siteConfig } from "@/lib/site-config";

export default function FinalCTA() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-accent py-24 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(255,255,255,0.16),transparent)]"
      />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <h2 className="text-balance max-w-3xl font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
            Mientras tú haces el trabajo, Axion se encarga de que no se te
            escapen oportunidades.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="max-w-xl text-balance text-lg text-white/85">
            Cuéntanos cómo trabajas hoy y te explicamos, sin compromiso, cómo
            quedaría tu sistema Axion.
          </p>
        </Reveal>

        <Reveal delay={180} className="flex flex-col items-center gap-4 sm:flex-row">
          <Button
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="bg-ink shadow-[0_8px_20px_-6px_rgba(0,0,0,0.4)] hover:bg-black hover:shadow-[0_10px_24px_-6px_rgba(0,0,0,0.5)]"
          >
            {CTA_PRIMARY}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>

        <Reveal delay={240}>
          <div className="flex flex-col items-center gap-3 text-sm text-white/75 sm:flex-row sm:gap-6">
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
            <a
              href={siteConfig.emailHref}
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
