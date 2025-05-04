import {ISubmitted} from "@/shared/types";

type ReturnType = {
    isSubmitted: boolean
}

export const useSubmitted = (store: ISubmitted): ReturnType => {
    return { isSubmitted: store.isSubmitted }
}