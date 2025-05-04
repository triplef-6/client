import React, {useEffect, useState} from "react";
import {ITitle} from "@/shared/types";

type ReturnType = {
    value: string
    state: {
        isOpen: boolean
    }
    click: (e: React.ChangeEvent<HTMLInputElement>) => void
    textareaClick: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    focus: () => void
    blur: () => void
}

export const useTitle = (store: ITitle): ReturnType => {

    const [isOpen, setIsOpen] = useState(false)

    const updateField = (newValue: string) => {
        store.title = newValue
        setIsOpen(true)
    }

    const click = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        updateField(inputValue)
    }

    const textareaClick = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = e.target.value
        updateField(inputValue)
    }

    const focus = () => setIsOpen(true)

    const blur = () => {
        if (store.title === "") setIsOpen(true)
    }

    useEffect(() => {
        console.log(store.title)
    }, [store.title]);

    return {
        value: store.title,
        state: { isOpen },
        click: click,
        textareaClick,
        focus: focus,
        blur: blur
    }

}