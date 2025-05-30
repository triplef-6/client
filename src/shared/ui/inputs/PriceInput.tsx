import * as React from "react"
import { cn } from "@/app/lib/utils.ts"
import {RussianRuble, X} from "lucide-react";

type InputProps = React.ComponentProps<"input"> & {
    label: string;
    isSubmitted?: boolean;
    field: {
        isOpen: boolean
        isTouched: boolean
    };
    onClear: () => void;
}

export const PriceInput = React.forwardRef<HTMLInputElement, InputProps>((
    {
        className,
        type,
        label,
        isSubmitted,
        field,
        onClear,
        value,
        onChange,
        ...props
   }, ref
    ) => {

    const isValidField = (field.isTouched && !value) || (isSubmitted && !value)

    const containerStyles: string = "relative flex flex-col w-full wide:w-72 cursor-pointer";
    const wrapperStyles: string = "flex items-center";
    const iconSearchStyles: string = [
        "absolute left-4 h-5 w-5",
        isValidField ? "text-secondary-red" : "text-gray-500"
    ].join(" ");
    const iconXStyles: string = "absolute right-4 h-5 w-5 text-gray-500 cursor-pointer";
    const inputStyles = [
        "h-14 w-full bg-grayscale-200 hover:bg-grayscale-300 rounded-xl px-6 pt-4 text-base flex items-center",
        "placeholder-transparent transition duration-300",
        "focus:bg-white focus:outline-none pr-8 peer pl-12 cursor-pointer",
        value || field.isOpen ? "focus:border focus:border-black" : "border-transparent",
        isValidField ? "border border-secondary-red focus:border-secondary-red bg-red-100 hover:bg-red-100" : "",
        "flex items-center justify-center"
    ].join(" ")
    const labelStyles = [
        "absolute cursor-pointer left-12 text-base text-grayscale-400 transition-all duration-300",
        value || field.isOpen ? "top-2 text-black" : "top-4 text-base",
        isValidField ? "text-secondary-red" : "text-grayscale-400"
    ].join(" ")

    return (
        <div className={containerStyles}>
            <div className={wrapperStyles}>
                <RussianRuble className={iconSearchStyles}/>
                <input
                    ref={ref}
                    type={type}
                    className={cn(inputStyles, className)}
                    value={value}
                    onChange={onChange}
                    placeholder={" "}
                    {...props}
                />
                {value && <X onClick={onClear} className={iconXStyles}/>}
            </div>
            <label htmlFor="command-input" className={labelStyles}>
                {label}
            </label>
        </div>
    )
})

PriceInput.displayName = "PriceInput"