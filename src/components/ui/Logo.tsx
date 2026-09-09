import Image from "next/image";

type LogoProps = {
  className?: string;
};

/**
 * Logotipo real de AltiusGrowth (Propuesta 2 del moodboard de marca),
 * recortado de "logo marca.png" con fondo transparente. Variante clara
 * (isotipo y texto en color ink) para verse sobre el fondo oscuro del
 * header/footer.
 */
export default function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/axiom-logo-light.png"
      alt="AltiusGrowth"
      width={399}
      height={400}
      className={`h-8 w-auto ${className}`}
    />
  );
}
