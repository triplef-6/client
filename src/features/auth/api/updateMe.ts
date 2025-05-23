import {EndpointsType, IMe} from "@/shared/types";
import {apiClient, ApiException, isAxiosError, serializeUserToFormData} from "@/shared/lib";

export const updateMe = async (user: IMe): Promise<IMe> => {
    try {
        const formData = serializeUserToFormData(user)
        const response = await apiClient.put<IMe>(`${EndpointsType.USERS}/${EndpointsType.ME}`, formData)
        return response.data
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<IMe>(e.message, e.response?.status, e.response?.data as IMe | undefined)
        }
        throw e
    }
}