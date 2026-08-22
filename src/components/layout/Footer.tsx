import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { nav, siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-mist">
      <Container className="flex flex-col gap-10 py-14">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="flex max-w-xs flex-col gap-4">
            <Logo />
            <p className="text-sm leading-relaxed text-ink/55">
              Webs con IA para fontaneros y electricistas. Diseñamos el
              sistema que trabaja mientras tú estás en obra.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-ink/40">
                Navegación
              </span>
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-ink/65 transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-ink/40">
                Contacto
              </span>
              <a
                href={siteConfig.emailHref}
                className="text-sm text-ink/65 transition-colors hover:text-ink"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink/65 transition-colors hover:text-ink"
              >
                WhatsApp
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink/65 transition-colors hover:text-ink"
              >
                Instagram
              </a>
              <span className="text-sm text-ink/65">
                Horario: {siteConfig.hours}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-ink/40">
                Legal
              </span>
              <Link
                href="/aviso-legal"
                className="text-sm text-ink/65 transition-colors hover:text-ink"
              >
                Aviso legal
              </Link>
              <Link
                href="/politica-privacidad"
                className="text-sm text-ink/65 transition-colors hover:text-ink"
              >
                Política de privacidad
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-ink/10 pt-6 text-xs text-ink/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Axion. Todos los derechos reservados.</span>
          <span>Hecho para negocios de fontanería y electricidad.</span>
        </div>
      </Container>
    </footer>
  );
}
