import * as React from "react"
import { cn } from "@/app/lib/utils.ts"
import {useEffect, useState} from "react";
import {useDebounceValue} from "usehooks-ts";

type InputProps = React.ComponentProps<"input"> & {
    defaultValue: string
    placeholder?: string
    onChangeHandler: (value: string) => void
};

export const ProfileInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({
       className,
       type,
      placeholder,
      defaultValue,
      onChangeHandler,
       ...props
   }, ref
  ) => {


      const [value, setValue] = useState<string>(defaultValue);
      const clickHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
      const [debouncedValue] = useDebounceValue<string>(value, 300);

      useEffect(() => {
          onChangeHandler(debouncedValue)
      }, [debouncedValue, onChangeHandler]);

      return (
      <input
          defaultValue={defaultValue}
          onChange={clickHandler}
          type={type}
          className={cn(
              "flex h-12 w-full rounded-xl bg-grayscale-200 px-4",
              "py-3 text-base text-grayscale-500",
              "placeholder:text-base placeholder:text-grayscale-400 ring-1 ring-white",
              "focus:ring-1 focus:bg-grayscale-0 focus:ring-black focus:outline-none",
              "transition-all duration-300 ease-in-out",
              className
          )}
          placeholder={placeholder}
          ref={ref}
          {...props}
      />
    )
  }
)

ProfileInput.displayName = "ProfileInput"
