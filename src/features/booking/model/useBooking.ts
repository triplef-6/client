import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {IOrder, RouteNames} from "@/shared/types";
import {createOrder} from "@/features/booking/api";
import {useNavigate} from "react-router-dom";

export const useBooking = () => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation<void, ApiException<IOrder>, IOrder>({
        mutationFn: createOrder,
        onMutate: async () => await queryClient.cancelQueries({ queryKey: ["me"] }),
        onSuccess: async (_, order) => {
            navigate(`/${RouteNames.SUCCESS}`)
            await queryClient.invalidateQueries({queryKey: ["me"]})
            await queryClient.invalidateQueries({queryKey: ["tour", order.tourId]})
        },
        onError: (e: ApiException<IOrder>) => console.error("Не удалось забронировать экскурсию", e.message)
    })

}