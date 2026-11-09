"use client";

import { Button } from "@/components/ui/button";

type CounterProps = {
  count: number;
  setCount: (value: number) => void;
  max: number;
};

const Counter = ({ count, setCount, max }: CounterProps) => {
  return (
    <div className="flex w-fit items-center gap-3 rounded-xl border border-border bg-card p-2">
      <Button
        type="button"
        disabled={count <= 1}
        onClick={() => setCount(count - 1)}
        className="h-10 w-10 rounded-lg text-xl"
      >
        -
      </Button>

      <span className="w-12 text-center text-lg font-bold text-foreground">
        {count}
      </span>

      <Button
        type="button"
        disabled={count >= max}
        onClick={() => setCount(count + 1)}
        className="h-10 w-10 rounded-lg text-xl"
      >
        +
      </Button>
    </div>
  );
};

export default Counter;