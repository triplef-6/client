import {EndpointsType, ISlot} from "@/shared/types";
import {apiClient, ApiException, isAxiosError, serializeSlotsToFormData} from "@/shared/lib";

export const createSlots = async (slots: ISlot[]): Promise<void> => {
    try {
        const formData = serializeSlotsToFormData(slots)
        await apiClient.post<ISlot[]>(EndpointsType.SLOTS, formData)
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ISlot>(e.message, e.response?.status, e.response?.data as ISlot | undefined)
        }
        throw e
    }
}