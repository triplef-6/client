import * as React from "react";
import {useState} from "react";

import {IPrice} from "@/shared/types";
import {cleanPriceInputValue, formatNumberWithSpaces} from "@/shared/utills";

type ReturnType = {
    value: string
    state: {
        isOpen: boolean
        isTouched: boolean
    }
    click: (e: React.ChangeEvent<HTMLInputElement>) => void
    focus: () => void
    blur: () => void
    clear: () => void
    close: () => void
}

export const usePrice = (store: IPrice, key: keyof IPrice): ReturnType => {

    const [state, setState] = useState<
        { isOpen: boolean, isTouched: boolean }
    >({ isOpen: false, isTouched: false })

    const updateField = (newValue: string) => {
        store[key] = cleanPriceInputValue(newValue)
        setState({
            isTouched: true,
            isOpen: true
        })
    }

    const click = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        updateField(inputValue)
    }

    const focus = () => {
        setState((prev) => ({ ...prev, isOpen: true }))
    }

    const blur = () => {
        if (!state.isOpen && store[key] === 0) {
            setState((prev) => ({ ...prev, isTouched: true }))
        }
    }

    const clear = () => {
        store[key] = 0
    }

    const close = () => setState((prev) => ({
        ...prev,
        isOpen: false,
        isTouched: prev.isTouched && store[key] === 0,
    }))

    const displayValue: string = store[key] === 0
        ? ""
        : state.isOpen
            ? store[key].toString()
            : `${formatNumberWithSpaces(store[key])} ₽`

    return {
        value: displayValue,
        state,
        click, focus, blur, clear, close
    }

}