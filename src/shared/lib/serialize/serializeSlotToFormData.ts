import {ISlot} from "@/shared/types";

export const serializeSlotToFormData = (slot: ISlot): FormData => {

    const formData = new FormData()

    const normalizedSlot = {
        ...slot,
        date: slot.date instanceof Date ? slot.date.toISOString().split("T")[0] : "",
    }

    formData.append(
        "slots",
        new Blob([JSON.stringify(normalizedSlot)], { type: "application/json" })
    )

    return formData

}