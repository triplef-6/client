import * as React from "react";
import {useEffect, useState} from "react";
import {validatePhoneLen} from "@/shared/validate";
import {phoneMaskRu} from "@/shared/utills";
import {useEditContext} from "@/features";

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

    const {updatedUser: user, setUpdatedUser} = useEditContext()

    const [phone, setPhone] = useState(user.contacts?.phone ?? "")

    useEffect(() => {
        if (!validatePhoneLen(phone)) {
            setUpdatedUser({
                ...user,
                contacts: {
                    ...user.contacts,
                    phone
                }
            })
        }
    }, [phone])

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
        updateField(phoneMaskRu(inputValue))
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