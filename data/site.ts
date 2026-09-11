export const siteConfig = {
  name: "Dalgaon Digital Corner",
  shortName: "Dalgaon Digital",
  tagline: "Your Digital Partner for Design, Websites & More.",
  description:
    "Dalgaon Digital Corner helps individuals and businesses build a strong digital presence through creative design, modern websites, and reliable online services.",
  url: "https://www.dalgaondigitalcorner.com",
  locale: "en_IN",
  keywords: [
    "Dalgaon Digital Corner",
    "digital services Dalgaon",
    "graphic design Dalgaon",
    "website design Dalgaon",
    "logo design",
    "online form filling",
    "digital marketing Dalgaon",
    "mobile services Dalgaon",
  ],
  contact: {
    phone: "7063818927",
    phoneHref: "tel:+917063818927",
    whatsapp: "7063818927",
    whatsappHref: "https://wa.me/917063818927",
    email: "dalgaondc@gmail.com",
    emailHref: "mailto:dalgaondc@gmail.com",
    address: "Dalgaon, Rango Forest, Jaldhaka, Kalimpong, India - 734503",
    hours: "Mon – Sat: 9:00 AM – 7:00 PM",
  },
  social: {
    facebook: "#",
    instagram: "#",
    whatsapp: "https://wa.me/917063818927",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerServiceLinks = [
  { label: "Design Services", href: "/services#design" },
  { label: "Website Design & Development", href: "/services#websites" },
  { label: "Online & Digital Services", href: "/services#online" },
  { label: "Mobile Services", href: "/services#mobile" },
] as const;
