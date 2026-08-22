import Image from "next/image";

type LogoProps = {
  className?: string;
};

/**
 * Logotipo real de Axion (Propuesta 2 del moodboard de marca),
 * recortado de "logo marca.png" con fondo transparente.
 */
export default function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/axiom-logo.png"
      alt="Axion"
      width={365}
      height={281}
      className={`h-8 w-auto ${className}`}
    />
  );
}
