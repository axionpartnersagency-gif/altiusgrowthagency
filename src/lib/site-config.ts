// Datos de contacto y enlaces reales de la agencia.
export const siteConfig = {
  name: "AltiusGrowth",
  tagline: "Mientras tú trabajas, AltiusGrowth atiende a tus clientes.",
  url: "https://altiusgrowth.es",
  email: "altiusgrowthagency@gmail.com",
  whatsapp: "34689593756",
  instagram: "https://www.instagram.com/altiusgrowthagency/",
  hours: "09:00–21:00",
  get whatsappHref() {
    return `https://wa.me/${this.whatsapp}`;
  },
  get emailHref() {
    return `mailto:${this.email}`;
  },
};

export const nav = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Demo", href: "#demo" },
  { label: "Qué incluye", href: "#que-incluye" },
  { label: "Precio", href: "#precio" },
  { label: "FAQ", href: "#faq" },
];

// Cada CTA acompaña un momento distinto de la página: no todos dicen lo mismo.
export const CTA_PRIMARY = "Quiero dejar de perder solicitudes";
export const CTA_SECONDARY = "Ver cómo funciona";
export const CTA_INFO = "Solicitar información";
export const CTA_TALK = "Hablar con AltiusGrowth";
