type Props = {
  product: any;
};

const ProductFeatures = ({ product }: Props) => {
  return (
    <section className="mt-20 border-t border-border pt-10">

      <h2 className="mb-8 text-2xl font-bold text-foreground">
        Product Information
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {[
          {
            title: "Product Name",
            value: product.name,
          },
          {
            title: "Category",
            value: product.category?.name ?? product.category,
          },
          {
            title: "Available Stock",
            value: product.stock,
          },
          {
            title: "Last Updated",
            value: new Date(product.updatedAt).toLocaleDateString(),
          },
        ].map((item) => (

          <div
            key={item.title}
            className="rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:shadow-md"
          >

            <p className="mb-3 text-sm text-muted-foreground">
              {item.title}
            </p>

            <p className="font-semibold text-card-foreground">
              {item.value}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default ProductFeatures;