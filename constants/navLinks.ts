// constants/navLinks.ts
import type { IconType } from "react-icons";
import { FiHome, FiShoppingBag, FiTag, FiInfo, FiMail } from "react-icons/fi";

export interface NavLink {
  label: string;
  href: string;
  icon: IconType;
  badge?: string; // اختیاری: مثلاً "جدید"
}

export const navLinks: NavLink[] = [
  { label: "خانه", href: "/", icon: FiHome },
  { label: "محصولات", href: "/products", icon: FiShoppingBag },
  { label: "تخفیف‌ها", href: "/offers", icon: FiTag, badge: "جدید" },
  { label: "درباره ما", href: "/aboutus", icon: FiInfo },
  { label: "تماس با ما", href: "/contactus", icon: FiMail },
];