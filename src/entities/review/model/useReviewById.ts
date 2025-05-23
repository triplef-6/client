import {useQuery} from "@tanstack/react-query";
import {IReview} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getReviewById} from "@/entities/review/api";

export const useReviewById = (id: number) => {

    const query = useQuery<IReview, ApiException<IReview>>({
        queryKey: ["review"],
        queryFn: () => getReviewById(id),
        enabled: !!id
    })

    return {
        ...query,
        isEmpty: !query.data
    }

}