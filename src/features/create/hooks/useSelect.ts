import {IAccessibility, ITourFormat, ITourFormatBehavior, SelectValuesType} from "@/shared/types";
import {useState} from "react";

interface IStore extends ITourFormatBehavior, IAccessibility, ITourFormat {}

type ReturnType = {
    state: {
        value: string
        isTouched: boolean
    }
    setValue: (value: string) => void
    focus: () => void
}

export const useSelect = (store: IStore, key: keyof IStore, values: SelectValuesType[]): ReturnType => {

    const [isTouched, setIsTouched] = useState<boolean>(false)
    const value: string = values.find(opt => opt.value === store[key])?.label || ""

    const setValue = (value: string) => store[key] = value
    const focus = () => setIsTouched(true)

    return {
        state: { value, isTouched },
        focus, setValue
    }

}