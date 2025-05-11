import {useQuery} from "@tanstack/react-query";
import {IReview} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getReviewsByTourId} from "@/entities/review/api";

export const useReviewsByTourId = (tourId: number) => {

    const query = useQuery<IReview[], ApiException<IReview>>({
        queryKey: ["reviews", "tour"],
        queryFn: () => getReviewsByTourId(tourId),
        staleTime: 60_000,
        placeholderData: [],
        enabled: !!tourId
    })

    return {
        ...query,
        length: query.data ? query.data.length : 0
    }

}