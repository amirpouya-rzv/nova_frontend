import { searchProductsClient } from "@/services/productSearch";
import { ProductTypes } from "@/types/ProductTypes";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

export const useSearch = () =>{

  const [open, setOpen] = useState(false); 
  const [text, setText] = useState("");
  const [results, setResults] = useState<ProductTypes[]>([]); // fetch from api
  const [loading, setLoading] = useState(false);

  // Ctrl+K
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // live search
  useEffect(() => {
    const q = text.trim();
    if (!open || q.length < 2) {
      setResults([]);
      setLoading(false);
      return;
    }

    let ignore = false; // ignore ild responses
    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const data = await searchProductsClient({ q, limit: 6, sort: "newest" });
        if (!ignore) setResults(data.items);
      } catch {
        if (!ignore) setResults([]);
      } finally {
        if (!ignore) setLoading(false);
      }
    }, 300);

    return () => {
      ignore = true;
      clearTimeout(timer);
    };
  }, [text, open]);

  const close = () => {
    setOpen(false);
    setText("");
  };

  const router = useRouter();
  // Enter
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = text.trim();
    close();
    router.push(q ? `/products?q=${encodeURIComponent(q)}` : "/products");
  };

return{open, setOpen,setText, text, results, loading, onSubmit, router,close}

}