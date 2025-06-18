import {useEffect, useState} from "react";
import {createTourStore as store} from "@/features";

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

export const useSingleDate = (): ReturnType => {

    const [date, setDate] = useState<Date | undefined>(store.slots.current.date)

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isTouched, setIsTouched] = useState<boolean>(false)

    useEffect(() => {
        store.slots.current.date = date
    }, [date])

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