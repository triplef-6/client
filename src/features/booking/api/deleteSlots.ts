import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {EndpointsType, ISlot} from "@/shared/types";

export const deleteSlots = async (tourId: number): Promise<void> => {
    try {
        await apiClient.delete(`${EndpointsType.SLOTS}/${tourId}`)
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ISlot>(e.message, e.response?.status, e.response?.data as ISlot | undefined)
        }
        throw e
    }
}