import {FC} from "react";
import {observer} from "mobx-react-lite";
import {Calendar, CalendarSingleButton, Popover, PopoverContent, PopoverTrigger} from "@/shared/ui";
import {useSingleDate, useSubmitted} from "@/features/create/hooks";

export const DatePicker: FC = observer(() => {

    const {state, setIsOpen, select, click, clear} = useSingleDate()
    const isSubmitted = useSubmitted()

    return (
        <Popover open={state.isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <CalendarSingleButton
                    isSubmitted={isSubmitted}
                    state={state}
                    onClick={click}
                    onClear={clear}
                />
            </PopoverTrigger>
            <PopoverContent side={"bottom"}>
                <Calendar
                    defaultMonth={state.date}
                    mode={"single"}
                    selected={state.date}
                    onSelect={select}
                    initialFocus
                    disabled={date => date < new Date() || date < new Date("1900-01-01")}
                />
            </PopoverContent>
        </Popover>
    );
})