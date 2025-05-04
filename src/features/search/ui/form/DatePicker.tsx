import {FC} from "react";
import {Calendar, CalendarButton, Popover, PopoverContent, PopoverTrigger} from "@/shared/ui";
import {observer} from "mobx-react-lite";
import {useDate, useSubmitted} from "@/shared/hooks";
import {searchTourStore as store} from "@/features";

export const DatePicker: FC = observer(() => {

    const {
        state,
        setIsOpen, select, click, clear
    } = useDate(store.searchParams)

    const {isSubmitted} = useSubmitted(store)

    return (
        <Popover open={state.isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger role={"form-datePicker"} asChild>
                <CalendarButton
                    isSubmitted={isSubmitted}
                    state={state}
                    onClick={click}
                    onClear={clear}
                />
            </PopoverTrigger>
            <PopoverContent side={"bottom"}>
                <Calendar
                    defaultMonth={state.range.to}
                    mode="range"
                    selected={state.range}
                    onSelect={select}
                    initialFocus
                    disabled={date => date < new Date() || date < new Date("1900-01-01")}
                />
            </PopoverContent>
        </Popover>
    );
})