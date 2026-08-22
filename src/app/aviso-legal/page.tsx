import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal de Axion.",
  alternates: {
    canonical: "/aviso-legal",
  },
};

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso legal" updated="22 de agosto de 2026">
      <p>
        En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la
        Información y de Comercio Electrónico (LSSI-CE), se informa de los
        siguientes datos:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Titular: [Razón social de Axion]</li>
        <li>NIF/CIF: [CIF pendiente de completar]</li>
        <li>Domicilio social: [Dirección fiscal pendiente de completar]</li>
        <li>
          Correo de contacto:{" "}
          <a href={siteConfig.emailHref} className="text-accent underline">
            {siteConfig.email}
          </a>
        </li>
        <li>Registro Mercantil: [Datos de inscripción pendientes]</li>
      </ul>

      <h2>Objeto</h2>
      <p>
        Este sitio web tiene como finalidad presentar los servicios de Axion:
        diseño y desarrollo de páginas web con chatbot de inteligencia
        artificial para empresas de fontanería y electricidad.
      </p>

      <h2>Condiciones de uso</h2>
      <p>
        El acceso y uso de este sitio web atribuye la condición de usuario y
        acepta, desde dicho acceso, las condiciones aquí establecidas. El
        usuario se compromete a hacer un uso adecuado de los contenidos y
        servicios ofrecidos.
      </p>

      <h2>Propiedad intelectual</h2>
      <p>
        Todos los contenidos del sitio (textos, imágenes, marca y diseño) son
        propiedad de Axion o de sus licenciantes, salvo indicación contraria,
        y están protegidos por la normativa de propiedad intelectual e
        industrial.
      </p>

      <h2>Limitación de responsabilidad</h2>
      <p>
        Axion no se hace responsable de los daños derivados del uso
        incorrecto del sitio web ni garantiza la disponibilidad continua del
        mismo, sin perjuicio de las medidas técnicas que se adopten para
        evitar interrupciones.
      </p>

      <h2>Legislación aplicable</h2>
      <p>
        Las presentes condiciones se rigen por la legislación española.
        [Completar con el fuero y jurisdicción aplicables].
      </p>
    </LegalPage>
  );
}
