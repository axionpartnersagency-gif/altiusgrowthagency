import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

// Responde a "¿y ahora qué tengo que hacer yo?". Todo sale de lo que ya
// explicamos en el FAQ: sin plazos ni garantías que no podamos asegurar.
const steps = [
  {
    number: "01",
    title: "Conocemos tu negocio",
    detail: "Servicios, zonas, horarios y forma de trabajar. Y, si tienes, fotos o logo.",
  },
  {
    number: "02",
    title: "Construimos tu sistema",
    detail: "Web, atención automática y canales de contacto, con tu información.",
  },
  {
    number: "03",
    title: "Lo dejamos funcionando",
    detail: "Configuramos todo para tu negocio. El plazo te lo decimos antes de empezar.",
  },
  {
    number: "04",
    title: "Tú sigues trabajando",
    detail: "Nosotros nos encargamos del mantenimiento del sistema.",
  },
];

export default function Onboarding() {
  return (
    <section id="asi-empieza" className="bg-mist py-20 sm:py-28">
      <Container className="flex flex-col gap-12 sm:gap-14">
        <SectionHeading
          eyebrow="Así empieza"
          title="Tú nos cuentas cómo trabajas. Del resto nos encargamos nosotros."
        />

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.number} className="h-full">
              <Reveal delay={i * 90} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-white/[0.07] bg-surface p-6 sm:p-7">
                  <span className="font-mono text-sm font-bold text-accent-light">
                    {step.number}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink/65">{step.detail}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
