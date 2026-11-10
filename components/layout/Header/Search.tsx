"use client";

import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSearch } from "@/hooks/useSearch";

const Search = () => {

const {open,setOpen, text,setText, results, loading, onSubmit, router, close} = useSearch()


  return (
    <>
      <Button className="w-full" type="button" variant="outline" onClick={() => setOpen(true)}>
        <FiSearch size={16} />
        <span className="w-24 text-start">Search...</span>
        <kbd className="hidden lg:block rounded-md border border-border bg-background px-1.5 py-0.5 font-mono text-[10px]">
          Ctrl K
        </kbd>
      </Button>

      <Dialog open={open} onOpenChange={(value) => (value ? setOpen(true) : close())}>
        <DialogContent className="sm:max-w-md">
          <form onSubmit={onSubmit} className="grid gap-4">
            <DialogHeader>
              <DialogTitle className="text-2xl text-left">Search</DialogTitle>
            </DialogHeader>

            <Field>
              <Label htmlFor="search-input" className="text-2xl"> What are you looking for ?</Label>
              <Input
                id="search-input"
                name="q"
                autoFocus
                autoComplete="off"
                placeholder="e.g. headphones"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Field>

            <div className="min-h-16 text-sm" aria-live="polite">
              {loading && <p className="text-muted-foreground">Searching...</p>}

              {!loading && text.trim().length >= 2 && results.length === 0 && (
                <p className="text-muted-foreground">No products found.</p>
              )}

              {results.length > 0 && (
                <ul className="grid gap-1">
                  {results.map((product) => (
                    <li key={product.id}>
                      <Link
                        href={`/products/${product.id}`}
                        onClick={close}
                        className="flex justify-between rounded-md px-2 py-2 hover:bg-muted"
                      >
                        <span>{product.name}</span>
                        <span>${(product.priceCents / 100).toFixed(2)}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={close}>
                Cancel
              </Button>
              <Button type="submit">See all results</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Search;
