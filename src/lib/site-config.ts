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
  { label: "Qué incluye", href: "#que-incluye" },
  { label: "Precio", href: "#precio" },
  { label: "FAQ", href: "#faq" },
];

export const CTA_PRIMARY = "Quiero conseguir más clientes";
export const CTA_SECONDARY = "Ver cómo funciona";
