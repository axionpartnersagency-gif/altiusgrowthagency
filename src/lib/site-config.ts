// Datos de contacto y enlaces reales de la agencia.
// TODO: sustituir los valores marcados como PENDIENTE por los datos reales de Axion.
export const siteConfig = {
  name: "Axion",
  tagline: "Mientras tú trabajas, Axion atiende a tus clientes.",
  // PENDIENTE: dominio real de producción. ".example" es el TLD reservado
  // (RFC 2606) para valores de ejemplo, así que es imposible confundirlo
  // con un dominio real. Sustituir por el dominio definitivo (con https://)
  // en cuanto se decida — alimenta metadataBase, Open Graph, canonical,
  // robots.txt y sitemap.xml.
  url: "https://dominio-pendiente.example",
  email: "axionpartnersagency@gmail.com",
  whatsapp: "34689593756",
  instagram: "https://www.instagram.com/axionpartnersagency/",
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
