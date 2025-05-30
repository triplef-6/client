import * as React from "react";
import {cn} from "@/app/lib/utils.ts";

const CommandShortcut = ({
                             className,
                             ...props
                         }: React.HTMLAttributes<HTMLSpanElement>) => {
    return (
        <span
            className={cn(
                "ml-auto text-xs tracking-widest text-muted-foreground",
                className
            )}
            {...props}
        />
    )
}

CommandShortcut.displayName = "CommandShortcut"

export {CommandShortcut}