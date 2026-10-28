import { getProductService } from "@/services/product";
import { CardImage } from "./CardImage";
import Link from "next/link";

const Products = async () => {
  const product = await getProductService();

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
      {product.items.map((value) => (
        <div className="mb-4 " key={value.id}>
          <Link href={value.id}>
            <CardImage
              imageUrl={value.imageUrl}
              description={value.description}
              name={value.name}
              priceCents={value.priceCents}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
