// constants/navLinks.ts
import type { IconType } from "react-icons";
import { FiHome, FiShoppingBag, FiTag, FiInfo, FiMail } from "react-icons/fi";

export interface NavLink {
  label: string;
  href: string;
  icon: IconType;
  badge?: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", icon: FiHome },
  { label: "Products", href: "/products", icon: FiShoppingBag },
  { label: "Offers", href: "/offers", icon: FiTag, badge: "New" },
  { label: "About Us", href: "/aboutus", icon: FiInfo },
  { label: "Contact Us", href: "/contactus", icon: FiMail },
];