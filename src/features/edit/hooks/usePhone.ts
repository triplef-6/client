import * as React from "react";
import {useEffect, useState} from "react";
import {validatePhoneLen} from "@/shared/validate";
import {phoneMask} from "@/shared/utills";
import {useAuthContext, useUpdateMe} from "@/features";
import {useDebounceValue} from "usehooks-ts";

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

export const usePhone = (): ReturnType => {

    const {user} = useAuthContext()
    const {mutate: update} = useUpdateMe()

    const [phone, setPhone] = useState(user.contacts?.phone ?? "")
    const [debouncedPhone] = useDebounceValue<string>(phone, 2000)

    useEffect(() => {
        if (!validatePhoneLen(debouncedPhone)) {
            update({...user, contacts: {phone: debouncedPhone}})
        }
    }, [debouncedPhone])

    const [state, setState] = useState<StateType>({
        isOpen: false,
        isTouched: false,
        isCorrected: true
    })

    const updateField = (newValue: string) => {
        setPhone(newValue)
        setState({
            ...state,
            isTouched: true,
            isOpen: true
        })
    }

    const click = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        updateField(phoneMask(inputValue))
    }

    const focus = () => {
        setState((prev) => ({ ...prev, isOpen: true }))
    }

    const blur = () => {
        if (!state.isOpen && phone === "") {
            setState((prev) => ({...prev, isTouched: true}))
        }
    }

    const clear = () => setPhone("")

    const close = () => setState((prev) => ({
        ...prev,
        isOpen: false,
        isTouched: prev.isTouched && phone === "",
        isCorrected: prev.isTouched ? !validatePhoneLen(phone): true
    }))

    return {
        value: phone,
        state,
        click, focus, blur, clear, close
    }

}