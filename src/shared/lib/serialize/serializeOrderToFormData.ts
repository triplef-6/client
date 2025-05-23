import { IOrder } from "@/shared/types";

export const serializeOrderToFormData = (order: IOrder): FormData => {

    const formData = new FormData()

    const orderData: IOrder = {
        id: order.id,
        tourId: order.tourId,
        groupCapacity: order.groupCapacity,
    }

    formData.append(
        "order",
        new Blob([JSON.stringify(orderData)], { type: "application/json" })
    )

    return formData

}