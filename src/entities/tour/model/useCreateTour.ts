import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ITour, RouteNames} from "@/shared/types";
import {createTour} from "@/entities/tour/api";
import {useNavigate} from "react-router-dom";

export const useCreateTour = () => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation<void, ApiException<ITour>, ITour>({
        mutationFn: (tour) => createTour(tour),
        onMutate: async (newTour) => {

            await queryClient.cancelQueries({ queryKey: ["tours"] })

            const previous = queryClient.getQueryData<ITour[]>(["tours"])
            queryClient.setQueryData<ITour[]>(["tours"], (old = []) => [...old, newTour])

            return { previous }

        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ["tours"]})
            navigate(`/${RouteNames.SUCCESS}`)
        },
        onError: (e: ApiException<ITour>) => console.error("Не удалось добавить экскурсию", e.message)
    })

}