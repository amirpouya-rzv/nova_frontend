
// constants/footerData.ts
import type { IconType } from "react-icons";
import {
  FiHeadphones,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiRefreshCw,
  FiSend,
  FiShield,
  FiTruck,
  FiTwitter,
} from "react-icons/fi";

export const footerBrand = {
  name: "NOVA",
  tagline: "Online Store",
  letter: "N",
  description:
    "Discover authentic products at fair prices, enjoy fast delivery, and get reliable customer support. We make online shopping simple and trustworthy.",
  copyright: "© 2026 NOVA. All rights reserved.",
};

export interface Feature {
  title: string;
  description: string;
  icon: IconType;
}

export const features: Feature[] = [
  { title: "Fast Delivery", description: "Across the country", icon: FiTruck },
  { title: "Authenticity Guarantee", description: "100% genuine products", icon: FiShield },
  { title: "Easy Returns", description: "Within 7 days", icon: FiRefreshCw },
  { title: "Customer Support", description: "Available 7 days a week", icon: FiHeadphones },
];

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterGroup {
  title: string;
  links: FooterLink[];
}

export const footerGroups: FooterGroup[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Offers", href: "/offers" },
      { label: "About Us", href: "/aboutus" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { label: "Track Order", href: "/track-order" },
      { label: "Frequently Asked Questions", href: "/faq" },
      { label: "Returns & Refunds", href: "/returns" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "My Account",
    links: [
      { label: "Sign In / Register", href: "/login" },
      { label: "Shopping Cart", href: "/cart" },
      { label: "My Orders", href: "/dashboard/orders" },
      { label: "My Profile", href: "/dashboard/profile" },
    ],
  },
];

export const contactInfo = [
  { icon: FiPhone, label: "+98 21 1234 5678", href: "tel:+982112345678" },
  { icon: FiMail, label: "info@example.com", href: "mailto:info@example.com" },
  { icon: FiMapPin, label: "Tehran, Sample Street, No. 12", href: undefined },
];

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: FiInstagram },
  { label: "Telegram", href: "https://t.me", icon: FiSend },
  { label: "Twitter", href: "https://twitter.com", icon: FiTwitter },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FiLinkedin },
];

export const legalLinks: FooterLink[] = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];
