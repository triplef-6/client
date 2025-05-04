import * as React from "react";
import {useState} from "react";
import {useLocations} from "@/entities";
import {ILocation, ILocationTour} from "@/shared/types";
import {validateByCity} from "@/shared/validate";

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

    const [state, setState] = useState<StateType>({
        isOpen: false,
        isTouched: false,
        isCorrected: true,
    })

    const updateField = (newValue: string) => {
        setState({
            isTouched: true,
            isOpen: true,
            isCorrected: validateByCity(newValue, locations),
        })
        if (state.isCorrected) store.location = locations.find(i => i.city === newValue) as ILocation
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
        if (!state.isOpen && store.location.city === "") {
            setState((prev) => ({ ...prev, isTouched: true }))
        }
    }


    const clear = () => {
        store.location.city = ""
    }

    const close = () => setState((prev) => ({
        ...prev,
        isOpen: false,
        isTouched: prev.isTouched && store.location.city === "",
    }))

    return {
        value: store.location?.city,
        state,
        click, select, focus, blur, clear, close
    }

}