import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad de Axion.",
  alternates: {
    canonical: "/politica-privacidad",
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad" updated="22 de agosto de 2026">
      <h2>Responsable del tratamiento</h2>
      <p>
        [Razón social de Axion], con NIF [pendiente], es responsable del
        tratamiento de los datos personales facilitados a través de este
        sitio web y del chatbot de contacto.
      </p>

      <h2>Datos que recogemos</h2>
      <p>
        A través de los formularios de contacto y del chatbot podemos
        recoger: nombre, teléfono, correo electrónico, dirección y una
        descripción del servicio solicitado.
      </p>

      <h2>Finalidad</h2>
      <p>
        Los datos se utilizan para responder a tus consultas, gestionar
        solicitudes de servicio o de información sobre el Sistema Axion, y
        realizar el seguimiento comercial correspondiente.
      </p>

      <h2>Legitimación</h2>
      <p>
        La base legal para el tratamiento es el consentimiento del usuario al
        rellenar el formulario o iniciar una conversación con el chatbot, y
        el interés legítimo de responder a su solicitud.
      </p>

      <h2>Conservación</h2>
      <p>
        Los datos se conservarán mientras exista una relación comercial o
        interés mutuo, y posteriormente durante los plazos legalmente
        exigibles, [completar con la política de conservación real].
      </p>

      <h2>Destinatarios</h2>
      <p>
        No se ceden datos a terceros salvo obligación legal. [Completar si se
        utilizan proveedores externos como hosting, CRM o herramientas de
        chatbot que actúen como encargados del tratamiento].
      </p>

      <h2>Derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, supresión,
        oposición, limitación y portabilidad escribiendo a{" "}
        <a href={siteConfig.emailHref} className="text-accent underline">
          {siteConfig.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
