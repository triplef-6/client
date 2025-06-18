import {EndpointsType, IOrder} from "@/shared/types";
import {AxiosResponse} from "axios";
import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {SearchOrderParamsType} from "@/features/booking/types";
import {createSearchOrderUrlParams} from "@/features/booking/utils";

export const getOrder = async (searchParams: SearchOrderParamsType): Promise<IOrder> => {
    try {
        const params = createSearchOrderUrlParams(searchParams)
        const response: AxiosResponse<IOrder> = await apiClient.get<IOrder>(`${EndpointsType.BOOKING}/order`, { params })
        return response.data
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<IOrder>(e.message, e.response?.status, e.response?.data as IOrder | undefined)
        }
        throw e
    }
}