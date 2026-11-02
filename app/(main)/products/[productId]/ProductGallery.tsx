import Image from "next/image";
import config from "@/services/config";

type Props = {
  product: any;
};

const ProductGallery = ({ product }: Props) => {
  return (
    <section className="space-y-4">

      <div className="relative flex h-87.5 items-center justify-center overflow-hidden rounded-3xl border border-border bg-card  shadow-2xl sm:h-125">

        <Image
          src={`${config.onlinePath}${product.imageUrl}`}
          width={1200}
          height={1000}
          alt={product.name}
          unoptimized
          className="object-cover"
        />

      </div>

      {/* <div className="grid grid-cols-4 gap-3">

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="flex aspect-square cursor-pointer items-center justify-center rounded-xl border border-border bg-card p-3 transition hover:border-primary"
          >
            <Image
              src={`${config.onlinePath}${product.imageUrl}`}
              width={150}
              height={150}
              alt={product.name}
              unoptimized
              className="h-full w-full object-contain"
            />
          </div>
        ))}

      </div> */}

    </section>
  );
};

export default ProductGallery;