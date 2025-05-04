import {IByCity} from "@/shared/types";

type ReturnType = {
    state: boolean
    update: (value: boolean) => void
}

export const useSwitch = (store: IByCity): ReturnType => {
    const update = (value: boolean) => store.byCity = value
    return { state: store.byCity, update }
}