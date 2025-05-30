import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {cn} from "@/app/lib/utils.ts";
import {ChevronUpIcon} from "@radix-ui/react-icons";

const SelectScrollUpButton = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>((
    {
        className,
        ...props
    },
    ref
) => (
    <SelectPrimitive.ScrollUpButton
        ref={ref}
        className={cn(
            "flex cursor-default items-center justify-center py-1",
            className
        )}
        {...props}
    >
        <ChevronUpIcon className="h-4 w-4" />
    </SelectPrimitive.ScrollUpButton>
))

SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

export {SelectScrollUpButton}