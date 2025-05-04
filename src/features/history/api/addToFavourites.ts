import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {EndpointsType, ITour} from "@/shared/types";

export const addToFavourites = async (tourId: number): Promise<void> => {
    try {
        await apiClient.post<ITour>(`${EndpointsType.FAVOURITES}/${tourId}`)
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ITour>(e.message, e.response?.status, e.response?.data as ITour | undefined)
        }
        throw e
    }
}