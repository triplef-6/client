import {SearchParamsType} from "@/entities/tour/types";

export const createSearchTourUrlParams = (searchParams: SearchParamsType) => ({
    "_sort": searchParams.sort,
    "city": searchParams.city,
    "region": searchParams.region,
    "from": searchParams.from,
    "to": searchParams.to,
    "accessibility": searchParams.accessibility,
    "byCity": searchParams.byCity
})