import {ISlot} from "@/shared/types";

export const isSlotDuplicate = (slot: ISlot, slots: ISlot[]): boolean => slots.some(
    i => i.time === slot.time
)