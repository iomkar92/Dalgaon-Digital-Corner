import {
  Palette,
  Globe,
  Laptop,
  Smartphone,
} from "lucide-react";
import type { FaqItem, Service, ServiceCategory } from "@/types/services";

export const categories: ServiceCategory[] = [
  {
    slug: "design",
    title: "Design Services",
    shortTitle: "Design",
    emoji: "🎨",
    icon: Palette,
    description:
      "Logos, print, and social media designs that give your brand a clean, professional look.",
  },
  {
    slug: "websites",
    title: "Website Design & Development",
    shortTitle: "Websites",
    emoji: "🌐",
    icon: Globe,
    description:
      "Modern, mobile-friendly websites for businesses, portfolios, and online stores.",
  },
  {
    slug: "online",
    title: "Online & Digital Services",
    shortTitle: "Online Services",
    emoji: "💻",
    icon: Laptop,
    description:
      "Form filling, applications, document work, and digital marketing handled for you.",
  },
  {
    slug: "mobile",
    title: "Mobile Services",
    shortTitle: "Mobile",
    emoji: "📱",
    icon: Smartphone,
    description:
      "Hands-on help setting up, configuring, and getting the most from your phone.",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

const defaultProcess = [
  {
    title: "Tell Us What You Need",
    description:
      "Share your requirement in person, by phone, or on WhatsApp. We ask a few quick questions to understand exactly what you're after.",
  },
  {
    title: "We Plan & Create",
    description:
      "We put together a plan or first draft, using the details you've shared as the starting point.",
  },
  {
    title: "Review & Refine",
    description:
      "You review the work and tell us what to adjust. We refine it until it matches what you had in mind.",
  },
  {
    title: "Deliver",
    description:
      "Once you're happy with it, we hand over the final files or complete the task, ready to use.",
  },
];

function baseFaq(title: string, categoryTitle: string): FaqItem[] {
  return [
    {
      question: `How long does ${title} usually take?`,
      answer:
        "Turnaround depends on the scope of the work and how quickly we hear back from you during review. We'll give you a clear estimate before we start.",
    },
    {
      question: "Do I need to visit in person?",
      answer:
        "Not necessarily. Many requests can be handled over phone or WhatsApp, though you're always welcome to visit us in person.",
    },
    {
      question: `Is ${title} suitable for individuals and businesses?`,
      answer: `Yes. ${title} is part of our ${categoryTitle} and is offered to both individual customers and local businesses.`,
    },
  ];
}

/** Builds sensible, non-generic detail content for a service from its title/category. */
function buildService(
  partial: Pick<Service, "slug" | "title" | "category" | "description" | "featured"> &
    Partial<Pick<Service, "longDescription" | "whatWeOffer" | "benefits" | "suitableFor" | "faq" | "process">>
): Service {
  const category = getCategory(partial.category)!;
  return {
    longDescription: `${partial.title} from Dalgaon Digital Corner, part of our ${category.title.toLowerCase()}. ${partial.description} We work closely with you from the first conversation to the final delivery, so the result matches what you actually need.`,
    whatWeOffer: [
      `A clear, no-obligation conversation about your ${partial.title.toLowerCase()} requirement`,
      "Work based on your inputs, references, or existing materials",
      "One or more rounds of revisions until you're satisfied",
      "Final files or completed task delivered in a usable format",
    ],
    benefits: [
      "Saves you time and effort",
      "Professional, presentable result",
      "Local support you can follow up with easily",
      "Fair, transparent pricing discussed upfront",
    ],
    suitableFor: [
      "Individuals handling personal requirements",
      "Small and growing local businesses",
      "Students and job seekers",
      "Anyone who wants it done right without the hassle",
    ],
    process: defaultProcess,
    faq: baseFaq(partial.title, category.title),
    ...partial,
  };
}

export const services: Service[] = [
  // ---------------- Design Services ----------------
  buildService({
    slug: "logo-design",
    title: "Logo Design",
    category: "design",
    description:
      "A distinctive logo designed around your business name, work, and personality — delivered in formats ready for print and digital use.",
    featured: true,
    whatWeOffer: [
      "Initial concepts based on your business and preferences",
      "Revisions until the logo feels right",
      "Final files in formats suitable for web, print, and signage",
      "Basic usage guidance (colours, spacing) on request",
    ],
    benefits: [
      "A consistent, recognisable identity across your shop, packaging, and online pages",
      "A logo that looks professional on both a signboard and a phone screen",
      "Ownership of the final files, ready whenever you need them",
    ],
    suitableFor: [
      "New businesses that need a first logo",
      "Existing businesses refreshing an old or informal logo",
      "Shops, home businesses, and service providers",
    ],
  }),
  buildService({
    slug: "business-card-design",
    title: "Business Card Design",
    category: "design",
    description:
      "Clean, print-ready business cards that put your name, role, and contact details in front of the right people.",
  }),
  buildService({
    slug: "poster-banner-design",
    title: "Poster & Banner Design",
    category: "design",
    description:
      "Eye-catching posters and banners for shop openings, events, offers, and announcements.",
  }),
  buildService({
    slug: "flyer-brochure-design",
    title: "Flyer & Brochure Design",
    category: "design",
    description:
      "Well-organised flyers and brochures that explain your products or services clearly, ready to print or share digitally.",
  }),
  buildService({
    slug: "social-media-post-design",
    title: "Social Media Post Design",
    category: "design",
    description:
      "Ready-to-post graphics for Facebook, Instagram, and WhatsApp Status, sized correctly for each platform.",
    featured: true,
    benefits: [
      "Posts that look consistent with your brand every time",
      "Correct sizing for each platform, no cropping issues",
      "Faster turnaround than designing posts yourself",
    ],
  }),
  buildService({
    slug: "invitation-card-design",
    title: "Invitation Card Design",
    category: "design",
    description:
      "Custom invitation cards for weddings, ceremonies, and celebrations, in print or shareable digital format.",
  }),
  buildService({
    slug: "id-card-design",
    title: "ID Card Design",
    category: "design",
    description:
      "Clean ID card layouts for schools, coaching centres, shops, and organisations, ready for printing.",
  }),
  buildService({
    slug: "certificate-design",
    title: "Certificate Design",
    category: "design",
    description:
      "Professional certificate templates for courses, competitions, and events, with space for names and details.",
  }),
  buildService({
    slug: "menu-price-list-design",
    title: "Menu & Price List Design",
    category: "design",
    description:
      "Easy-to-read menus and price lists for restaurants, stalls, and shops, designed to print or display digitally.",
  }),
  buildService({
    slug: "photo-editing",
    title: "Photo Editing",
    category: "design",
    description:
      "Background removal, retouching, and basic corrections for personal, product, or business photos.",
  }),

  // ---------------- Website Design & Development ----------------
  buildService({
    slug: "business-website",
    title: "Business Website Design",
    category: "websites",
    description:
      "A professional multi-page website that presents your business, services, and contact details clearly to visitors.",
    featured: true,
    whatWeOffer: [
      "A structured multi-page site (home, about, services, contact, and more as needed)",
      "Mobile-friendly, fast-loading design",
      "Basic on-page SEO so your business can be found on search engines",
      "Guidance on domain and hosting setup",
    ],
    benefits: [
      "A place customers can find you outside business hours",
      "More credibility than a social media page alone",
      "Room to grow — pages and sections can be added later",
    ],
  }),
  buildService({
    slug: "portfolio-website",
    title: "Personal/Portfolio Websites",
    category: "websites",
    description:
      "A simple, well-organised site to showcase your work, resume, or projects to clients and employers.",
  }),
  buildService({
    slug: "ecommerce-website",
    title: "E-commerce Websites",
    category: "websites",
    description:
      "An online store where customers can browse your products and place orders directly.",
  }),
  buildService({
    slug: "landing-pages",
    title: "Landing Pages",
    category: "websites",
    description:
      "A single, focused page built around one offer, event, or campaign to convert visitors into enquiries.",
  }),
  buildService({
    slug: "website-redesign",
    title: "Website Redesign",
    category: "websites",
    description:
      "A refreshed, modern look and improved structure for a website that feels outdated or hard to use.",
  }),
  buildService({
    slug: "domain-hosting-setup",
    title: "Domain & Hosting Setup",
    category: "websites",
    description:
      "Help choosing, buying, and connecting a domain name with reliable hosting for your website or email.",
  }),
  buildService({
    slug: "website-maintenance",
    title: "Website Maintenance",
    category: "websites",
    description:
      "Ongoing updates, content changes, and technical upkeep so your website keeps running smoothly.",
  }),
  buildService({
    slug: "responsive-websites",
    title: "Responsive Mobile-Friendly Websites",
    category: "websites",
    description:
      "Websites built to work well on phones, tablets, and desktops alike, since most visitors browse on mobile.",
  }),

  // ---------------- Online & Digital Services ----------------
  buildService({
    slug: "online-form-filling",
    title: "Online Form Filling",
    category: "online",
    description:
      "Accurate, careful filling of online forms so nothing is missed or entered incorrectly.",
    featured: true,
    whatWeOffer: [
      "Careful, accurate data entry based on your documents",
      "A check of the filled form with you before final submission",
      "Printed or digital copy of the submitted form for your records",
    ],
    suitableFor: [
      "Students and job seekers applying online",
      "Anyone unfamiliar or uncomfortable with online forms",
      "Applications with strict deadlines and formatting requirements",
    ],
  }),
  buildService({
    slug: "government-applications",
    title: "Government & Official Online Applications",
    category: "online",
    description:
      "Assistance with government portals and official applications, filled in carefully and correctly.",
  }),
  buildService({
    slug: "job-exam-applications",
    title: "Job & Exam Applications",
    category: "online",
    description:
      "Support filling out job and competitive exam application forms before the deadline, with document uploads handled correctly.",
  }),
  buildService({
    slug: "online-registration",
    title: "Online Registration",
    category: "online",
    description:
      "Help completing online registrations for schemes, courses, events, and services.",
  }),
  buildService({
    slug: "email-services",
    title: "Email Services",
    category: "online",
    description:
      "Setting up a new email account, or professional email addresses for your business, plus basic usage guidance.",
  }),
  buildService({
    slug: "document-typing",
    title: "Document Typing",
    category: "online",
    description:
      "Typing of letters, applications, resumes, and other documents, formatted neatly and ready to print.",
  }),
  buildService({
    slug: "pdf-editing-conversion",
    title: "PDF Editing & Conversion",
    category: "online",
    description:
      "Editing PDF content, converting between PDF and Word/Excel, merging or splitting files, and compressing large PDFs.",
  }),
  buildService({
    slug: "online-payment-recharge",
    title: "Online Payment & Recharge",
    category: "online",
    description:
      "Assistance with online bill payments, fee payments, and recharges when you'd rather have someone handle it for you.",
  }),
  buildService({
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "online",
    description:
      "Practical digital marketing support — social media promotion, listings, and campaigns — to help local businesses reach more customers.",
    featured: true,
    whatWeOffer: [
      "A simple digital marketing plan built around your budget and goals",
      "Social media page setup and consistent posting",
      "Basic ad campaigns on platforms like Facebook and Instagram, where suitable",
      "Regular, plain-language updates on how things are performing",
    ],
  }),
  buildService({
    slug: "social-media-management",
    title: "Social Media Management",
    category: "online",
    description:
      "Regular posting, page upkeep, and message handling so your social media presence stays active and consistent.",
  }),

  // ---------------- Mobile Services ----------------
  buildService({
    slug: "mobile-app-assistance",
    title: "Mobile App Setup & Assistance",
    category: "mobile",
    description:
      "Help installing, setting up, and understanding the apps you need on your phone, explained in simple terms.",
    featured: true,
  }),
  buildService({
    slug: "mobile-software-support",
    title: "Mobile Software Support",
    category: "mobile",
    description:
      "Troubleshooting common software issues on your phone — updates, storage, settings, and general slowdowns.",
  }),
  buildService({
    slug: "app-installation-configuration",
    title: "App Installation & Configuration",
    category: "mobile",
    description:
      "Installing and correctly configuring specific apps you need, from banking apps to office tools.",
  }),
  buildService({
    slug: "data-transfer-backup",
    title: "Data Transfer & Backup",
    category: "mobile",
    description:
      "Safely transferring contacts, photos, and files between phones, and setting up backups so you don't lose them again.",
  }),
  buildService({
    slug: "account-setup-assistance",
    title: "Account Setup Assistance",
    category: "mobile",
    description:
      "Setting up accounts you need on your phone — from digital IDs to service apps — done carefully and explained clearly.",
  }),
  buildService({
    slug: "mobile-recharge-payments",
    title: "Mobile Recharge & Digital Payments",
    category: "mobile",
    description:
      "Quick recharges and digital payment help for everyday needs, done on the spot.",
  }),
  buildService({
    slug: "social-email-setup",
    title: "Social Media & Email Setup",
    category: "mobile",
    description:
      "Getting your social media and email accounts set up correctly on your phone, with the basics explained.",
  }),
];

export function getServicesByCategory(category: string) {
  return services.filter((s) => s.category === category);
}

export function getFeaturedServices() {
  return services.filter((s) => s.featured);
}

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(service: Service, limit = 3) {
  return services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, limit);
}
