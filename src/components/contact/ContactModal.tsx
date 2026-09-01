"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { useContactModal } from "./ContactModalContext";
import {
  emptyContactForm,
  SERVICE_OPTIONS,
  submitContactForm,
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from "@/lib/contact-form";

const fieldClass =
  "w-full rounded-xl border bg-white px-4 py-2.5 text-[15px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40";

function fieldBorder(hasError: boolean) {
  return hasError ? "border-red-400 focus:border-red-400" : "border-ink/15 focus:border-accent";
}

export default function ContactModal() {
  const { isOpen, close } = useContactModal();
  const panelRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<ContactFormData>(emptyContactForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  // Al cerrar, se resetea tras un pequeño margen para no ver el formulario
  // "en blanco" parpadear mientras la animación de salida todavía se ve.
  useEffect(() => {
    if (isOpen) return;
    const timeout = setTimeout(() => {
      setData(emptyContactForm);
      setErrors({});
      setStatus("idle");
      setSubmitError("");
    }, 300);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  function update<K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const validation = validateContactForm(data);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setStatus("submitting");
    setSubmitError("");

    const result = await submitContactForm(data);
    if (result.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      setSubmitError(result.error);
    }
  }

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        onClick={close}
        aria-hidden="true"
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        tabIndex={-1}
        className={`relative flex max-h-[90vh] w-full max-w-lg flex-col rounded-2xl bg-white shadow-[0_30px_60px_-20px_rgba(17,17,17,0.4)] transition-all duration-300 focus:outline-none ${
          isOpen ? "translate-y-0 scale-100" : "translate-y-3 scale-95"
        }`}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Cerrar"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-ink/50 transition-colors hover:bg-mist hover:text-ink"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8">
          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-accent/10">
                <CheckCircle2 className="h-8 w-8 text-accent" strokeWidth={1.75} />
              </span>
              <h2
                id="contact-modal-title"
                className="font-display text-2xl font-bold text-ink"
              >
                ¡Solicitud enviada!
              </h2>
              <p className="max-w-sm text-[15px] leading-relaxed text-ink/60">
                He recibido tus datos y me pondré en contacto contigo lo antes
                posible.
              </p>
              <Button type="button" variant="ghost" onClick={close} className="mt-2">
                Cerrar
              </Button>
            </div>
          ) : (
            <>
              <h2
                id="contact-modal-title"
                className="font-display text-2xl font-bold tracking-tight text-ink"
              >
                Cuéntanos qué necesitas
              </h2>
              <p className="mt-1.5 text-[15px] text-ink/60">
                Rellena el formulario y te contactamos lo antes posible.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-4">
                <div>
                  <label htmlFor="cf-name" className="mb-1.5 block text-sm font-semibold text-ink">
                    Nombre y apellidos
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    autoComplete="name"
                    value={data.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={`${fieldClass} ${fieldBorder(!!errors.name)}`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="cf-email" className="mb-1.5 block text-sm font-semibold text-ink">
                      Correo electrónico
                    </label>
                    <input
                      id="cf-email"
                      type="email"
                      autoComplete="email"
                      value={data.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={`${fieldClass} ${fieldBorder(!!errors.email)}`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-semibold text-ink">
                      Teléfono
                    </label>
                    <input
                      id="cf-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="600 000 000"
                      value={data.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={`${fieldClass} ${fieldBorder(!!errors.phone)}`}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="cf-company" className="mb-1.5 block text-sm font-semibold text-ink">
                    Empresa o negocio <span className="font-normal text-ink/40">(opcional)</span>
                  </label>
                  <input
                    id="cf-company"
                    type="text"
                    autoComplete="organization"
                    value={data.company}
                    onChange={(e) => update("company", e.target.value)}
                    className={`${fieldClass} ${fieldBorder(false)}`}
                  />
                </div>

                <div>
                  <label htmlFor="cf-service" className="mb-1.5 block text-sm font-semibold text-ink">
                    ¿Qué servicio necesitas?
                  </label>
                  <select
                    id="cf-service"
                    value={data.service}
                    onChange={(e) => update("service", e.target.value)}
                    className={`${fieldClass} ${fieldBorder(!!errors.service)} appearance-none`}
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service}</p>}
                </div>

                <div>
                  <label htmlFor="cf-message" className="mb-1.5 block text-sm font-semibold text-ink">
                    Cuéntame brevemente qué necesitas
                  </label>
                  <textarea
                    id="cf-message"
                    rows={3}
                    value={data.message}
                    onChange={(e) => update("message", e.target.value)}
                    className={`${fieldClass} ${fieldBorder(!!errors.message)} resize-none`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                </div>

                <div>
                  <span className="mb-1.5 block text-sm font-semibold text-ink">
                    Preferencia de contacto
                  </span>
                  <div className="flex gap-5">
                    {(["email", "telefono"] as const).map((option) => (
                      <label
                        key={option}
                        className="flex cursor-pointer items-center gap-2 text-[15px] text-ink/75"
                      >
                        <input
                          type="radio"
                          name="contactPreference"
                          value={option}
                          checked={data.contactPreference === option}
                          onChange={() => update("contactPreference", option)}
                          className="h-4 w-4 accent-accent"
                        />
                        {option === "email" ? "Email" : "Teléfono"}
                      </label>
                    ))}
                  </div>
                  {errors.contactPreference && (
                    <p className="mt-1 text-xs text-red-600">{errors.contactPreference}</p>
                  )}
                </div>

                <div>
                  <label className="flex cursor-pointer items-start gap-2.5 text-sm text-ink/70">
                    <input
                      type="checkbox"
                      checked={data.consent}
                      onChange={(e) => update("consent", e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
                    />
                    Acepto que mis datos sean utilizados para que puedan
                    ponerse en contacto conmigo en relación con mi solicitud.
                  </label>
                  {errors.consent && <p className="mt-1 text-xs text-red-600">{errors.consent}</p>}
                </div>

                {status === "error" && (
                  <p className="rounded-xl bg-red-50 px-4 py-2.5 text-sm text-red-700">
                    {submitError}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                  className="mt-1 w-full"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando…
                    </>
                  ) : (
                    "Enviar solicitud"
                  )}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
