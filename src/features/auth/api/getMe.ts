import { apiClient, ApiException, isAxiosError } from "@/shared/lib";
import {EndpointsType, IMe} from "@/shared/types";

export const getMe = async (): Promise<IMe> => {
    try {
        const response = await apiClient.get<IMe>(`${EndpointsType.USERS}/${EndpointsType.ME}`)
        return response.data
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<IMe>(e.message, e.response?.status, e.response?.data as IMe | undefined)
        }
        throw e
    }
}