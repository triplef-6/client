import {EndpointsType, IReview} from "@/shared/types";
import {apiClient, ApiException, isAxiosError} from "@/shared/lib";

export const getUserOrders = async (userId: number): Promise<IReview> => {
    try {
        const response = await apiClient.get<IReview>(
            `${EndpointsType.ME}/${EndpointsType.ORDERS}/${userId}`
        )
        return response.data
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<IReview>(e.message, e.response?.status, e.response?.data as IReview | undefined)
        }
        throw e
    }
}