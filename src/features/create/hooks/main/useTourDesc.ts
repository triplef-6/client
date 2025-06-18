import React, {useState} from "react";
import {IInfo, IMeetingPlace, IOrgDetails, IWhatToExpect} from "@/shared/types";

interface IStore extends IInfo, IMeetingPlace, IOrgDetails, IWhatToExpect {}

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

export const useTourDesc = (store: IStore, key: keyof IStore): ReturnType => {

    const [isOpen, setIsOpen] = useState(false)

    const updateField = (newValue: string) => {
        store[key] = newValue
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
        if (store[key] === "") setIsOpen(true)
    }

    return {
        value: store[key],
        state: { isOpen },
        click: click,
        textareaClick,
        focus: focus,
        blur: blur
    }

}