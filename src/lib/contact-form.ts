export type ContactPreference = "email" | "telefono";

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  contactPreference: ContactPreference | "";
  consent: boolean;
};

export const emptyContactForm: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
  contactPreference: "",
  consent: false,
};

export const SERVICE_OPTIONS = [
  "Información sobre el Sistema AltiusGrowth",
  "Solicitar una demo",
  "Dudas sobre el precio o el plan",
  "Otro",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Teléfonos españoles: móvil (6/7) o fijo (8/9), 9 dígitos, con o sin
// prefijo +34 / 0034 y con espacios opcionales entre grupos.
const PHONE_REGEX = /^(?:\+34|0034)?[6789]\d{8}$/;

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Indica tu nombre y apellidos.";
  }

  if (!data.email.trim()) {
    errors.email = "Indica tu correo electrónico.";
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Introduce un correo electrónico válido.";
  }

  const normalizedPhone = data.phone.replace(/[\s-]/g, "");
  if (!normalizedPhone) {
    errors.phone = "Indica tu número de teléfono.";
  } else if (!PHONE_REGEX.test(normalizedPhone)) {
    errors.phone = "Introduce un teléfono español válido (9 dígitos).";
  }

  if (!data.service) {
    errors.service = "Selecciona qué servicio necesitas.";
  }

  if (!data.message.trim()) {
    errors.message = "Cuéntanos brevemente qué necesitas.";
  }

  if (!data.contactPreference) {
    errors.contactPreference = "Indica tu preferencia de contacto.";
  }

  if (!data.consent) {
    errors.consent = "Debes aceptar el uso de tus datos para continuar.";
  }

  return errors;
}

export type SubmitResult = { ok: true } | { ok: false; error: string };

/**
 * Envía la solicitud a nuestro propio endpoint (/api/contact), que la
 * reenvía al webhook de n8n desde el servidor. Un envío directo
 * navegador → n8n no es viable: los webhooks de n8n no devuelven
 * cabeceras CORS, así que el navegador bloquea la petición antes de que
 * llegue a n8n.
 */
export async function submitContactForm(
  data: ContactFormData,
): Promise<SubmitResult> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      return {
        ok: false,
        error:
          "No se pudo enviar la solicitud. Inténtalo de nuevo en unos minutos.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error:
        "No se pudo conectar con el servidor. Comprueba tu conexión e inténtalo de nuevo.",
    };
  }
}
