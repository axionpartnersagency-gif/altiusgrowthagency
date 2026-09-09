import { Cpu, Droplets, Send, TrendingUp, Wrench, Zap } from "lucide-react";

export default function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Ambient glow behind the card */}
      <div
        aria-hidden
        className="absolute -inset-16 -z-10 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(79,109,245,0.25),rgba(34,211,238,0.08)_55%,transparent_75%)] blur-3xl"
      />

      {/* Marcos de esquina, estilo interfaz técnica */}
      <span
        aria-hidden
        className="absolute -left-3 -top-3 hidden h-5 w-5 rounded-tl-lg border-l-2 border-t-2 border-accent/40 sm:block"
      />
      <span
        aria-hidden
        className="absolute -right-3 -top-3 hidden h-5 w-5 rounded-tr-lg border-r-2 border-t-2 border-accent/40 sm:block"
      />
      <span
        aria-hidden
        className="absolute -bottom-3 -left-3 hidden h-5 w-5 rounded-bl-lg border-b-2 border-l-2 border-accent-cyan/30 sm:block"
      />

      {/* Núcleo IA flotante: solo icono, sin texto ni cifras */}
      <div
        aria-hidden
        className="absolute -left-7 -top-7 hidden h-16 w-16 items-center justify-center sm:flex"
      >
        <span className="animate-orbit absolute inset-0 rounded-full border border-dashed border-accent/30" />
        <span className="absolute inset-2 rounded-full border border-dashed border-accent-cyan/20 animate-orbit-reverse" />
        <span className="relative grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-surface/90 shadow-[0_10px_30px_-8px_rgba(79,109,245,0.6)] backdrop-blur">
          <Cpu className="h-4 w-4 text-accent-light" strokeWidth={1.75} />
        </span>
      </div>

      {/* Panel de crecimiento: sparkline abstracta, sin datos inventados */}
      <div
        aria-hidden
        className="absolute -left-10 top-[38%] hidden w-28 items-center gap-2 rounded-2xl border border-white/10 bg-surface/90 p-2.5 shadow-[0_20px_40px_-16px_rgba(0,0,0,0.7)] backdrop-blur lg:flex"
      >
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent/15">
          <TrendingUp className="h-3.5 w-3.5 text-accent-light" strokeWidth={1.75} />
        </span>
        <svg viewBox="0 0 60 24" className="h-6 w-14 text-accent-light" fill="none">
          <polyline
            points="2,20 14,16 24,18 34,9 44,11 58,3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Browser card */}
      <div className="animate-float overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
        <div className="flex items-center gap-3 border-b border-black/5 bg-slate-50 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-900/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-900/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-900/15" />
          </div>
          <div className="mx-auto flex h-6 w-56 items-center justify-center rounded-full bg-white text-[11px] font-medium text-slate-900/40">
            fontaneria-martinez.es
          </div>
        </div>

        <div className="space-y-4 p-5 sm:space-y-6 sm:p-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-md bg-surface text-white">
                <Wrench className="h-3.5 w-3.5" />
              </span>
              <span className="h-2 w-16 rounded-full bg-slate-900/15" />
            </div>
            <div className="hidden gap-4 sm:flex">
              <span className="h-2 w-10 rounded-full bg-slate-900/10" />
              <span className="h-2 w-10 rounded-full bg-slate-900/10" />
              <span className="h-2 w-10 rounded-full bg-slate-900/10" />
            </div>
            <span className="h-6 w-16 rounded-full bg-slate-900/10" />
          </div>

          <div className="grid grid-cols-5 gap-5">
            <div className="col-span-3 flex flex-col justify-center gap-3">
              <span className="h-3 w-3/4 rounded-full bg-slate-900/80" />
              <span className="h-3 w-full rounded-full bg-slate-900/20" />
              <span className="h-3 w-2/3 rounded-full bg-slate-900/20" />
              <span className="mt-2 h-8 w-32 rounded-full bg-accent/90" />
            </div>
            <div className="col-span-2 grid place-items-center rounded-xl bg-gradient-to-br from-accent/15 to-slate-100">
              <Droplets className="h-9 w-9 text-accent" strokeWidth={1.5} />
            </div>
          </div>

          <div className="hidden grid-cols-3 gap-3 sm:grid">
            {[Wrench, Droplets, Zap].map((Icon, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 rounded-xl bg-slate-50 py-4"
              >
                <Icon className="h-4 w-4 text-slate-900/50" strokeWidth={1.75} />
                <span className="h-1.5 w-10 rounded-full bg-slate-900/15" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating chatbot widget */}
      <div className="absolute -bottom-6 -right-3 w-56 rounded-2xl border border-white/10 bg-surface p-3.5 text-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.85)] sm:-bottom-10 sm:-right-8 sm:w-72 sm:p-4">
        <div className="mb-3 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-light opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-light" />
          </span>
          <span className="text-xs font-semibold text-white/80">
            Asistente AltiusGrowth · en línea
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-white/10 px-3 py-2 text-[13px] leading-snug text-white/90">
            Hola 👋 ¿en qué podemos ayudarte hoy?
          </div>
          <div className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-accent px-3 py-2 text-[13px] leading-snug">
            Tengo una fuga en la cocina
          </div>
          <div className="max-w-[90%] rounded-xl rounded-tl-sm bg-white/10 px-3 py-2 text-[13px] leading-snug text-white/90">
            Entendido. Dime tu código postal y te reservamos una visita hoy
            mismo.
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
          <span className="text-[12px] text-white/40">Escribe tu mensaje…</span>
          <span className="ml-auto grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent">
            <Send className="h-3 w-3 text-white" strokeWidth={2.25} />
          </span>
        </div>
      </div>
    </div>
  );
}
