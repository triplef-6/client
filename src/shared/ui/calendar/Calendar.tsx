import * as React from "react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/app/lib/utils.ts";
import { ru } from "date-fns/locale";
import { CalendarButtonVariants } from "@/shared/ui/calendar/CalendarButton.tsx";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function Calendar({className, classNames, showOutsideDays = true, ...props}: CalendarProps) {
    return (
        <DayPicker
            locale={ru}
            showOutsideDays={showOutsideDays}
            className={cn("w-72 flex justify-center p-2 bg-grayscale-0 z-50 rounded-md relative", className)}
            classNames={{
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                month: "space-y-4",
                caption: "flex justify-center pt-1 relative items-center",
                caption_label: "text-sm font-medium",
                nav: "space-x-1 flex items-center",
                nav_button: cn(
                    CalendarButtonVariants({ variant: "ghost" }),
                    "h-7 w-7 p-2 opacity-50 hover:opacity-100"
                ),
                nav_button_previous: "absolute left-1",
                nav_button_next: "absolute right-1",
                table: "w-full border-collapse space-y-1 bg-grayscale-0",
                head_row: "flex",
                head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
                row: "flex w-full mt-2",
                cell: cn("relative p-0 text-center text-sm focus-within:relative focus-within:z-20"),
                day: cn(
                    CalendarButtonVariants({ variant: "default" }),
                    "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                ),
                // Стили для диапазона
                day_range_start: "bg-primary-0 rounded-md", // Начальная дата диапазона
                day_range_middle: "bg-gray-100", // Промежуточные даты диапазона
                day_range_end: "bg-primary-0 rounded-md", // Конечная дата диапазона
                day_selected:
                    "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground " +
                    "focus:bg-primary focus:text-primary-foreground",
                day_today: "bg-accent text-accent-foreground",
                day_outside:
                    "day-outside text-muted-foreground aria-selected:bg-accent/50 " +
                    "aria-selected:text-muted-foreground",
                day_disabled: "text-muted-foreground opacity-50",
                day_hidden: "invisible",
                ...classNames,
            }}
            {...props}
        />
    );
}

Calendar.displayName = "Calendar";