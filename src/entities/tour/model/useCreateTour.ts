import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ITour} from "@/shared/types";
import {createTour} from "@/entities/tour/api";
import {useMemo} from "react";
import {toJS} from "mobx";
import {searchTourStore as store} from "@/features";

export const useCreateTour = () => {

    const queryClient = useQueryClient()
    const searchParams = useMemo(() => toJS(store.searchParams), [store.searchParams])

    return useMutation<void, ApiException<ITour>, ITour>({
        mutationFn: (tour) => createTour(tour),
        onMutate: async (newTour) => {

            await queryClient.cancelQueries({ queryKey: ["tours", searchParams] })

            const previous = queryClient.getQueryData<ITour[]>(["tours", searchParams])
            queryClient.setQueryData<ITour[]>(["tours", searchParams], (old = []) => [...old, newTour])

            return { previous }

        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ["tours", searchParams]})
        },
        onError: (e: ApiException<ITour>) => console.error("Не удалось добавить экскурсию", e.message)
    })

}