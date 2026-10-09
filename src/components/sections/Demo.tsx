"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ClipboardCheck, RotateCcw } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ContactTriggerButton from "@/components/contact/ContactTriggerButton";
import { CTA_PRIMARY } from "@/lib/site-config";

/**
 * Demo interactiva: SIMULACIÓN en el navegador con un guion fijo y datos
 * ficticios. No hay IA conectada ni se envía nada a ningún sitio; así se
 * indica en la propia sección. Sirve para que el visitante vea el recorrido
 * de un cliente y la solicitud que queda recogida al final.
 */

type Field = "servicio" | "localidad" | "detalle" | "llamada" | "telefono";

type Step = {
  field: Field;
  question: string;
  options: string[];
};

const FIELD_LABELS: Record<Field, string> = {
  servicio: "Qué necesita",
  localidad: "Localidad",
  detalle: "Detalle",
  llamada: "Cuándo llamarle",
  telefono: "Teléfono",
};

const FIRST_STEP: Step = {
  field: "servicio",
  question: "Hola, soy el asistente de Instalaciones Martínez. ¿En qué podemos ayudarte?",
  options: ["Tengo una fuga de agua", "Se me ha ido la luz", "Quiero pedir presupuesto"],
};

// La tercera pregunta depende de lo que haya contestado el cliente.
const DETAIL_STEP: Record<string, Step> = {
  "Tengo una fuga de agua": {
    field: "detalle",
    question: "¿La fuga sigue activa ahora mismo?",
    options: ["Sí, sigue saliendo agua", "No, ya he cerrado la llave"],
  },
  "Se me ha ido la luz": {
    field: "detalle",
    question: "¿Se ha ido en toda la casa o solo en una parte?",
    options: ["En toda la casa", "Solo en una parte"],
  },
  "Quiero pedir presupuesto": {
    field: "detalle",
    question: "¿Qué trabajo necesitas?",
    options: ["Cambiar el termo", "Revisar la instalación eléctrica", "Reformar el baño"],
  },
};

function stepsFor(servicio: string | undefined): Step[] {
  return [
    FIRST_STEP,
    {
      field: "localidad",
      question: "Entendido. ¿En qué localidad necesitas el servicio?",
      options: ["Teruel", "Zaragoza", "Otra localidad"],
    },
    DETAIL_STEP[servicio ?? ""] ?? DETAIL_STEP["Quiero pedir presupuesto"],
    {
      field: "llamada",
      question: "¿Cuándo te viene bien que te llamen?",
      options: ["Lo antes posible", "Esta tarde", "Mañana por la mañana"],
    },
    {
      field: "telefono",
      question: "Por último, ¿a qué teléfono te llamamos?",
      options: ["600 000 000"],
    },
  ];
}

const DONE_MESSAGE =
  "Perfecto. Hemos recogido la información necesaria para que el profesional pueda ponerse en contacto contigo.";

type Message = { from: "bot" | "client"; text: string };

