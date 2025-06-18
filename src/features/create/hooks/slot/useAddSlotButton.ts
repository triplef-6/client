import {createTourStore as store} from "@/features";

export const useAddSlotButton = (): boolean => {
    return store.slots.isDuplicate
}