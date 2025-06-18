import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ISlot} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {updateSlots} from "@/features/booking/api";

export const useUpdateSlots = () => {

    const queryClient = useQueryClient()

    return useMutation<ISlot[], ApiException<ISlot>, ISlot[]>({
        mutationFn: updateSlots,
        onMutate: async (updatedSlots) => {

            const tourId = updatedSlots[0].tourId

            await queryClient.cancelQueries({ queryKey: ["slots", tourId] })

            const previous = queryClient.getQueryData<ISlot[]>(["slots", tourId])
            queryClient.setQueryData(["slots", tourId], updatedSlots)

            return { previous }

        },
        onSuccess: async (updatedSlots) => {
            const tourId = updatedSlots[0].tourId
            await queryClient.invalidateQueries({ queryKey: ["slots", tourId] })
        },
        onError: () => console.error("Не удалось обновить слоты"),
        retry: 3
    })

}