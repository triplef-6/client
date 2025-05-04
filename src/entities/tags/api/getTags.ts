import {EndpointsType} from "@/shared/types";
import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {AxiosResponse} from "axios";

export const getTags = async (): Promise<string[]> => {
    try {
        const response: AxiosResponse<string[]> = await apiClient.get<string[]>(EndpointsType.TAGS)
        return response.data
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<string[]>(e.message, e.response?.status, e.response?.data as string[] | undefined)
        }
        throw e
    }
}