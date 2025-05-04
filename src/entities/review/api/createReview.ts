import {EndpointsType, IReview, IMe} from "@/shared/types";
import {apiClient, ApiException, isAxiosError} from "@/shared/lib";

export const createReview = async (user: IMe, review: IReview): Promise<void> => {
    try {
        await apiClient.post<IReview>(EndpointsType.REVIEWS, { user, review })
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<IReview>(e.message, e.response?.status, e.response?.data as IReview | undefined)
        }
        throw e
    }
}