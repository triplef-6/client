import {useQuery} from "@tanstack/react-query";
import {IReview} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getReviewsByUserId} from "@/entities/review/api";

export const useReviewsByUserId = (userId: number) => {

    const query = useQuery<IReview[], ApiException<IReview>>({
        queryKey: ["reviews", "user", userId],
        queryFn: () => getReviewsByUserId(userId),
        placeholderData: [],
        enabled: !!userId
    })

    return {
        ...query,
        isEmpty: (query.data ?? []).length === 0,
        safeData: query.data ?? [],
        length: query.data ? query.data.length : 0
    }

}