import * as React from "react";
import {useEffect, useState} from "react";
import {validateNickname} from "@/shared/validate";
import {useAuthContext, useUpdateMe} from "@/features";
import {useDebounceValue} from "usehooks-ts";

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

export const useVk = (): ReturnType => {

    const {user} = useAuthContext()
    const {mutate: update} = useUpdateMe()
    
    const [state, setState] = useState<FieldType>({
        isOpen: false,
        isTouched: false,
        isCorrected: true
    })

    const [vk, setVk] = useState(user.contacts?.vk ?? "")
    const [debouncedVk] = useDebounceValue<string>(vk, 2000)

    useEffect(() => {
        update({
            ...user,
            contacts: {
                telegram: user.contacts?.telegram ?? "",
                phone: user.contacts?.phone ?? "",
                vk: debouncedVk
            }
        })
    }, [debouncedVk])

    const updateField = (newValue: string) => {
        setVk(newValue)
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
        if (vk.startsWith("@")) setVk(prevState => prevState.slice(1))
        setState((prev) => ({ ...prev, isOpen: true }))
    }

    const blur = () => {
        if (!state.isOpen && vk === "") setState((prev) => ({ ...prev, isTouched: true }))
        if (vk && !vk.startsWith("@")) setVk(prevState => `@${prevState}`)
    }

    const clear = () => {
        setVk("")
    }

    const close = () => setState((prev) => ({
        ...prev,
        isOpen: false,
        isTouched: prev.isTouched && vk === "",
    }))

    return {
        value: vk,
        state,
        clickInput, focus, blur, clear, close
    }

}