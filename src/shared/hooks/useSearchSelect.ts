import {useState} from "react";
import {IAccessibility, ISort, SelectValuesType} from "@/shared/types";

interface IStore extends IAccessibility, ISort {}

type ReturnType = {
    state: {
        value: string
        isTouched: boolean
    }
    setValue: (value: string) => void
    focus: () => void
}

export const useSearchSelect = (store: IStore, key: keyof IStore, values: SelectValuesType[]): ReturnType => {

    const [isTouched, setIsTouched] = useState<boolean>(false)
    const value: string = values.find(opt => opt.value === store[key])?.label || ""

    const setValue = (value: string) => store[key] = value
    const focus = () => setIsTouched(true)

    return {
        state: { value, isTouched },
        focus, setValue
    }

}