import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// El logo real de Axion (Propuesta 2) tiene texto en negro, pensado para
// fondos claros. Se lee una sola vez a nivel de módulo (valor predecible,
// no depende de la request) y se muestra sobre una placa clara para que
// mantenga contraste dentro de la tarjeta oscura.
const logoData = await readFile(
  join(process.cwd(), "public", "axiom-logo.png"),
  "base64",
);
const logoSrc = `data:image/png;base64,${logoData}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#111111",
          backgroundImage:
            "radial-gradient(circle at 78% 22%, rgba(37,99,235,0.45), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#ffffff",
            borderRadius: 16,
            padding: "14px 22px",
            alignSelf: "flex-start",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse (next/og) renderiza con Satori, no en el DOM: next/image no es válido aquí, <img> es el patrón oficial de Next.js */}
          <img src={logoSrc} width={73} height={56} alt="Axion" />
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 56,
            fontSize: 58,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 900,
          }}
        >
          Mientras tú trabajas, Axion atiende a tus clientes.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 26,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 780,
          }}
        >
          Webs con chatbot de IA para fontaneros y electricistas.
        </div>
      </div>
    ),
    { ...size },
  );
}
