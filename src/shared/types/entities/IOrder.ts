import {ISlot} from "@/shared/types";

export interface IOrder {
    id: number
    slot: ISlot
    groupCapacity: number
}