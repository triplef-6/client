import * as React from "react"
import { MinusIcon } from "@radix-ui/react-icons"

export const InputOTPSeparator = React.forwardRef<
    React.ElementRef<"div">,
    React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
    <div ref={ref} role="separator" {...props}>
        <MinusIcon />
    </div>
))

InputOTPSeparator.displayName = "InputOTPSeparator"