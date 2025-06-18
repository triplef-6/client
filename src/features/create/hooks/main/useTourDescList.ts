import {useState} from "react";
import {IPlaces, ITopics} from "@/shared/types";

interface IStore extends ITopics, IPlaces {}

type ReturnType = {
    value: string[]
    state: {
        isOpen: boolean
    }
    focus: () => void
    blur: (index: number) => void
    updateItem: (index: number, newValue: string) => void
    addItem: () => void
    removeItem: () => void
}

export const useTourDescList = (store: IStore, key: keyof IStore): ReturnType => {

    const [isOpen, setIsOpen] = useState(false)

    const addItem = () => {
        store[key] = [...store[key], ""]
    }

    const removeItem = () => {
        if (store[key].length > 0) store[key] = store[key].slice(0, -1)
    }

    const updateItem = (index: number, newValue: string) => {

        const temp = [...store[key]]
        temp[index] = newValue
        store[key] = temp

        setIsOpen(true)

    }

    const focus = () => setIsOpen(true)

    const blur = (index: number) => {
        if (store[key][index] === "") setIsOpen(true)
    }

    return {
        value: store[key],
        state: { isOpen },
        focus: focus,
        blur: blur,
        addItem,
        removeItem,
        updateItem
    }

}