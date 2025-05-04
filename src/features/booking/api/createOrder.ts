import {EndpointsType, IOrder} from "@/shared/types";
import {apiClient, ApiException, isAxiosError} from "@/shared/lib";

export const createOrder = async (order: IOrder): Promise<void> => {
    try {
        await apiClient.post<IOrder>(EndpointsType.BOOKING, order)
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<IOrder>(e.message, e.response?.status, e.response?.data as IOrder | undefined)
        }
        throw e
    }
}