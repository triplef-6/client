import { apiClient, ApiException, isAxiosError } from "@/shared/lib";
import { EndpointsType, ITour } from "@/shared/types";

export const addManyToFavourites = async (tourIds: number[]): Promise<void> => {
    try {
        await apiClient.post<void>(`${EndpointsType.FAVOURITES}/many`, { ids: tourIds })
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ITour>(e.message, e.response?.status, e.response?.data as ITour | undefined)
        }
        throw e
    }
}