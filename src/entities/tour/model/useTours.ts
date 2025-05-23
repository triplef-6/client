import {ITour} from "@/shared/types";
import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getTours} from "@/entities/tour/api";
import {searchTourStore as store} from "@/features";
import {SearchParamsType} from "@/entities/tour/types";
import {safeGet} from "@/shared/utils";

export const useTours = () => {

    const params: SearchParamsType = {
        sort: store.searchParams.sort,
        city: safeGet(() => store.searchParams.location.city, ""),
        region: safeGet(() => store.searchParams.location.region, ""),
        from: store.searchParams.date.from instanceof Date ? store.searchParams.date.from.toISOString().split("T")[0] : "",
        to: store.searchParams.date.to instanceof Date ? store.searchParams.date.to.toISOString().split("T")[0] : "",
        accessibility: store.searchParams.accessibility,
        byCity: store.searchParams.byCity
    }

    const query = useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["tours", params],
        queryFn: () => getTours(params),
        placeholderData: [],
        refetchOnWindowFocus: true
    })

    return {
        ...query,
        data: query.data ?? [],
        length: query.data ? query.data.length : 0,
        isEmpty: (query.data ?? []).length === 0,
        refetch: query.refetch
    }

}