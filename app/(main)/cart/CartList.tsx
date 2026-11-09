import { CartItem } from "@/types/cart";
import CartItemCard from "./CartItemCard";

type Props = {
  items: CartItem[];
};

const CartList = ({ items }: Props) => {
  return (
    <section className="space-y-5">
      {items.map((item) => (
        <CartItemCard key={item.id} item={item} />
      ))}
    </section>
  );
};

export default CartList;