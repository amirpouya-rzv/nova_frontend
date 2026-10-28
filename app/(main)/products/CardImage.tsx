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
import Image from "next/image";

type CardItem = {
  priceCents: string;
  name: string;
  description: string;
  imageUrl: string;
};

export function CardImage(props: CardItem) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <Image
        width={200}
        height={200}
        loading="lazy"
        quality={100}
        src="/image/nova-banner.WebP"
        alt="Event cover"
        className="relative z-20 object-cover aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">${props.priceCents / 100}</Badge>
        </CardAction>
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        {/* <Button className="w-full">View Event</Button> */}
      </CardFooter>
    </Card>
  );
}
