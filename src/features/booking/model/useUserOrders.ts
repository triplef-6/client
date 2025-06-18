import {useQuery} from "@tanstack/react-query";
import {IReview} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getUserOrders} from "@/features/booking/api";

export const useUserOrders = (userId: number) => {

    const query = useQuery<IReview, ApiException<IReview>>({
        queryKey: ["user", "orders", userId],
        queryFn: () => getUserOrders(userId),
        enabled: !!userId
    })

    return {
        ...query,
        isEmpty: !query.data
    }

}