import { useState, useEffect } from "react";
import {IDuration} from "@/shared/types";

type ReturnType = {
    state: number
    update: (value: number[]) => void
    isError: boolean
}

export const useDuration = (store: IDuration): ReturnType => {

    const [state, setState] = useState<number>(store.duration)

    useEffect(() => setState(store.duration), [store])

    const update = (value: number[]) => {
        store.duration = value[0]
        setState(value[0])
    }

    return {
        state,
        isError: store.duration === 0,
        update
    }

}