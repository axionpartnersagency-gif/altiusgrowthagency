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
  const eyebrowColor = tone === "dark" ? "text-accent-light" : "text-accent-light";
  const titleColor = "text-ink";
  const descColor = tone === "dark" ? "text-ink/60" : "text-ink/60";
  const justify = align === "center" ? "justify-center" : "justify-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-5 ${alignClass} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className={`flex items-center gap-2 ${justify}`}>
            <span className="h-px w-6 bg-accent-light/60" />
            <span
              className={`font-mono text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowColor}`}
            >
              {eyebrow}
            </span>
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2
          className={`text-balance font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem] ${titleColor}`}
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
