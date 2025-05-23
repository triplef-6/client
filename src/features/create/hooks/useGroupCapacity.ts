import { useState, useEffect } from "react";
import {IGroupCapacity} from "@/shared/types";

type ReturnType = {
    state: number
    update: (value: number[]) => void
    isError: boolean
}

export const useGroupCapacity = (store: IGroupCapacity): ReturnType => {

    const [state, setState] = useState<number>(store.groupCapacity)

    useEffect(() => setState(store.groupCapacity), [store])

    const update = (value: number[]) => {
        store.groupCapacity = value[0]
        setState(value[0])
    }

    return {
        state,
        isError: store.groupCapacity === 0,
        update
    }

}