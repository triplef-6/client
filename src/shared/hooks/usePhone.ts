import * as React from "react";
import {useState} from "react";
import {IContact} from "@/shared/types";
import {validatePhoneLen} from "@/shared/validate";
import {phoneMaskRu} from "@/shared/lib/format";

type StateType = {
    isOpen: boolean,
    isTouched: boolean,
    isCorrected: boolean
}

type ReturnType = {
    value: string
    state: StateType
    click: (e: React.ChangeEvent<HTMLInputElement>) => void
    focus: () => void
    blur: () => void
    clear: () => void
    close: () => void
}

export const usePhone = (store: IContact): ReturnType => {

    const [state, setState] = useState<StateType>({
        isOpen: false,
        isTouched: false,
        isCorrected: true
    })

    const updateField = (newValue: string) => {
        store.phone = newValue
        setState({
            ...state,
            isTouched: true,
            isOpen: true
        })
    }

    const click = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        updateField(phoneMaskRu(inputValue))
    }

    const focus = () => {
        setState((prev) => ({ ...prev, isOpen: true }))
    }

    const blur = () => {
        if (!state.isOpen && store.phone === "") {
            setState((prev) => ({
                ...prev,
                isTouched: true
            }))
        }
    }

    const clear = () => {
        store.phone = ""
    }

    const close = () => setState((prev) => ({
        ...prev,
        isOpen: false,
        isTouched: prev.isTouched && store.phone === "",
        isCorrected: prev.isTouched ? !validatePhoneLen(store.phone): true
    }))

    return {
        value: store.phone,
        state,
        click, focus, blur, clear, close
    }

}