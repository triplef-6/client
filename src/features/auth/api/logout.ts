import {apiClient, ApiException} from "@/shared/lib";
import {EndpointsType} from "@/shared/types";
import {isAxiosError} from "axios";

export const logout = async (): Promise<void> => {
    try {
        await apiClient.post(EndpointsType.LOGOUT, {}, { withCredentials: true })
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<void>(e.message, e.response?.status)
        }
        throw e
    }
}