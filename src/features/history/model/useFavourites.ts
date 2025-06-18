import { useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { ITour } from "@/shared/types";
import { ApiException } from "@/shared/lib";
import { getFavourites } from "@/features/history/api";
import { authStore as auth, tourLocalHistoryStore as history, useAddManyToFavourites } from "@/features";

export const useFavourites = () => {

    const isAuth = auth.isAuth
    const local = history.favourites
    const localIds = useMemo(() => local.map(t => t.id), [local])

    const query = useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["favourites"],
        queryFn: getFavourites,
        placeholderData: [],
        enabled: isAuth
    })

    const {
        mutate: sync,
        isPending: isPendingSync ,
        isSuccess: isSuccessSync
    } = useAddManyToFavourites()

    useEffect(() => {
        if (isAuth && localIds.length > 0) sync(localIds)
    }, [isAuth, localIds, sync]);

    return {
        ...query,
        favourites: query.data && isAuth ? query.data : local,
        isEmpty: query.data && isAuth ? query.data.length === 0 : local.length === 0,
        isPendingSync,
        isSuccessSync
    }

}