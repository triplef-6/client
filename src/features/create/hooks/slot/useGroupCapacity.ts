import { useState, useEffect } from "react";
import {createTourStore as store} from "@/features";
import {autorun} from "mobx";

type ReturnType = {
    state: number
    update: (value: number[]) => void
    isError: boolean
}

export const useGroupCapacity = (): ReturnType => {

    const [state, setState] = useState<number>(store.slots.current.groupCapacity)

    useEffect(() => {

        const dispose = autorun(() => {
            setState(store.slots.current.groupCapacity)
        })

        return () => dispose()

    }, [])

    const update = (value: number[]) => {
        store.slots.current.groupCapacity = value[0]
        setState(value[0])
    }

    return {
        state,
        isError: store.slots.current.groupCapacity === 0,
        update
    }

}