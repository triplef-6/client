import {createTourStore as store} from "@/features";

type ReturnType = {
    disabled: boolean
    update: () => void
}

export const useDialogButton = (): ReturnType => ({
    disabled: store.slots.isCurrentDisabled,
    update: () => store.slots.addNewSlot(store.tourId)
})