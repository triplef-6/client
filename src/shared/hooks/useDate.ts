import {useEffect, useState} from "react";
import {IDate, RangeType} from "@/shared/types";

type ReturnType = {
    state: {
        range: RangeType
        isOpen: boolean
        isTouched: boolean
    }
    select: (selectedRange: RangeType | undefined) => void
    setIsOpen: (isOpen: boolean) => void
    click: () => void
    clear: () => void
}

export const useDate = (store: IDate): ReturnType => {

    const [range, setRange] = useState<RangeType>(store.date)

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isTouched, setIsTouched] = useState<boolean>(false)

    useEffect(() => {
        store.date = range
    }, [range, store])

    const select = (selectedRange: RangeType | undefined) => {
        if (selectedRange) setRange(selectedRange)
        if (selectedRange && selectedRange.to) setIsOpen(false)
    }

    const clear = () => setRange({ from: undefined, to: undefined })

    const click = () => {
        setIsTouched(true)
        setIsOpen(true)
    }

    return {
        state: { isOpen, range, isTouched },
        setIsOpen, select, click, clear
    }

}