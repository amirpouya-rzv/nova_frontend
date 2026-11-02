
import { Button } from "@/components/ui/button";
import { FiShoppingCart } from "react-icons/fi";

const AddToCartButton = () => {
  return (
    <Button
      className="
        h-14 w-full cursor-pointer
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
    </Button>
  );
};

export default AddToCartButton;
