import {EndpointsType, IOrder} from "@/shared/types";
import {apiClient, ApiException, isAxiosError} from "@/shared/lib";

export const getUserOrders = async (userId: number): Promise<IOrder[]> => {
    try {
        const response = await apiClient.get<IOrder[]>(`${EndpointsType.BOOKING}/${userId}`)
        return response.data
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<IOrder>(e.message, e.response?.status, e.response?.data as IOrder | undefined)
        }
        throw e
    }
}