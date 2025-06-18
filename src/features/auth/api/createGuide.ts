import {EndpointsType, GuideDto} from "@/shared/types";
import {
    apiClient,
    ApiException,
    isAxiosError,
    serializeGuideDtoToFormData,
} from "@/shared/lib";

export const createGuide = async (dto: GuideDto): Promise<void> => {
    try {
        const formData = serializeGuideDtoToFormData(dto)
        await apiClient.post<GuideDto>(`${EndpointsType.USERS}/${EndpointsType.APPLY_GUIDE}`, formData)
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<GuideDto>(e.message, e.response?.status, e.response?.data as GuideDto | undefined)
        }
        throw e
    }
}