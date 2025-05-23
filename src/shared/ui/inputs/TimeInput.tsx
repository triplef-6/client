import * as React from "react"
import { cn } from "@/app/lib"

type InputProps = React.ComponentProps<"input"> & {
    isSubmitted?: boolean
    field: {
        isOpen: boolean
        isTouched: boolean
    }
}

export const TimeInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({
       className,
      isSubmitted,
      value,
       field,
       ...props
   }, ref
  ) => {

      const isValidField = isSubmitted && !value

      const styles: string = [
          "h-14 w-full bg-grayscale-200 hover:bg-grayscale-300 rounded-xl px-6 text-lg flex items-center",
          "placeholder-transparent transition duration-300",
          "focus:bg-white focus:outline-none pr-8 peer pl-12 cursor-pointer",
          value || field.isOpen ? "focus:border focus:border-black" : "border-transparent",
          isValidField ? "border border-secondary-red focus:border-secondary-red bg-red-100 hover:bg-red-100" : "",
          "flex items-center justify-center"
      ].join(" ")

    return (
      <input
          value={value}
        type={"time"}
        className={cn(styles, className)}
        ref={ref}
        {...props}
      />
    )
  }
)

TimeInput.displayName = "TimeInput"
