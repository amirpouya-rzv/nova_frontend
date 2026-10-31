import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import config from "@/services/config";
import Image from "next/image";

type CardItem = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  priceCents: number;
};

export function CardImage({ name, description, imageUrl, priceCents }: CardItem) {
  return (
    <Card className="relative mx-auto w-full pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <Image
        width={1000}
        height={1000}
        loading="lazy"
        quality={100}
        src={`${config.onlinePath}${imageUrl}`}
        alt={name}
        unoptimized
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">${(priceCents / 100).toFixed(2)}</Badge>
        </CardAction>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Product</Button>
      </CardFooter>
    </Card>
  );
}