import {SearchOrderParamsType} from "@/features/booking/types";

export const createSearchOrderUrlParams = (searchPrams: SearchOrderParamsType) => ({
    "tourId": searchPrams.tourId,
    "date": searchPrams.date,
    "time": searchPrams.time
})