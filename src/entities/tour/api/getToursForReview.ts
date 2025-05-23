import {EndpointsType, ITour} from "@/shared/types";
import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {AxiosResponse} from "axios";

export const getToursForReview = async (): Promise<ITour[]> => {
    try {
        const response: AxiosResponse<ITour[]> = await apiClient.get<ITour[]>(`${EndpointsType.TOURS}/${EndpointsType.BOOKING}/${EndpointsType.ME}`)
        return response.data
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ITour>(e.message, e.response?.status, e.response?.data as ITour[] | undefined)
        }
        throw e
    }
}