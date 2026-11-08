import Image from "next/image";
import config from "@/services/config";
import type { ProductTypes } from "@/types/ProductTypes";

type Props = { product: ProductTypes };

const ImageProduct = ({ product }: Props) => {
  return (
    <div className="w-full">
      {product.imageUrl ? (
        <Image
          src={`${config.onlinePath}${product.imageUrl}`}
          width={1200}
          height={800}
          alt={product.name}
          unoptimized={process.env.NODE_ENV === "development"}
          className="relative h-full w-7/12 rounded-2xl object-cover"
        />
      ) : (
        <div className="h-64 w-7/12 rounded-2xl bg-muted" />
      )}
    </div>
  );
};

export default ImageProduct;