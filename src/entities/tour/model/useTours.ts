import {ITour} from "@/shared/types";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getTours} from "@/entities/tour/api";
import {searchTourStore as store} from "@/features";

export const useTours = () => {

    const queryClient = useQueryClient()

    const query = useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["tours", store.searchParams],
        queryFn: () => getTours(store.searchParams),
        staleTime: 60_000,
        placeholderData: []
    })

    const clearCache = async () => {
        await queryClient.invalidateQueries({queryKey: ["tours", store.searchParams]})
    }

    return {
        ...query,
        data: query.data ?? [],
        length: query.data ? query.data.length : 0,
        clearCache
    }

}