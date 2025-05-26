import {apiClient, ApiException, isAxiosError, serializeTourToFormData} from "@/shared/lib";
import {EndpointsType, ITour} from "@/shared/types";

export const updateTour = async (tour: ITour): Promise<ITour> => {
    try {
        const formData = serializeTourToFormData(tour)
        const response = await apiClient.put<ITour>(EndpointsType.TOURS, formData)
        return response.data
    } catch (e) {
        console.log(e)
        if (isAxiosError(e)) {
            throw new ApiException<ITour>(e.message, e.response?.status, e.response?.data as ITour | undefined)
        }
        throw e
    }
}