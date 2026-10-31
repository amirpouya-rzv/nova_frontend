import type { Metadata } from "next";

type Props = {
  params: Promise<{ productid: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productid } = await params;

  return {
    title: `product no ${productid}`,
  };
}

export default async function ProductPage({ params,searchParams }: Props) {
  const { productid } = await params;

  return (
    <div>
      <h1>محصول {productid}</h1>
       {(await params).productid}
    </div>
  );
}