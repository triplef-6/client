import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {EndpointsType, ITour} from "@/shared/types";

export const getFavourites = async (): Promise<ITour[]> => {
    try {
        const response = await apiClient.get<ITour[]>(EndpointsType.FAVOURITES)
        return response.data
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ITour>(
                e.message,
                e.response?.status,
                e.response?.data as ITour[] | undefined
            )
        }
        throw e
    }
}