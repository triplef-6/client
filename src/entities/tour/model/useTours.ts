import {ITour} from "@/shared/types";
import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getTours} from "@/entities/tour/api";
import {searchTourStore as store} from "@/features";
import {SearchParamsType} from "@/entities/tour/types";

export const useTours = () => {

    const params: SearchParamsType = {
        sort: store.searchParams.sort,
        city: store.searchParams.location.city,
        region: store.searchParams.location.region,
        from: store.searchParams.date.from instanceof Date ? store.searchParams.date.from.toISOString().split("T")[0] : "",
        to: store.searchParams.date.to instanceof Date ? store.searchParams.date.to.toISOString().split("T")[0] : "",
        accessibility: store.searchParams.accessibility,
        byCity: store.searchParams.byCity
    }

    const query = useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["tours", params],
        queryFn: () => getTours(params),
        placeholderData: []
    })

    return {
        ...query,
        data: query.data ?? [],
        length: query.data ? query.data.length : 0
    }

}