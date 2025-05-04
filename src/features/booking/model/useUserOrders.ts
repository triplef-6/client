import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getUserOrders} from "@/features/booking/api";
import {IOrder} from "@/shared/types";

export const useUserOrders = (userId: number) => {
    return useQuery<IOrder[], ApiException<IOrder>>({
        queryKey: ["order", userId],
        queryFn: () => getUserOrders(userId),
        staleTime: 60_000,
        placeholderData: []
    })
}