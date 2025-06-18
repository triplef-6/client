import * as React from "react";
import {useState} from "react";
import {validatePhoneLen} from "@/shared/validate";
import {phoneMaskRu} from "@/shared/lib/format";

type StateType = {
    isOpen: boolean,
    isTouched: boolean,
    isCorrected: boolean
    isValidForSubmit: boolean
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

export const usePhone = (): ReturnType => {

    const [phone, setPhone] = useState("")

    const [state, setState] = useState<StateType>({
        isOpen: false,
        isTouched: false,
        isCorrected: true,
        isValidForSubmit: false
    })

    const updateField = (newValue: string) => {
        setPhone(newValue)
        setState({
            ...state,
            isTouched: true,
            isOpen: true,
            isValidForSubmit: !validatePhoneLen(newValue)
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
        if (!state.isOpen && phone === "") {
            setState((prev) => ({
                ...prev,
                isTouched: true
            }))
        }
    }

    const clear = () => {
        setPhone("")
        setState((prev) => ({
            ...prev,
            isValidForSubmit: false
        }))
    }

    const close = () => setState((prev) => ({
        ...prev,
        isOpen: false,
        isTouched: prev.isTouched && phone === "",
        isCorrected: prev.isTouched ? !validatePhoneLen(phone): true,
        isValidForSubmit: !validatePhoneLen(phone)
    }))

    return {
        value: phone,
        state,
        click, focus, blur, clear, close
    }

}