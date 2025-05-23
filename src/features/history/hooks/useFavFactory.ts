import {useMemo} from "react";
import {ITour} from "@/shared/types";
import {tourLocalHistoryStore as history, authStore as auth, useFavourites} from "@/features";

export const useFavFactory = () : ITour[] => {

    const isAuth = auth.isAuth

    const {safeData} = useFavourites(isAuth)
    const local = history.favourites

    return useMemo(() => isAuth ? safeData : local, [safeData, isAuth, local])

}