"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex w-fit items-center gap-3 rounded-xl border border-border bg-card p-2">
      <Button
        disabled={count <= 0}
        onClick={() => setCount(count - 1)}
        className="h-10 w-10 rounded-lg text-xl"
      >
        -
      </Button>
      <span className="w-12 text-center text-lg font-bold text-foreground">
        {count}
      </span>
      <Button
        onClick={() => setCount(count + 1)}
        className="h-10 w-10 rounded-lg text-xl"
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
