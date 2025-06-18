import {ISlot} from "@/shared/types";
import {createTourStore as store} from "@/features";

type ReturnType = {
    clear: () => void
}

export const useDeleteButton = (current: ISlot): ReturnType => ({
    clear: () => store.slots.delete(current.id)
})