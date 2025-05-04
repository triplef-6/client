import {useQuery} from "@tanstack/react-query";
import {IReview} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getReviewsByUserId} from "@/entities/review/api";

export const useReviewsByUserId = (userId: number) => {

    const query = useQuery<IReview[], ApiException<IReview>>({
        queryKey: ["reviews", "user", userId],
        queryFn: () => getReviewsByUserId(userId),
        staleTime: 60_000,
        initialData: [],
        enabled: !!userId
    })

    return {
        ...query,
        isEmpty: query.data.length === 0
    }

}