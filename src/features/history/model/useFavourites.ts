import {useQuery} from "@tanstack/react-query";
import {ITour} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getFavourites} from "@/features/history/api";

export const useFavourites = (enabled = true) => {

    const query = useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["favourites"],
        queryFn: () => getFavourites(),
        staleTime: 60_000,
        placeholderData: [],
        enabled
    })

    return {
        ...query,
        safeData: query.data ? query.data : []
    }

}