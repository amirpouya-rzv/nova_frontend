
"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";
import { addToCartAction } from "@/actions/cartAction";

type AddToCartButtonProps = {
  productId: string;
  quantity?: number;
};

const AddToCartButton = ({
  productId,
  quantity = 1,
}: AddToCartButtonProps) => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleAddToCart = () => {
    setMessage("");

    startTransition(async () => {
      const result = await addToCartAction(productId, quantity);

      setMessage(result.message);
      setSuccess(result.success);

      if (result.requiresLogin) {
        router.push("/login");
        return;
      }

      if (result.success) {
        router.push("/cart");
        router.refresh();
      }
    });
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={handleAddToCart}
        disabled={isPending}
        className="
          inline-flex h-14 w-full items-center justify-center
          rounded-2xl border border-white/20
          bg-primary/90 text-base font-semibold
          text-primary-foreground shadow-xl shadow-primary/20
          transition-all duration-300
          hover:-translate-y-1 hover:bg-primary
          disabled:cursor-not-allowed disabled:opacity-60
        "
      >
        <FiShoppingCart className="mr-2" size={20} />

        {isPending ? "Adding..." : "Add To Cart"}
      </button>

      {message && (
        <p
          role="status"
          className={`mt-3 text-sm ${
            success ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default AddToCartButton;
