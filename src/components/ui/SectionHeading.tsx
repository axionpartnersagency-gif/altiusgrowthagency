import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const eyebrowColor = tone === "dark" ? "text-accent" : "text-accent-light";
  const titleColor = tone === "dark" ? "text-ink" : "text-white";
  const descColor = tone === "dark" ? "text-ink/60" : "text-white/65";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span
            className={`text-xs font-bold uppercase tracking-[0.18em] ${eyebrowColor}`}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2
          className={`text-balance font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl ${titleColor}`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p className={`text-balance text-lg leading-relaxed ${descColor}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
