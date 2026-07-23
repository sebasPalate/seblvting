import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SeblvtingMark } from "./seblvting-mark";

export function NotFound({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center",
        className,
      )}
    >
      <SeblvtingMark className="h-8 w-auto sm:h-24" />

      <h1 className="mt-8 mb-6 font-mono text-8xl font-medium">404</h1>

      <Link href="/">
        <Button variant="ghost">
          Go to Home
          <ArrowRightIcon />
        </Button>
      </Link>
    </div>
  );
}
