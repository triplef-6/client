import * as React from "react";
import { cn } from "@/app/lib/utils.ts";
import {useEffect, useState} from "react";
import {useDebounceValue} from "usehooks-ts";

type InputProps = React.ComponentProps<"input"> & {
    placeholder?: string
    onChangeHandler: (value: string) => void
};

export const ReviewInput = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            type,
            placeholder,
            onChangeHandler,
            ...props
        },
        ref
    ) => {

        const [value, setValue] = useState<string>("");
        const clickHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
        const [debouncedValue] = useDebounceValue<string>(value, 300);

        useEffect(() => {
            onChangeHandler(debouncedValue)
        }, [debouncedValue, onChangeHandler]);

        return (
            <div className="relative flex flex-row items-center">
                <input
                    onChange={clickHandler}
                    type={type}
                    className={cn(
                        "flex h-12 w-full rounded-xl bg-grayscale-0 px-4",
                        "py-3 text-base text-grayscale-500",
                        "placeholder:text-base placeholder:text-grayscale-400 ring-1 ring-white",
                        "focus:ring-1 focus:ring-black focus:outline-none",
                        "transition-all duration-300 ease-in-out",
                        className
                    )}
                    placeholder={placeholder}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    }
);

ReviewInput.displayName = "ReviewInput";