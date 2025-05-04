import {ILocation, RangeType} from "@/shared/types";

export type SearchParamsType = {
    location: ILocation
    date: RangeType
    accessibility: string
    byCity: boolean
}