import {useMutation} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ISlot} from "@/shared/types";
import {createSlots} from "@/features/booking/api";

export const useCreateSlots = () => {
    return useMutation<void, ApiException<ISlot>, ISlot[]>({
        mutationFn: createSlots,
        onError: (e: ApiException<ISlot>) => console.error("Не удалось добавить слоты к экскурсии", e.message),
        retry: 3
    })
}