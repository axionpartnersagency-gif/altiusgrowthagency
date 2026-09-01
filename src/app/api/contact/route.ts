import { NextResponse } from "next/server";
import {
  emptyContactForm,
  validateContactForm,
  type ContactFormData,
} from "@/lib/contact-form";

// URL del webhook de n8n. El envío pasa por este endpoint (en vez de ir
// directo navegador → n8n) porque los webhooks de n8n no devuelven
// cabeceras CORS por defecto: una petición directa desde el navegador es
// bloqueada antes de llegar a n8n. Una petición servidor → servidor no
// tiene esa restricción.
// Configurada en axiom-landing/.env.local (variable N8N_CONTACT_WEBHOOK_URL).
// En Vercel debe añadirse la misma variable en Project Settings →
// Environment Variables para que funcione también en producción.
const N8N_WEBHOOK_URL = process.env.N8N_CONTACT_WEBHOOK_URL;

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

  if (!N8N_WEBHOOK_URL) {
    console.log("[contact] N8N_CONTACT_WEBHOOK_URL no configurado todavía. Solicitud recibida:", payload);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`n8n respondió con estado ${res.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Error al reenviar la solicitud a n8n:", error);
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar la solicitud." },
      { status: 502 },
    );
  }
}
