import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {cn} from "@/app/lib";

export const DialogDescription = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
        ref={ref}
        className={cn("text-sm text-grayscale-500", className)}
        {...props}
    />
))

DialogDescription.displayName = DialogPrimitive.Description.displayName