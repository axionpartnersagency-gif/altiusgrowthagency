import { NextResponse } from "next/server";
import {
  emptyContactForm,
  validateContactForm,
  type ContactFormData,
} from "@/lib/contact-form";

// URL del webhook de Make. El envío pasa por este endpoint (en vez de ir
// directo navegador → Make) porque los webhooks de Make no devuelven
// cabeceras CORS por defecto: una petición directa desde el navegador es
// bloqueada antes de llegar a Make. Una petición servidor → servidor no
// tiene esa restricción.
const MAKE_WEBHOOK_URL =
  "https://hook.eu1.make.com/esaftixd2gjaievoeclb4jtio4jf9u9q";

export async function POST(request: Request) {
  let body: Partial<ContactFormData>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Solicitud inválida." },
      { status: 400 },
    );
  }

  const data: ContactFormData = { ...emptyContactForm, ...body };
  const errors = validateContactForm(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, error: "Hay campos inválidos o incompletos.", errors },
      { status: 400 },
    );
  }

  const payload = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    company: data.company,
    service: data.service,
    message: data.message,
    contactPreference: data.contactPreference,
    privacyAccepted: data.consent,
  };

  try {
    const res = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`Make respondió con estado ${res.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Error al reenviar la solicitud a Make:", error);
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar la solicitud." },
      { status: 502 },
    );
  }
}
