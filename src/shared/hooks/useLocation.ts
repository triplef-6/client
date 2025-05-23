import * as React from "react";
import {useState} from "react";
import {useLocations} from "@/entities";
import {ILocationTour} from "@/shared/types";
import {validateByCity} from "@/shared/validate";
import {safeGet} from "@/shared/utils";

type StateType = {
    isOpen: boolean
    isTouched: boolean
    isCorrected: boolean
}

type ReturnType = {
    value: string
    state: StateType
    click: (e: React.ChangeEvent<HTMLInputElement>) => void
    select: (city: string) => void
    focus: () => void
    blur: () => void
    clear: () => void
    close: () => void
}

export const useLocation = (store: ILocationTour): ReturnType => {

    const {data: locations} = useLocations()

    const [inputValue, setInputValue] = useState<string>(
        store.location.city ?? ""
    )
    const [state, setState] = useState<StateType>({
        isOpen: false,
        isTouched: false,
        isCorrected: true,
    })

    const updateField = (newValue: string) => {

        const isCorrected = validateByCity(newValue, locations)
        const foundLocation = locations.find(i => i.city === newValue)

        setInputValue(newValue)
        setState({ isTouched: true, isOpen: true, isCorrected })

        if (state.isCorrected && foundLocation) store.location = foundLocation

    }

    const click = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        updateField(inputValue)
    }

    const select = (city: string) => {
        updateField(city)
        setState((prev) => ({ ...prev, isOpen: false }))
    }

    const focus = () => {
        setState((prev) => ({ ...prev, isOpen: true }))
    }

    const blur = () => {
        if (!state.isOpen && safeGet(() => store.location.city, "") === "") {
            setState((prev) => ({ ...prev, isTouched: true }))
        }
    }

    const clear = () => {
        setInputValue("")
        store.clearLocation()
    }

    const close = () => setState((prev) => ({
        ...prev,
        isOpen: false,
        isTouched: prev.isTouched && safeGet(() => store.location.city, "") === "",
    }))

    return {
        value: inputValue,
        state,
        click, select, focus, blur, clear, close
    }

}