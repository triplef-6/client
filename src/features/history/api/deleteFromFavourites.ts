import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {EndpointsType, ITour} from "@/shared/types";

export const deleteFromFavourites = async (tourId: number): Promise<void> => {
    try {
        await apiClient.delete(`${EndpointsType.FAVOURITES}/${tourId}`)
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ITour>(e.message, e.response?.status, e.response?.data as ITour | undefined)
        }
        throw e
    }
}