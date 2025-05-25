import {useEffect, useMemo} from "react";
import {ITour} from "@/shared/types";
import {
    tourLocalHistoryStore as history,
    authStore as auth,
    useFavourites, useAddManyToFavourites
} from "@/features";

type ReturnType = {
    data: ITour[]
    isPending: boolean
    isLoading: boolean
}

export const useFavFactory = () : ReturnType => {

    const isAuth = auth.isAuth
    const local = history.favourites
    const localIds: number[] = local.map(tour => tour.id)

    const {safeData: serverData, isLoading} = useFavourites(isAuth)
    const {
        mutate: sync,
        isPending,
        isSuccess
    } = useAddManyToFavourites()

    useEffect(() => {
        if (isAuth && local.length > 0) sync(localIds)
    }, [])

    useEffect(() => {
        if (isSuccess) {
            console.log(history.favourites)
            history.clearFavourites()
        }
    }, [isSuccess])

    const data = useMemo(() => {
        if (isAuth) return serverData
        return local
    }, [serverData, isAuth, local])

    return { data, isLoading, isPending }

}