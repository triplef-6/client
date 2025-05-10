import {EndpointsType, IReview} from "@/shared/types";
import {apiClient, ApiException, isAxiosError, serializeReviewToFormData} from "@/shared/lib";

export const createReview = async (review: IReview): Promise<void> => {
    try {
        const formData = serializeReviewToFormData(review)
        await apiClient.post<IReview>(EndpointsType.REVIEWS, formData)
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<IReview>(e.message, e.response?.status, e.response?.data as IReview | undefined)
        }
        throw e
    }
}