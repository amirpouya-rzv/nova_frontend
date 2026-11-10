import EmptyCartButton from "@/components/EmptyCartButton";

type Props = {
  count: number;
  hasItems: boolean;
};

const CartHeader = ({ count, hasItems }: Props) => {
  return (
    <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
      <h1 className="text-3xl font-bold">
        Shopping Cart

        <span className="ml-3 text-lg text-muted-foreground">
          ({count})
        </span>
      </h1>

      {hasItems && <EmptyCartButton />}
    </div>
  );
};

export default CartHeader;