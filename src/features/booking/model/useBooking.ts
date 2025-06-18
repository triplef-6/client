import {useMutation} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {IOrder, RouteNames} from "@/shared/types";
import {createOrder} from "@/features/booking/api";
import {useNavigate} from "react-router-dom";

export const useBooking = () => {

    const navigate = useNavigate()

    return useMutation<void, ApiException<IOrder>, IOrder>({
        mutationFn: createOrder,
        onSuccess: async () => navigate(`/${RouteNames.SUCCESS}`),
        onError: (e: ApiException<IOrder>) => {
            console.error("Не удалось забронировать экскурсию", e.message)
            navigate(`/${RouteNames.ERROR}`)
        }
    })

}