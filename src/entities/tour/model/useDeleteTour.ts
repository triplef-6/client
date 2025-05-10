import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ITour} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {deleteTour} from "@/entities/tour/api";
import {useMemo} from "react";
import {toJS} from "mobx";
import {searchTourStore as store} from "@/features";

export const useDeleteTour = () => {

    const queryClient = useQueryClient()
    const searchParams = useMemo(() => toJS(store.searchParams), [store.searchParams])

    return useMutation<void, ApiException<ITour>, number>({
        mutationFn: deleteTour,
        onMutate: async (id) => {
            await queryClient.cancelQueries({queryKey: ["tours", searchParams]})
            await queryClient.cancelQueries({queryKey: ["tour", id]})
        },
        onSuccess: async (_, id) => {
            await queryClient.invalidateQueries({queryKey: ["tours", searchParams]})
            queryClient.removeQueries({queryKey: ["tour", id]})
        },
        onError: (e: ApiException<ITour>) => console.error("Ошибка при удалении тура:", e.message)
    })

}