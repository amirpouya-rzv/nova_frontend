
import { FiMenu, FiX } from "react-icons/fi";
import { iconButton } from "./headerStyles";

type MobileMenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function MobileMenuButton({
  isOpen,
  onClick,
}: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="باز و بسته کردن منو"
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      className={`${iconButton} lg:hidden`}
    >
      {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
    </button>
  );
}
