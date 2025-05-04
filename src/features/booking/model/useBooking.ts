import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {IOrder} from "@/shared/types";
import {createOrder} from "@/features/booking/api";

export const useBooking = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<IOrder>, IOrder>({
        mutationFn: createOrder,
        onMutate: async () => await queryClient.cancelQueries({ queryKey: ["me"] }),
        onSuccess: async () => await queryClient.invalidateQueries({queryKey: ["me"]}),
        onError: (e: ApiException<IOrder>) => console.error("Не удалось забронировать экскурсию", e.message)
    })

}