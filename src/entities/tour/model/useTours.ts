import {ITour} from "@/shared/types";
import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getTours} from "@/entities/tour/api";
import {searchTourStore as store} from "@/features";

export const useTours = () => {

    const query = useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["tours"],
        queryFn: () => getTours(store.searchParams),
        staleTime: 60_000,
        placeholderData: []
    })

    return {
        ...query,
        data: query.data ?? [],
        length: query.data ? query.data.length : 0
    }

}