import {EndpointsType, ITour} from "@/shared/types";
import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {AxiosResponse} from "axios";

export const getToursByContributor = async (contributorId: number): Promise<ITour[]> => {
    try {
        const response: AxiosResponse<ITour[]> = await apiClient.get<ITour[]>(
            `${EndpointsType.TOURS}/guide/${contributorId}`
        )
        return response.data
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ITour>(e.message, e.response?.status, e.response?.data as ITour[] | undefined)
        }
        throw e
    }
}