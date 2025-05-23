import {apiClient, ApiException, isAxiosError, serializeTagsToFormData} from "@/shared/lib";
import {EndpointsType} from "@/shared/types";

export const addTags = async (tags: string[]): Promise<void> => {
    try {
        const formData = serializeTagsToFormData(tags)
        await apiClient.post<number, string[]>(EndpointsType.TAGS, formData)
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<string[]>(e.message, e.response?.status, e.response?.data as string[] | undefined)
        }
        throw e
    }
}