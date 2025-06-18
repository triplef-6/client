import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ITour, RouteNames} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {updateTour} from "@/entities/tour/api";
import {useNavigate} from "react-router-dom";
import {createTourStore as store, useUpdateSlots} from "@/features";

export const useUpdateTour = () => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const {mutate: updateSlots} = useUpdateSlots()

    return useMutation<ITour, ApiException<ITour>, ITour>({
        mutationFn: updateTour,
        onMutate: async (updatedTour) => {
            try {

                await new Promise((resolve, reject) => {
                    updateSlots(store.slots.slots, {
                        onSuccess: resolve,
                        onError: reject
                    })
                })

                await queryClient.cancelQueries({ queryKey: ["tour", updatedTour.id] })

                const previous = queryClient.getQueryData<ITour>(["tour", updatedTour.id])
                queryClient.setQueryData(["tour", updatedTour.id], updatedTour)

                return { previous }

            } catch (e) {
                console.error("Ошибка при удалении слотов", e)
                throw e
            }
        },
        onSuccess: async (updatedTour) => {
            await queryClient.invalidateQueries({ queryKey: ["tour", updatedTour.id] })
            navigate(`/${RouteNames.SUCCESS}`)
        },
        onError: () => {
            console.error("Возникла ошибка при обновление тура!")
            navigate(`/${RouteNames.ERROR}`)
        },
    })

}