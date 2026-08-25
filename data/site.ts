export const siteConfig = {
  name: "Dalgaon Digital Corner",
  shortName: "Dalgaon Digital",
  tagline: "Your Digital Partner for Design, Websites & More.",
  description:
    "Dalgaon Digital Corner helps individuals and businesses in Dalgaon build a strong digital presence through creative design, modern websites, and reliable online services.",
  url: "https://www.dalgaondigitalcorner.com",
  locale: "en_IN",
  keywords: [
    "Dalgaon Digital Corner",
    "digital services Dalgaon",
    "graphic design Dalgaon",
    "website design Dalgaon",
    "logo design",
    "online form filling",
    "digital marketing Assam",
    "mobile services Dalgaon",
  ],
  contact: {
    phone: "[Phone Number]",
    phoneHref: "tel:+910000000000",
    whatsapp: "[WhatsApp Number]",
    whatsappHref: "https://wa.me/910000000000",
    email: "[Email Address]",
    emailHref: "mailto:hello@dalgaondigitalcorner.com",
    address: "[Business Address, Dalgaon, Assam, India]",
    hours: "Mon – Sat: 9:00 AM – 7:00 PM",
  },
  social: {
    facebook: "https://facebook.com/[dalgaondigitalcorner]",
    instagram: "https://instagram.com/[dalgaondigitalcorner]",
    whatsapp: "https://wa.me/910000000000",
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
