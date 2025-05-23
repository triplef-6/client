import * as React from "react";
import { cn } from "@/app/lib/utils.ts";

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
            value,
            ...props
        },
        ref
    ) => {

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChangeHandler(e.target.value)
        }

        const containerStyle: string = "relative flex flex-row items-center"
        const inputStyle: string = [
            "flex h-12 w-full rounded-xl bg-grayscale-0 px-4",
            "py-3 text-base text-grayscale-500",
            "placeholder:text-base placeholder:text-grayscale-400 ring-1 ring-white",
            "focus:ring-1 focus:ring-black focus:outline-none",
            "transition-all duration-300 ease-in-out",
        ].join(" ")

        return (
            <div className={containerStyle}>
                <input
                    onChange={handleChange}
                    value={value}
                    type={type}
                    className={cn(inputStyle, className)}
                    placeholder={placeholder}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    }
);

ReviewInput.displayName = "ReviewInput";