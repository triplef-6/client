import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ISlot} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {deleteTour} from "@/entities/tour/api";

export const useDeleteSlots = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<ISlot>, number>({
        mutationFn: deleteTour,
        onMutate: async (tourId) => {
            await queryClient.cancelQueries({queryKey: ["slots", tourId]})
        },
        onSuccess: async (_, tourId) => {
            queryClient.removeQueries({queryKey: ["slots", tourId]})
        },
        onError: (e: ApiException<ISlot>) => console.error("Ошибка при удалении слотов:", e.message)
    })

}