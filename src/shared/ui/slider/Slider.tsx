import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/app/lib/utils.ts"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {

  const thumbStyles: string = [
    "block h-4 w-4 rounded-full border border-grayscale-300 bg-grayscale-0 shadow transition-colors",
    "focus-visible:outline-none",
    "disabled:pointer-events-none disabled:opacity-50"
  ].join(" ")

  return(
      <SliderPrimitive.Root
          ref={ref}
          className={cn(
              "relative flex w-full touch-none select-none items-center",
              className
          )}
          {...props}
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-grayscale-200">
          <SliderPrimitive.Range className="absolute h-full bg-primary-0" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className={thumbStyles}/>
      </SliderPrimitive.Root>
  )

})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
