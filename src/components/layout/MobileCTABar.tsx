"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import ContactTriggerButton from "@/components/contact/ContactTriggerButton";
import { CTA_INFO, siteConfig } from "@/lib/site-config";

/**
 * Barra de contacto fija solo en móvil: aparece al pasar el hero para que el
 * CTA quede siempre al alcance del pulgar, y se oculta al llegar al cierre
 * (#contacto), donde ya hay botones grandes.
 */
export default function MobileCTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.8;
      const contact = document.getElementById("contacto");
      const atContact = contact
        ? contact.getBoundingClientRect().top < window.innerHeight
        : false;
      setVisible(pastHero && !atContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.08] bg-paper/90 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3">
        <ContactTriggerButton size="md" className="flex-1">
          {CTA_INFO}
        </ContactTriggerButton>
        <a
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribir por WhatsApp"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-ink ring-1 ring-inset ring-ink/15 transition-colors hover:bg-ink/[0.05]"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
