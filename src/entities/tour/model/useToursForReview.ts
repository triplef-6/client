import {ITour} from "@/shared/types";
import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getToursForReview} from "@/entities/tour/api";
import {authStore as auth} from "@/features";

export const useToursForReview = () => {

    const query = useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["tours", "reviews"],
        queryFn: () => getToursForReview(),
        placeholderData: [],
        enabled: auth.isAuth,
        retry: 3
    })

    return {
        ...query,
        isEmpty: (query.data ?? []).length === 0,
        safeData: query.data ?? [],
        length: query.data ? query.data.length : 0
    }

}