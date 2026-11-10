import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="py-24 text-center">
      <h2 className="text-2xl font-bold">
        !Your cart is empty
      </h2>

      <p className="mt-3 text-muted-foreground">
        You haven't added any products yet.
      </p>

      <Link
        href="/products"
        className="mt-6 inline-flex rounded-xl bg-primary px-6 py-3 text-primary-foreground transition-opacity hover:opacity-90"
      >
        Explore Products
      </Link>
    </div>
  );
};

export default EmptyCart;