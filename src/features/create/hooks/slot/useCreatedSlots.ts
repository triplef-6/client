import {ISlot} from "@/shared/types";
import {createTourStore as store} from "@/features";

export const useCreatedSlots = (): ISlot[] => store.slots.slots