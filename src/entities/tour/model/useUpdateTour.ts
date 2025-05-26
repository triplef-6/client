import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ITour, RouteNames} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {updateTour} from "@/entities/tour/api";
import {useNavigate} from "react-router-dom";

export const useUpdateTour = () => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation<ITour, ApiException<ITour>, ITour>({
        mutationFn: updateTour,
        onMutate: async (updatedTour) => {

            await queryClient.cancelQueries({ queryKey: ["tour", updatedTour.id] })

            const previous = queryClient.getQueryData<ITour>(["tour", updatedTour.id])
            queryClient.setQueryData(["tour", updatedTour.id], updatedTour)

            return { previous }

        },
        onSuccess: async (updatedTour) => {
            await queryClient.invalidateQueries({ queryKey: ["tour", updatedTour.id] })
            navigate(`/${RouteNames.SUCCESS}`)
        },
        onError: (e: ApiException<ITour>) => console.error("Экскусрию не удалось обновить", e.message),
        retry: 3
    })

}