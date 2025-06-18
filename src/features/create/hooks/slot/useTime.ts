import * as React from "react";
import {useState} from "react";
import {createTourStore as store} from "@/features";

type FieldType = {
    isOpen: boolean
    isTouched: boolean
}

type ReturnType = {
    value: string
    state: FieldType
    click: (e: React.ChangeEvent<HTMLInputElement>) => void
    focus: () => void
    blur: () => void
}

export const useTime = (): ReturnType => {

    const [state, setState] = useState<FieldType>({
        isOpen: false,
        isTouched: false
    })

    const updateField = (newValue: string) => {
        store.slots.current.time = newValue
        setState({ isTouched: true, isOpen: true })
    }

    const click = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        updateField(inputValue)
    }

    const focus = () => {
        setState((prev) => ({ ...prev, isOpen: true }))
    }

    const blur = () => {
        if (!state.isOpen && store.slots.current.time === "") {
            setState((prev) => (
                { ...prev, isTouched: true }
            ))
        }
    }

    return {
        value: store.slots.current.time,
        state,
        click, focus, blur
    }

}