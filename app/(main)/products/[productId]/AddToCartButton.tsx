import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

const AddToCartButton = () => {
  return (
    <Link
      href="/cart"
      className="
        inline-flex h-14 w-full cursor-pointer items-center justify-center
        rounded-2xl border border-white/20
        bg-primary/90
        text-base font-semibold text-primary-foreground
        shadow-xl shadow-primary/20
        backdrop-blur-xl
        transition-all duration-300
        hover:-translate-y-1
        hover:bg-primary
        hover:shadow-2xl hover:shadow-primary/30
        active:translate-y-0
      "
    >
      <FiShoppingCart className="mr-2" size={20} />
      Add To Cart
    </Link>
  );
};

export default AddToCartButton;