import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils.ts";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Calendar, X } from "lucide-react";
import {RangeType} from "@/shared/types";

export const CalendarButtonVariants = cva(
    "flex items-center rounded-xl text-sm transition-colors ",
    {
        variants: {
            variant: {
                default:
                    "px-4 bg-grayscale-200 hover:bg-grayscale-300 data-[state=open]:text-sm data-[state=open]:bg-grayscale-0 " +
                    "data-[state=open]:border data-[state=open]:transition-all data-[state=open]:duration-300"
            },
            size: { default: "h-14 w-full wide:w-72" },
        },
        defaultVariants: { variant: "default", size: "default" },
    }
);

export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "value">,
        VariantProps<typeof CalendarButtonVariants> {
    asChild?: boolean;
    isSubmitted: boolean;
    state: {
        range: RangeType
        isOpen: boolean
        isTouched: boolean
    };
    onClear: () => void;
}

export const CalendarButton = React.forwardRef<
    HTMLButtonElement,
    ButtonProps
>(
    (
        {
            className,
            variant,
            size,
            asChild = false,
            onClear,
            state,
            isSubmitted,
            ...props
        }, ref
    ) => {

        const isCorrect: boolean =
            !state.range.from && !state.range.to && state.isTouched && !state.isOpen ||
            !state.range.from && !state.range.to && isSubmitted && !state.isOpen

        const isBorderCorrect: boolean =
            !state.range.from && !state.range.to && state.isTouched ||
            !state.range.from && !state.range.to && isSubmitted

        const Comp = asChild ? Slot : "button";

        const wrapperStyles: string = "flex flex-row gap-3 items-center w-full";
        const iconCalendarStyles: string = [
            "h-5 w-5",
            isCorrect ? "text-secondary-red" : "text-gray-500"
        ].join(" ");
        const iconXStyles: string = "h-5 w-5 cursor-pointer ml-auto text-grayscale-400";

        const labelStyles: string = [
            "text-grayscale-400 inline-block"
        ].join(" ");
        const dateStyles: string = "inline-block";
        const placeholderStyles: string = [
            "text-base",
            isCorrect ? "text-secondary-red" : "text-grayscale-400"
        ].join(" ");

        const borderStyle: string = isBorderCorrect
            ? "border border-secondary-red bg-red-100 hover:bg-red-100"
            : "border border-transparent"

        return (
            <Comp
                className={cn(
                    !state.range.from && !state.range.to && isSubmitted
                        ? "data-[state=open]:border-secondary-red"
                        : "data-[state=open]:border-grayscale-600",
                    CalendarButtonVariants({ variant, size, className }),
                    borderStyle
                )}
                ref={ref}
                {...props}
            >
                <div className={wrapperStyles}>
                    <Calendar className={iconCalendarStyles} />
                    {state.range.from && state.range.to ? (
                        <div className={"flex flex-row items-center w-full relative"}>
                            <div className={"flex flex-col items-start"}>
                                <label
                                    className={labelStyles}
                                    style={{ lineHeight: '1', marginTop: 0, marginBottom: 0 }}
                                >
                                    Когда
                                </label>
                                <label
                                    className={dateStyles}
                                    style={{ lineHeight: '1', marginTop: 0, marginBottom: 0 }}
                                >
                                    {
                                        format(state.range.from, "dd.MM.yy", { locale: ru })
                                        + " - " +
                                        format(state.range.to, "dd.MM.yy", { locale: ru })
                                    }
                                </label>
                            </div>
                            {state.range.from && state.range.to && <X onClick={onClear} className={iconXStyles} />}
                        </div>
                    ) : (
                        <label className={placeholderStyles}>
                            Когда
                        </label>
                    )}
                </div>
            </Comp>
        );
    }
);

CalendarButton.displayName = "Button";