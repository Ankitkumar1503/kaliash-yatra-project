import { NavItem, FooterLink } from "./types";

export const mainNavLinks: NavItem[] = [
  { name: "HOME", href: "/" },
  { name: "NEPAL", href: "/destination?country=nepal" },
  { name: "BHUTAN", href: "/destination?country=bhutan" },
  { name: "TIBET", href: "/destination?country=tibet" },
  { name: "INDIA", href: "/destination?country=india" },
  { name: "ABOUT US", href: "/about-us" },
];

export const footerCompanyLinks: FooterLink[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Team", href: "/team" },
  { label: "Travel Blog", href: "/blog" },
  { label: "Travel Gallery", href: "/gallery" },
  { label: "Client Reviews", href: "/reviews" },
  { label: "Travel Guide", href: "/guide" },
];

export const footerSupportLinks: FooterLink[] = [
  { label: "Contact Us", href: "/reviews" },
  { label: "Legal Notice", href: "/legal-documents" },
  { label: "Legal Documents", href: "/legal-documents" },
  { label: "Terms and Conditions", href: "/legal-documents" },
  { label: "Privacy Policy", href: "/legal-documents" },
  { label: "Sitemap", href: "/destination" },
];

export const footerServicesLinks: FooterLink[] = [
  { label: "Activity Finder", href: "/activities" },
  { label: "Tour List", href: "/destination" },
  { label: "Everest Trek", href: "/trip/everest-base-camp-trek" },
  { label: "Kailash Yatra", href: "/trip/mount-kailash-mansarovar-yatra" },
  { label: "Annapurna Circuit", href: "/trip/annapurna-circuit-trek" },
  { label: "Holiday Rental", href: "/destination" },
];

export const footerLinks = {
  company: footerCompanyLinks,
  support: footerSupportLinks,
  otherServices: footerServicesLinks,
};
