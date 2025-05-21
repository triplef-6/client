import {useMemo} from "react";
import {ITour} from "@/shared/types";
import {tourLocalHistoryStore as store, useAuthContext, useFavourites} from "@/features";

export const useFavFactory = () : ITour[] => {

    const {isAuth} = useAuthContext()

    const {safeData} = useFavourites(isAuth)
    const local = store.favourites

    return useMemo(() => isAuth ? safeData : local, [safeData, isAuth, local])

}