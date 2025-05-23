import {ITourFormat, SelectValuesType} from "@/shared/types";
import {useState} from "react";

type ReturnType = {
    state: {
        value: string
        isTouched: boolean
    }
    setValue: (value: string) => void
    focus: () => void
}

export const useTourFormat = (store: ITourFormat, values: SelectValuesType[]): ReturnType => {

    const [isTouched, setIsTouched] = useState<boolean>(false)
    const value: string = values.find(opt => opt.value === store.format)?.label || ""

    const setValue = (value: string) => store.format = value
    const focus = () => setIsTouched(true)

    return {
        state: { value, isTouched },
        focus, setValue
    }

}