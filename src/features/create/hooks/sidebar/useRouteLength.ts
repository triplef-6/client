import { useState, useEffect } from "react";
import {IRouteLength} from "@/shared/types";

type ReturnType = {
    state: number
    update: (value: number[]) => void
    isError: boolean
}

export const useRouteLength = (store: IRouteLength): ReturnType => {

    const [state, setState] = useState<number>(store.routeLength)

    useEffect(() => setState(store.routeLength), [store])

    const update = (value: number[]) => {
        store.routeLength = value[0]
        setState(value[0])
    }

    return {
        state,
        isError: store.routeLength === 0,
        update
    }

}