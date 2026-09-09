import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-dark))] text-white shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_10px_30px_-8px_rgba(79,109,245,0.55)] hover:shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_14px_36px_-8px_rgba(79,109,245,0.7)] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-surface text-white ring-1 ring-white/10 hover:bg-black hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "bg-transparent text-ink ring-1 ring-inset ring-ink/15 hover:ring-ink/30 hover:bg-ink/[0.05]",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-[3.25rem] px-7 text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type AsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export default function Button(props: AsButton | AsAnchor) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...rest
  } = props;

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const shine =
    variant === "primary" ? (
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.35),transparent)] transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
    ) : null;

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {shine}
        <span className="relative inline-flex items-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {shine}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </button>
  );
}
