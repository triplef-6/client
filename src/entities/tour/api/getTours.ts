import {ITour, SearchParamsType} from "@/shared/types";
import {AxiosResponse} from "axios";
import {apiClient, ApiException, isAxiosError} from "@/shared/lib";

type SearchTourParamsType = {
    sort: string,
    searchParams: SearchParamsType
}

export const getTours = async (searchTourParams: SearchTourParamsType): Promise<ITour[]> => {
    try {

        const { date, location, accessibility, byCity } = searchTourParams.searchParams;

        const params = {
            "_sort": searchTourParams.sort,
            "city": location.city,
            "region": location.region,
            "from": date.from?.toString().split("T")[0] || " ",
            "to": date.to?.toString().split("T")[0] || " ",
            "accessibility": accessibility,
            "byCity": byCity,
        }

        const response: AxiosResponse<ITour[]> = await apiClient.get<ITour[]>("tours", {
            params
        })
        return response.data

    } catch (e) {
        console.log("Tours not found.")
        if (isAxiosError(e)) {
            throw new ApiException<ITour>(e.message, e.response?.status, e.response?.data as ITour[] | undefined)
        }
        throw e
    }
}