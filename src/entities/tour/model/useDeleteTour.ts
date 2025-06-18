import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ITour, RouteNames} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {deleteTour} from "@/entities/tour/api";
import {useNavigate} from "react-router-dom";
import {useDeleteSlots} from "@/features";

export const useDeleteTour = () => {

    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const {mutate: deleteSlots} = useDeleteSlots()

    return useMutation<void, ApiException<ITour>, number>({
        mutationFn: deleteTour,
        onMutate: async (id) => {
            try {
                deleteSlots(id)
                await queryClient.cancelQueries({queryKey: ["tours"]})
                await queryClient.cancelQueries({queryKey: ["tour", id]})
            } catch (e) {
                console.error("Ошибка при удалении слотов", e)
                navigate(`/${RouteNames.ERROR}`)
            }
        },
        onSuccess: async (_, id) => {
            await queryClient.invalidateQueries({queryKey: ["tours"]})
            queryClient.removeQueries({queryKey: ["tour", id]})
        },
        onError: (e: ApiException<ITour>) => {
            console.error("Ошибка при удалении тура:", e.message)
            navigate(`/${RouteNames.ERROR}`)
        }
    })

}