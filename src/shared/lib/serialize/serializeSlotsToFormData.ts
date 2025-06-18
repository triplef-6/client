import {ISlot} from "@/shared/types";

export const serializeSlotsToFormData = (slots: ISlot[]): FormData => {

    const formData = new FormData()

    const normalizedSlots = slots.map(slot => ({
        ...slot,
        date: slot.date ? slot.date.toISOString() : ""
    }))

    formData.append(
        "slots",
        new Blob([JSON.stringify(normalizedSlots)], { type: "application/json" })
    )

    return formData

}