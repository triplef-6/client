import * as React from "react";
import {useEffect, useState} from "react";
import {validateNickname} from "@/shared/validate";
import {useEditContext} from "@/features";

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

export const useTelegram = (): ReturnType => {

    const {updatedUser: user, setUpdatedUser} = useEditContext()

    const [state, setState] = useState<FieldType>({
        isOpen: false,
        isTouched: false,
        isCorrected: true
    })

    const [telegram, setTelegram] = useState(user.contacts?.telegram ?? "")

    useEffect(() => {
        setUpdatedUser({
            ...user,
            contacts: {
                ...user.contacts,
                telegram: telegram,
                phone: user.contacts?.phone ?? ""
            }
        })
    }, [telegram])

    const updateField = (newValue: string) => {
        setTelegram(newValue)
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
        if (telegram.startsWith("@")) setTelegram(prevState => prevState.slice(1))
        setState((prev) => ({ ...prev, isOpen: true }))
    }

    const blur = () => {
        if (!state.isOpen && telegram === "") setState((prev) => ({ ...prev, isTouched: true }))
        if (telegram && !telegram.startsWith("@")) setTelegram(prevState => `@${prevState}`)
    }

    const clear = () => {
        setTelegram("")
    }

    const close = () => setState((prev) => ({
        ...prev,
        isOpen: false,
        isTouched: prev.isTouched && telegram === "",
    }))

    return {
        value: telegram,
        state,
        clickInput, focus, blur, clear, close
    }

}