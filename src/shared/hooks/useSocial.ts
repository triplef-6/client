import * as React from "react";
import {useState} from "react";
import {IContact, IContacts} from "@/shared/types";
import {validateNickname} from "@/shared/validate";

type FieldType = {
    isOpen: boolean
    isTouched: boolean
    isCorrected: boolean
}

type ReturnType = {
    value: string
    state: FieldType
    clickInput: (e: React.ChangeEvent<HTMLInputElement>) => void
    focus: () => void
    blur: () => void
    clear: () => void
    close: () => void
}

export const useSocial = (store: IContact, key: Exclude<keyof IContacts, "phone">): ReturnType => {

    const [state, setState] = useState<FieldType>({
        isOpen: false,
        isTouched: false,
        isCorrected: true
    })

    const updateField = (newValue: string) => {
        store[key] = newValue
        setState({
            isTouched: true,
            isOpen: true,
            isCorrected: validateNickname(newValue)
        })
    }

    const clickInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        updateField(inputValue)
    }

    const focus = () => {
        if (store[key].startsWith("@")) store[key] = store[key].slice(1)
        setState((prev) => ({ ...prev, isOpen: true }))
    }

    const blur = () => {
        if (!state.isOpen && store[key] === "") {
            setState((prev) => ({ ...prev, isTouched: true }))
        }
        if (store[key] && !store[key].startsWith("@")) store[key] = `@${store[key]}`
    }

    const clear = () => {
        store[key] = ""
    }

    const close = () => setState((prev) => ({
        ...prev,
        isOpen: false,
        isTouched: prev.isTouched && store[key] === "",
    }))

    return {
        value: store[key],
        state,
        clickInput, focus, blur, clear, close
    }

}