import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/app/lib/utils.ts"

const alertVariants = cva(
    "fixed w-80 flex flex-row gap-2 items-center bottom-4 right-4 rounded-lg bg-grayscale-0 px-4 py-2 text-base shadow-lg transition-transform duration-300 ease-in-out",
    {
        variants: {
            variant: {
                default: "text-grayscale-500",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export const Alert = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
    <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
    />
))

Alert.displayName = "Alert"