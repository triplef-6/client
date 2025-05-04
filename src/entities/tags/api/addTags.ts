import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {EndpointsType} from "@/shared/types";

export const addTags = async (tags: string[]): Promise<void> => {
    try {
        await apiClient.post<number, string[]>(EndpointsType.TAGS, tags)
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<string[]>(e.message, e.response?.status, e.response?.data as string[] | undefined)
        }
        throw e
    }
}