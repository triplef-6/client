import * as React from "react"

import { cn } from "@/app/lib/utils.ts"

export const ImagesInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type={"file"}
        multiple
        accept="image/*"
        className={cn(
          "flex h-36 w-full rounded-md border border-dashed border-grayscale-400 bg-grayscale-300 px-3 py-1 " +
            "text-base shadow-sm transition-colors " +
            "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground " +
            "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring " +
            "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

ImagesInput.displayName = "ImagesInput"