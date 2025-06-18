import {EndpointsType, ITour} from "@/shared/types";
import {AxiosResponse} from "axios";
import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {SearchParamsType} from "@/entities/tour/types";
import {createSearchTourUrlParams} from "@/entities/tour/utils";

export const getTours = async (searchParams: SearchParamsType): Promise<ITour[]> => {
    try {
        const params = createSearchTourUrlParams(searchParams)
        const response: AxiosResponse<ITour[]> = await apiClient.get<ITour[]>(EndpointsType.TOURS, { params })
        return response.data
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ITour>(e.message, e.response?.status, e.response?.data as ITour[] | undefined)
        }
        throw e
    }
}