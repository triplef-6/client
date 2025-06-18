import { IOrder } from "@/shared/types";

export const serializeOrderToFormData = (order: IOrder): FormData => {

    const formData = new FormData()

    const orderData = {
        id: order.id,
        slot: {
            ...order.slot,
            date: order.slot.date instanceof Date ? order.slot.date.toISOString().split("T")[0] : "",
        },
        groupCapacity: order.groupCapacity,
    }

    formData.append(
        "order",
        new Blob([JSON.stringify(orderData)], { type: "application/json" })
    )

    return formData

}