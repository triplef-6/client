import { IOrder } from "@/shared/types";

export const serializeOrderToFormData = (order: IOrder): FormData => {

    const formData = new FormData()

    formData.append("id", order.id.toString())
    formData.append("tourId", order.tourId.toString())
    formData.append("userId", order.userId.toString())
    formData.append("groupCapacity", order.groupCapacity.toString())

    return formData

}