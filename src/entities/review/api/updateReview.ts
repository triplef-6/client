import {EndpointsType, IReview} from "@/shared/types";
import {apiClient, ApiException, isAxiosError, serializeReviewToFormData} from "@/shared/lib";

export const updateReview = async (review: IReview): Promise<IReview> => {
    try {
        const formData = serializeReviewToFormData(review)
        const {data} = await apiClient.put<IReview>(EndpointsType.REVIEWS, formData)
        return data
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<IReview>(e.message, e.response?.status, e.response?.data as IReview | undefined)
        }
        throw e
    }
}