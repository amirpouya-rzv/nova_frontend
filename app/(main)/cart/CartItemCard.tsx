import Image from "next/image";
import { CartItem } from "@/types/cart";
import config from "@/services/config";
import RemoveFromCartButton from "@/components/RemoveFromCartButton";

type Props = {
  item: CartItem;
};

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US").format(price / 100);

const CartItemCard = ({ item }: Props) => {
  const imageUrl = item.product.imageUrl;

  return (
    <article className="flex gap-5 rounded-2xl border p-4">
      {/* Product Image */}
      <div className="relative h-28 w-28 shrink-0">
        {imageUrl ? (
          <Image
            src={`${config.onlinePath}${imageUrl}`}
            alt={item.product.name}
            fill
            sizes="112px"
            className="rounded-xl object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center rounded-xl bg-muted text-sm text-muted-foreground">
            No Image
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="font-semibold">{item.product.name}</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              {item.product.category?.name ?? "Uncategorized"}
            </p>
          </div>

          <RemoveFromCartButton productId={item.product.id} />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <span>Quantity: {item.quantity}</span>

          <span className="font-bold">
            {formatPrice(item.product.priceCents * item.quantity)}
          </span>
        </div>
      </div>
    </article>
  );
};

export default CartItemCard;