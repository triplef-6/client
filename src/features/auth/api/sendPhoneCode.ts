import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {EndpointsType} from "@/shared/types";

export const sendPhoneCode = async (phone: string): Promise<void> => {
    try {
        await apiClient.post<string>(`${EndpointsType.USERS}/${EndpointsType.CODE}`, phone)
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<string>(e.message, e.response?.status, e.response?.data as string | undefined)
        }
        throw e;
    }
}