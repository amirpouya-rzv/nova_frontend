"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { FiTrash2 } from "react-icons/fi";

import { removeFromCartAction } from "@/actions/cartAction";

type Props = {
  productId: string;
};

const RemoveFromCartButton = ({ productId }: Props) => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  const handleRemove = () => {
    setError("");

    startTransition(async () => {
      const result = await removeFromCartAction(productId);

      if (!result.success) {
        setError(result.message);
        return;
      }

      router.refresh();
    });
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleRemove}
        disabled={isPending}
        className="
          flex items-center gap-2 rounded-lg
          px-3 py-2 text-sm font-medium
          text-destructive
          transition-all duration-200
          hover:bg-destructive/10
          disabled:cursor-not-allowed disabled:opacity-50
        "
      >
        <FiTrash2 size={17} />

        {isPending ? "Removing..." : "Remove"}
      </button>

      {error && (
        <p className="mt-2 text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default RemoveFromCartButton;