import {ITour} from "@/shared/types";
import {AxiosResponse} from "axios";
import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {SearchParamsType} from "@/entities/tour/types";

export const getTours = async (searchParams: SearchParamsType): Promise<ITour[]> => {
    try {

        const params = {
            "_sort": searchParams.sort,
            "city": searchParams.city,
            "region": searchParams.region,
            "from": searchParams.from,
            "to": searchParams.to,
            "accessibility": searchParams.accessibility,
            "byCity": searchParams.byCity,
        }

        const response: AxiosResponse<ITour[]> = await apiClient.get<ITour[]>("tours", { params })
        return response.data

    } catch (e) {
        console.log("Tours not found")
        if (isAxiosError(e)) {
            throw new ApiException<ITour>(e.message, e.response?.status, e.response?.data as ITour[] | undefined)
        }
        throw e
    }
}