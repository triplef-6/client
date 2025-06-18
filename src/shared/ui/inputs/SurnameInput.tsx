import * as React from "react"
import { cn } from "@/app/lib/utils.ts"
import {useEffect, useState} from "react";
import {z} from "zod";
import {useDebounceValue} from "usehooks-ts";

const schema = z
    .string()
    .min(2, "Фамилия на может содержать меньше 2 символов")
    .regex(/^[^\d]+$/, "Фамилия не должна содержать цифры")

type InputProps = React.ComponentProps<"input"> & {
    defaultValue: string
    updateSurname: (value: string) => void
    setIsDisabled: (value: boolean) => void
}

export const SurnameInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({
         className,
         type,
         defaultValue,
         updateSurname,
         setIsDisabled,
         ...props
     }, ref
    ) => {

        const [value, setValue] = useState<string>(defaultValue)
        const [error, setError] = useState<string | null>(null)
        const [debouncedValue] = useDebounceValue<string>(value, 300)

        useEffect(() => {
            const result = schema.safeParse(debouncedValue)
            if (result.success) {
                setError(null)
                updateSurname(debouncedValue)
                setIsDisabled(false)
            } else {
                setError(result.error.errors[0].message)
                setIsDisabled(true)
            }
        }, [debouncedValue])

        const clickHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

        return (
            <div className={"flex flex-col gap-2"}>
                {error === null && <span className={"text-base text-grayscale-400"}>Фамилия</span>}
                {error && <span className={"text-base text-secondary-red"}>{error}</span>}
                <input
                    onChange={clickHandler}
                    value={value}
                    type={type}
                    className={cn(
                        "flex h-12 w-full rounded-xl bg-grayscale-200 px-4",
                        "py-3 text-base text-grayscale-500",
                        "placeholder:text-base placeholder:text-grayscale-400 ring-1 ring-white",
                        "focus:ring-1 focus:bg-grayscale-0 focus:ring-black focus:outline-none",
                        "transition-all duration-300 ease-in-out",
                        className
                    )}
                    placeholder={"Введите фамилию"}
                    ref={ref}
                    {...props}
                />
            </div>
        )
    }
)

SurnameInput.displayName = "SurnameInput"