import {useMemo} from "react";
import {ITour} from "@/shared/types";
import {tourLocalHistoryStore as store, useAuthContext, useFavourites} from "@/features";

export const useFavFactory = () : ITour[] => {

    const {isAuth} = useAuthContext()

    const {data} = useFavourites()
    const local = store.favourites

    return useMemo(() => isAuth ? data : local, [data, isAuth, local])

}