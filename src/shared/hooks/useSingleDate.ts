import {useEffect, useState} from "react";
import {ISingleDate} from "@/shared/types";

type ReturnType = {
    state: {
        date: Date | undefined
        isOpen: boolean
        isTouched: boolean
    }
    select: (selectedRange: Date | undefined) => void
    setIsOpen: (isOpen: boolean) => void
    click: () => void
    clear: () => void
}

export const useSingleDate = (store: ISingleDate): ReturnType => {

    const [date, setDate] = useState<Date | undefined>(store.date)

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isTouched, setIsTouched] = useState<boolean>(false)

    useEffect(() => {
        store.date = date
    }, [date, store])

    const select = (selectedRange: Date | undefined) => {
        if (selectedRange) setDate(selectedRange)
        if (selectedRange) setIsOpen(false)
    }

    const clear = () => setDate(undefined)

    const click = () => {
        setIsTouched(true)
        setIsOpen(true)
    }

    return {
        state: { isOpen, date, isTouched },
        setIsOpen, select, click, clear
    }

}