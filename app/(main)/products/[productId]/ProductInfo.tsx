import Counter from "./Counter";
import AddToCartButton from "./AddToCartButton";

type Props = {
  product: any;
};

const ProductInfo = ({ product }: Props) => {
  return (
    <section className="flex flex-col justify-center gap-6 py-4">

      <div className="space-y-3">

        <p className="text-sm font-semibold tracking-[0.3em] text-primary">
          NOVA / COLLECTION
        </p>

        <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
          {product.name}
        </h1>

        <p className="text-sm text-muted-foreground">
          {product.slug}
        </p>

      </div>

      <div className="flex items-center gap-3">

        <div className="flex gap-1 text-[#C6A15B]">
          ★ ★ ★ ★ ★
        </div>

        <span className="text-sm text-muted-foreground">
          Product Collection
        </span>

      </div>

      <div className="h-px w-full bg-border" />

      <p className="text-sm leading-8 text-muted-foreground sm:text-base">
        {product.description}
      </p>

      <div className="flex items-center justify-between rounded-2xl bg-secondary/70 p-5">

        <div>
          <p className="text-sm text-muted-foreground">
            Price
          </p>

          <p className="mt-2 text-3xl font-bold text-primary">
            ${product.priceCents / 10}
          </p>
        </div>

        <div className="text-right">

          <p className="text-sm text-muted-foreground">
            Availability
          </p>

          <p className="mt-2 font-semibold text-success">
            {product.isActive ? "In Stock" : "Unavailable"}
          </p>

        </div>

      </div>

      <div className="space-y-3">

        <p className="text-sm font-semibold text-foreground">
          Quantity
        </p>

        <Counter />

      </div>

      <AddToCartButton />

      <div className="grid grid-cols-2 gap-3 border-t border-border pt-5">

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="text-primary">✦</span>
          Premium Quality
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="text-primary">✦</span>
          Secure Shopping
        </div>

      </div>

    </section>
  );
};

export default ProductInfo;