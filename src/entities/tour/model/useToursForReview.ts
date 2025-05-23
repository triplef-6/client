import {ITour} from "@/shared/types";
import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getToursForReview} from "@/entities/tour/api";

export const useToursForReview = () => {

    const query = useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["tours", "reviews"],
        queryFn: () => getToursForReview(),
        placeholderData: [],
        staleTime: 60_000
    })

    return {
        ...query,
        isEmpty: (query.data ?? []).length === 0,
        safeData: query.data ?? [],
        length: query.data ? query.data.length : 0
    }

}