import { Button } from "@/components/ui/button";

const AddToCartButton = () => {
  return (
    <Button className="h-14 w-full cursor-pointer rounded-xl bg-primary text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90">
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;