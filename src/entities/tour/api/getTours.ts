import {ITour, SearchParamsType} from "@/shared/types";
import {AxiosResponse} from "axios";
import {apiClient, ApiException, isAxiosError} from "@/shared/lib";

type SearchTourParamsType = {
    sort: string,
    searchParams: SearchParamsType
}

export const getTours = async (searchTourParams: SearchTourParamsType): Promise<ITour[]> => {
    try {
        const response: AxiosResponse<ITour[]> = await apiClient.get<ITour[]>("search", {
            params: searchTourParams
        })
        return response.data
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ITour>(e.message, e.response?.status, e.response?.data as ITour[] | undefined)
        }
        throw e
    }
}