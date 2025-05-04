import {ITour} from "@/shared/types";

export interface IOrder {
    id: number
    tour: ITour
    userId: number
    groupCapacity: number
}