import { BadgeEuro, PackageCheck, ShieldCheck, Wrench } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const points = [
  {
    icon: Wrench,
    text: "Solo para fontanería y electricidad",
  },
  {
    icon: PackageCheck,
    text: "Web, asistente y puesta en marcha incluidos",
  },
  {
    icon: ShieldCheck,
    text: "No necesitas saber de tecnología",
  },
  {
    icon: BadgeEuro,
    text: "Precio cerrado, sin sorpresas",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-white/[0.07] bg-mist/40 py-7">
      <Container>
        <Reveal>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-4 lg:grid-cols-4 lg:gap-y-0">
            {points.map((point) => (
              <li
                key={point.text}
                className="flex items-center gap-2.5 text-sm text-ink/70"
              >
                <point.icon className="h-4 w-4 shrink-0 text-accent-light" strokeWidth={1.75} />
                {point.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
