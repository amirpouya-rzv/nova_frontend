"use client";

import { clearCartAction } from "@/actions/cartAction";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { FiTrash2 } from "react-icons/fi";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const EmptyCartButton = () => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  const handleEmptyCart = () => {
    setError("");

    startTransition(async () => {
      const result = await clearCartAction();

      if (!result.success) {
        setError(result.message);
        return;
      }

      router.refresh();
    });
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            type="button"
            disabled={isPending}
            className="
              flex items-center gap-2 rounded-lg
              px-4 py-2 text-sm font-medium
              text-destructive
              transition-all duration-200
              hover:bg-destructive/10
              disabled:cursor-not-allowed disabled:opacity-50
            "
          >
            <FiTrash2 size={17} />
            Empty Cart
          </button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Empty Shopping Cart?</AlertDialogTitle>

            <AlertDialogDescription>
              Are you sure you want to remove all products from your cart?
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <AlertDialogAction
              onClick={handleEmptyCart}
              disabled={isPending}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isPending ? "Emptying..." : "Yes, Empty Cart"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {error && (
        <p className="mt-2 text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default EmptyCartButton;