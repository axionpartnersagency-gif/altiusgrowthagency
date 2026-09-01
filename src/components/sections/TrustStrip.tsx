import { BadgeEuro, PackageCheck, ShieldCheck, Wrench } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const points = [
  {
    icon: Wrench,
    text: "Hecho solo para fontanería y electricidad",
  },
  {
    icon: PackageCheck,
    text: "Todo incluido: web, chatbot y puesta en marcha",
  },
  {
    icon: ShieldCheck,
    text: "Sin conocimientos técnicos necesarios",
  },
  {
    icon: BadgeEuro,
    text: "Precio cerrado, sin sorpresas",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-ink/10 bg-paper py-6">
      <Container>
        <Reveal>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-4 lg:grid-cols-4 lg:gap-y-0">
            {points.map((point) => (
              <li
                key={point.text}
                className="flex items-center gap-2.5 text-sm text-ink/60"
              >
                <point.icon className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
                {point.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
