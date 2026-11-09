type Props = {
  count: number;
  totalCents: number;
};

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US").format(price / 100);

const CartSummary = ({ count, totalCents }: Props) => {
  return (
    <aside className="h-fit rounded-2xl border p-6">
      <h2 className="mb-6 text-xl font-bold">
        Order Summary
      </h2>

      <div className="flex justify-between">
        <span className="text-muted-foreground">
          Total items
        </span>

        <span>{count}</span>
      </div>

      <div className="mt-4 flex justify-between">
        <span className="text-muted-foreground">
          Subtotal
        </span>

        <span className="font-bold">
          {formatPrice(totalCents)}
        </span>
      </div>

      <button
        type="button"
        className="mt-8 w-full rounded-xl bg-primary py-3 text-primary-foreground transition-opacity hover:opacity-90"
      >
        Proceed to Checkout
      </button>
    </aside>
  );
};

export default CartSummary;