import * as React from "react"
import { cn } from "@/app/lib"

type InputProps = React.ComponentProps<"textarea"> & {
    isOpen: boolean
    isSubmitted: boolean
}

export const Textarea = React.forwardRef<HTMLTextAreaElement,InputProps>((
    {
        className,
        value,
        isOpen,
        isSubmitted,
        ...props
    }, ref
) => {

    const inputStyles = [
        "h-24 w-full bg-grayscale-200 hover:bg-grayscale-300 rounded-xl px-2 pt-4 text-base flex items-center",
        "placeholder-transparent transition duration-300",
        "focus:bg-white focus:outline-none pr-8 peer pl-4 cursor-pointer",
        isOpen ? "focus:border focus:border-black" : "border-transparent",
        isSubmitted && !value ? "border border-secondary-red focus:border-secondary-red bg-red-100 hover:bg-red-100" : "",
        "flex items-center justify-center"
    ].join(" ")

    return (
        <textarea
            className={cn(className, inputStyles)}
            ref={ref}
            {...props}
        />
    )
})

Textarea.displayName = "Textarea"