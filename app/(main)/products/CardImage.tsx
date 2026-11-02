
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import config from "@/services/config";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

type CardItem = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  priceCents: number;
};

export function CardImage({
  name,
  description,
  imageUrl,
  priceCents,
}: CardItem) {
  return (
    <Card
      className="
        group relative mx-auto h-full w-full overflow-hidden
        rounded-3xl border border-white/20
        bg-white/10 p-0
        shadow-xl shadow-black/5
        backdrop-blur-2xl
        transition-all duration-500
        hover:border-primary/40
        hover:shadow-2xl hover:shadow-primary/10
      "
    >
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          width={1000}
          height={1000}
          loading="lazy"
          quality={75}
          src={`${config.onlinePath}${imageUrl}`}
          alt={name}
          unoptimized
          className="
            h-full w-full object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />

        {/* Image Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/60 via-black/10 to-transparent
            opacity-70 transition-opacity duration-500
            group-hover:opacity-100
          "
        />

        {/* Price Badge */}
        <div className="absolute right-4 top-4 z-10">
          <Badge
            variant="secondary"
            className="
              rounded-full border border-white/30
              bg-white/20 px-4 py-2
              text-sm font-bold text-rose
              shadow-lg backdrop-blur-xl
            "
          >
            ${(priceCents / 100).toFixed(2)}
          </Badge>
        </div>

        {/* Hover Icon */}
        <div
          className="
            absolute bottom-4 right-4
            flex h-10 w-10 items-center justify-center
            translate-y-3 rounded-full
            border border-white/30
            bg-white/20 text-white
            opacity-0 backdrop-blur-xl
            transition-all duration-500
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <FiArrowUpRight size={20} />
        </div>
      </div>

      {/* Glass Content Box */}
      <div
        className="
          m-3 rounded-2xl
          border border-white/25
          bg-background/95
          p-4
          shadow-lg
          backdrop-blur-2xl
          sm:m-4 sm:p-5
        "
      >
        {/* Content */}
        <CardHeader className="gap-3 p-0">
          <CardTitle
            className="
              line-clamp-1 text-lg font-bold
              text-card-foreground
              transition-colors
              group-hover:text-primary
            "
          >
            {name}
          </CardTitle>

          <CardDescription
            className="
              line-clamp-2 min-h-10
              text-sm leading-6
              text-muted-foreground
            "
          >
            {description}
          </CardDescription>
        </CardHeader>

        {/* Footer */}
        <CardFooter className="mt-4 p-0">
          <div
            className="
              flex w-full items-center justify-between
              rounded-xl border border-primary/20
              bg-primary/5 px-4 py-3
              transition-all duration-300
              group-hover:border-primary/40
              group-hover:bg-primary/10
            "
          >
            <span className="text-sm font-semibold text-card-foreground">
              View Product
            </span>

            <FiArrowUpRight
              className="
                text-primary transition-transform duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
              size={19}
            />
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
