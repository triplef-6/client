import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ITour} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {deleteTour} from "@/entities/tour/api";

export const useDeleteTour = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<ITour>, number>({
        mutationFn: deleteTour,
        onMutate: async (id) => {
            await queryClient.cancelQueries({queryKey: ["tours"]})
            await queryClient.cancelQueries({queryKey: ["tour", id]})
        },
        onSuccess: async (_, id) => {
            await queryClient.invalidateQueries({queryKey: ["tours"]})
            queryClient.removeQueries({queryKey: ["tour", id]})
        },
        onError: (e: ApiException<ITour>) => console.error("Ошибка при удалении тура:", e.message)
    })

}