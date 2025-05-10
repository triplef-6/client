import * as React from "react";
import {useState} from "react";
import {ITime} from "@/shared/types";

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

export const useTime = (store: ITime): ReturnType => {

    const [state, setState] = useState<FieldType>({
        isOpen: false,
        isTouched: false
    })

    const updateField = (newValue: string) => {
        store.time = newValue
        setState({
            isTouched: true,
            isOpen: true
        })
        console.log(store.time)
    }

    const click = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        updateField(inputValue)
    }

    const focus = () => {
        setState((prev) => ({ ...prev, isOpen: true }))
    }

    const blur = () => {
        if (!state.isOpen && store.time === "") {
            setState((prev) => ({ ...prev, isTouched: true }))
        }
    }

    return {
        value: store.time,
        state,
        click, focus, blur
    }

}