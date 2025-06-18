import * as React from "react";
import {cn} from "@/app/lib";

export const InputOTPGroup = React.forwardRef<
    React.ElementRef<"div">,
    React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center", className)} {...props} />
))

InputOTPGroup.displayName = "InputOTPGroup"