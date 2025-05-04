import {ITour} from "@/shared/types";
import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getToursByContributor} from "@/entities/tour/api";

export const useContributorTours = (contributorId: number) => {

    const query = useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["tours", contributorId],
        queryFn: () => getToursByContributor(contributorId),
        staleTime: 60_000,
        initialData: []
    })

    return {
        ...query,
        isEmpty: query.data.length === 0
    }

}