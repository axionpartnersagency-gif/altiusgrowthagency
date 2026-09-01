import { Droplets, Send, Wrench, Zap } from "lucide-react";

export default function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Ambient glow behind the card */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[3rem] bg-accent/10 blur-3xl"
      />

      {/* Browser card */}
      <div className="animate-float overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_30px_60px_-25px_rgba(17,17,17,0.35)]">
        <div className="flex items-center gap-3 border-b border-ink/10 bg-mist px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          </div>
          <div className="mx-auto flex h-6 w-56 items-center justify-center rounded-full bg-white text-[11px] font-medium text-ink/40">
            fontaneria-martinez.es
          </div>
        </div>

        <div className="space-y-4 p-5 sm:space-y-6 sm:p-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-md bg-ink text-white">
                <Wrench className="h-3.5 w-3.5" />
              </span>
              <span className="h-2 w-16 rounded-full bg-ink/15" />
            </div>
            <div className="hidden gap-4 sm:flex">
              <span className="h-2 w-10 rounded-full bg-ink/10" />
              <span className="h-2 w-10 rounded-full bg-ink/10" />
              <span className="h-2 w-10 rounded-full bg-ink/10" />
            </div>
            <span className="h-6 w-16 rounded-full bg-ink/10" />
          </div>

          <div className="grid grid-cols-5 gap-5">
            <div className="col-span-3 flex flex-col justify-center gap-3">
              <span className="h-3 w-3/4 rounded-full bg-ink/80" />
              <span className="h-3 w-full rounded-full bg-ink/25" />
              <span className="h-3 w-2/3 rounded-full bg-ink/25" />
              <span className="mt-2 h-8 w-32 rounded-full bg-accent/90" />
            </div>
            <div className="col-span-2 grid place-items-center rounded-xl bg-gradient-to-br from-accent/15 to-mist">
              <Droplets className="h-9 w-9 text-accent" strokeWidth={1.5} />
            </div>
          </div>

          <div className="hidden grid-cols-3 gap-3 sm:grid">
            {[Wrench, Droplets, Zap].map((Icon, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 rounded-xl bg-mist py-4"
              >
                <Icon className="h-4 w-4 text-ink/50" strokeWidth={1.75} />
                <span className="h-1.5 w-10 rounded-full bg-ink/15" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating chatbot widget */}
      <div className="absolute -bottom-6 -right-3 w-56 rounded-2xl bg-ink p-3.5 text-white shadow-[0_25px_50px_-15px_rgba(17,17,17,0.6)] sm:-bottom-10 sm:-right-8 sm:w-72 sm:p-4">
        <div className="mb-3 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-light opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-light" />
          </span>
          <span className="text-xs font-semibold text-white/80">
            Asistente Axion · en línea
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