export default function Demo() {
  const [answers, setAnswers] = useState<Partial<Record<Field, string>>>({});
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: FIRST_STEP.question },
  ]);
  const [typing, setTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const steps = stepsFor(answers.servicio);
  const stepIndex = Object.keys(answers).length;
  const current = steps[stepIndex];
  const finished = stepIndex >= steps.length;

  // Desplaza solo la caja del chat, nunca la página.
  useEffect(() => {
    const box = chatRef.current;
    if (box) box.scrollTo({ top: box.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function answer(option: string) {
    if (!current || typing) return;
    const nextAnswers = { ...answers, [current.field]: option };
    const nextSteps = stepsFor(nextAnswers.servicio);
    const next = nextSteps[Object.keys(nextAnswers).length];

    setAnswers(nextAnswers);
    setMessages((prev) => [...prev, { from: "client", text: option }]);
    setTyping(true);
    timeoutRef.current = window.setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: next ? next.question : DONE_MESSAGE }]);
      setTyping(false);
    }, 650);
  }

  function reset() {
    window.clearTimeout(timeoutRef.current);
    setAnswers({});
    setMessages([{ from: "bot", text: FIRST_STEP.question }]);
    setTyping(false);
  }

  const fields = Object.keys(FIELD_LABELS) as Field[];

  return (
    <section id="demo" className="bg-paper py-20 sm:py-32">
      <Container className="flex flex-col gap-12 sm:gap-14">
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Prueba cómo funciona"
          title="Ponte en el lugar de tu cliente."
          description="Elige las respuestas como si tuvieras una avería y mira cómo se rellena la solicitud que queda para el profesional."
        />

        <Reveal className="mx-auto grid w-full max-w-5xl gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Chat */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-surface">
            <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] px-4 py-3 sm:px-5">
              <div className="flex min-w-0 items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent-light" />
                <span className="truncate text-sm font-semibold text-ink">
                  Instalaciones Martínez
                </span>
              </div>
              <span className="shrink-0 rounded-full bg-white/[0.06] px-2.5 py-1 font-mono text-[11px] text-ink/60">
                Simulación
              </span>
            </div>

            <div
              ref={chatRef}
              aria-live="polite"
              className="flex h-[22rem] flex-col gap-2.5 overflow-y-auto px-4 py-5 sm:h-[24rem] sm:px-5"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[15px] leading-snug ${
                    m.from === "bot"
                      ? "rounded-tl-sm bg-white/[0.07] text-ink/90"
                      : "ml-auto rounded-tr-sm bg-accent text-white"
                  }`}
                >
                  {m.text}
                </div>
              ))}
              {typing && (
                <div className="w-fit rounded-2xl rounded-tl-sm bg-white/[0.07] px-3.5 py-2.5 text-sm text-ink/50">
                  Escribiendo…
                </div>
              )}
            </div>

            <div className="border-t border-white/[0.08] p-3 sm:p-4">
              {!finished && current ? (
                <div className="flex flex-wrap gap-2">
                  {current.options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      disabled={typing}
                      onClick={() => answer(option)}
                      className="min-h-11 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent-light transition-colors hover:bg-accent/20 disabled:opacity-50"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : (
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-ink/70 ring-1 ring-inset ring-ink/15 transition-colors hover:bg-ink/[0.05] hover:text-ink"
                >
                  <RotateCcw className="h-4 w-4" />
                  Repetir la prueba
                </button>
              )}
            </div>
          </div>

          {/* Solicitud recogida */}
          <div className="flex flex-col gap-5 rounded-2xl border border-white/[0.08] bg-mist p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10">
                <ClipboardCheck className="h-5 w-5 text-accent-light" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-ink">
                  Solicitud recogida
                </h3>
                <p className="text-sm text-ink/55">Lo que tienes cuando terminas el trabajo</p>
              </div>
            </div>

            <dl className="flex flex-col divide-y divide-white/[0.06]">
              {fields.map((field) => (
                <div key={field} className="flex items-baseline justify-between gap-4 py-2.5">
                  <dt className="shrink-0 text-sm text-ink/55">{FIELD_LABELS[field]}</dt>
                  <dd
                    className={`text-right text-sm font-semibold ${
                      answers[field] ? "text-ink" : "text-ink/25"
                    }`}
                  >
                    {answers[field] ?? "—"}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-auto text-sm leading-relaxed text-ink/65">
              {finished
                ? "Cuando vuelves a estar disponible, ya sabes quién te ha contactado y qué necesita."
                : "Responde en el chat y mira cómo se completa."}
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col items-center gap-3 text-center">
          <ContactTriggerButton size="lg" className="w-full sm:w-auto">
            {CTA_PRIMARY}
            <ArrowRight className="h-4 w-4" />
          </ContactTriggerButton>
          <p className="max-w-md text-xs text-ink/45">
            Demostración con un negocio y datos ficticios. No se envía ninguna
            información.
          </p>
        </div>
      </Container>
    </section>
  );
}
