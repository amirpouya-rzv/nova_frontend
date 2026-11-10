import { connection } from "next/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { getCartService } from "@/services/cart";
import CartHeader from "./CartHeader";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartSummary from "./CartSummary";



export default async function CartPage() {
  await connection();

  const cookieStore = await cookies();
  const token = cookieStore.get("logintoken")?.value;

  if (!token) {
    redirect("/login");
  }

  const cart = await getCartService();

  return (
    <main className="min-h-screen px-5 py-12">
      <div className="mx-auto max-w-6xl">

        <CartHeader
          count={cart.count}
          hasItems={cart.items.length > 0}
        />

        {cart.items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1fr_350px]">

            <CartList items={cart.items} />

            <CartSummary
              count={cart.count}
              totalCents={cart.totalCents}
            />

          </div>
        )}

      </div>
    </main>
  );
}