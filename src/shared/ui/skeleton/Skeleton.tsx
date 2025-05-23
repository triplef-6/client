import { cn } from "@/app/lib"
import React from "react";

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-grayscale-300", className)}
      {...props}
    />
  )
}
