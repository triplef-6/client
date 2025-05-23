import {RangeType} from "@/shared/types";

export interface IDate {
    get date(): RangeType
    set date(value: RangeType)
}