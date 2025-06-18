import {EndpointsType, ISlot} from "@/shared/types";
import {AxiosResponse} from "axios";
import {apiClient, ApiException, isAxiosError} from "@/shared/lib";

export const getSlotsByTourId = async (tourId: number): Promise<ISlot[]> => {
    try {
        const response: AxiosResponse<ISlot[]> = await apiClient.get<ISlot[]>(
            `${EndpointsType.SLOTS}/tour/${tourId}`
        )
        return response.data
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ISlot>(e.message, e.response?.status, e.response?.data as ISlot[] | undefined)
        }
        throw e
    }
}