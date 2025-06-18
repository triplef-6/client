import {apiClient, ApiException, isAxiosError, serializeSlotsToFormData} from "@/shared/lib";
import {EndpointsType, ISlot} from "@/shared/types";

export const updateSlots = async (slots: ISlot[]): Promise<ISlot[]> => {
    try {
        const formData = serializeSlotsToFormData(slots)
        const response = await apiClient.put<ISlot[]>(EndpointsType.SLOTS, formData)
        return response.data
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ISlot>(e.message, e.response?.status, e.response?.data as ISlot | undefined)
        }
        throw e
    }
}