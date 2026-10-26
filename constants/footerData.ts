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
  name: "لوگو",
  tagline: "فروشگاه آنلاین",
  letter: "L",
  description:
    "ارائه محصولات اصل با قیمت منصفانه، ارسال سریع و پشتیبانی واقعی. خرید آنلاین را ساده‌تر و قابل‌اعتمادتر می‌کنیم.",
  copyright: "© ۱۴۰۵ لوگو. تمامی حقوق محفوظ است.",
};

export interface Feature {
  title: string;
  description: string;
  icon: IconType;
}

export const features: Feature[] = [
  { title: "ارسال سریع", description: "به سراسر کشور", icon: FiTruck },
  { title: "ضمانت اصالت", description: "کالای ۱۰۰٪ اصل", icon: FiShield },
  { title: "بازگشت کالا", description: "تا ۷ روز", icon: FiRefreshCw },
  { title: "پشتیبانی", description: "هر روز هفته", icon: FiHeadphones },
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
    title: "دسترسی سریع",
    links: [
      { label: "خانه", href: "/" },
      { label: "محصولات", href: "/products" },
      { label: "تخفیف‌ها", href: "/offers" },
      { label: "درباره ما", href: "/about" },
    ],
  },
  {
    title: "خدمات مشتریان",
    links: [
      { label: "پیگیری سفارش", href: "/track-order" },
      { label: "سوالات متداول", href: "/faq" },
      { label: "رویه بازگرداندن کالا", href: "/returns" },
      { label: "تماس با ما", href: "/contact" },
    ],
  },
  {
    title: "حساب کاربری",
    links: [
      { label: "ورود / ثبت‌نام", href: "/login" },
      { label: "سبد خرید", href: "/cart" },
      { label: "سفارش‌های من", href: "/dashboard/orders" },
      { label: "پروفایل", href: "/dashboard/profile" },
    ],
  },
];

export const contactInfo = [
  { icon: FiPhone, label: "۰۲۱-۱۲۳۴۵۶۷۸", href: "tel:+982112345678" },
  { icon: FiMail, label: "info@example.com", href: "mailto:info@example.com" },
  { icon: FiMapPin, label: "تهران، خیابان نمونه، پلاک ۱۲", href: undefined },
];

export const socialLinks = [
  { label: "اینستاگرام", href: "https://instagram.com", icon: FiInstagram },
  { label: "تلگرام", href: "https://t.me", icon: FiSend },
  { label: "توییتر", href: "https://twitter.com", icon: FiTwitter },
  { label: "لینکدین", href: "https://linkedin.com", icon: FiLinkedin },
];

export const legalLinks: FooterLink[] = [
  { label: "قوانین و مقررات", href: "/terms" },
  { label: "حریم خصوصی", href: "/privacy" },
];