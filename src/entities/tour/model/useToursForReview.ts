import {ITour} from "@/shared/types";
import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getToursForReview} from "@/entities/tour/api";

export const useToursForReview = (userId: number) => {

    const query = useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["tours", "reviews", userId],
        queryFn: () => getToursForReview(userId),
        placeholderData: []
    })

    return {
        ...query,
        isEmpty: query.data && query.data.length === 0
    }

}