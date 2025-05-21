import {ITour} from "@/shared/types";
import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getToursByContributor} from "@/entities/tour/api";

export const useContributorTours = (contributorId: number) => {

    const query = useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["tours", contributorId],
        queryFn: () => getToursByContributor(contributorId),
        placeholderData: []
    })

    return {
        ...query,
        isEmpty: (query.data ?? []).length === 0,
        safeData: query.data ?? []
    }

}