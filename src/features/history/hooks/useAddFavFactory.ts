import {ITour} from "@/shared/types";
import {useCallback, useEffect, useState} from "react";
import {
    authStore as auth,
    tourLocalHistoryStore as history,
    useAddToFavourites,
    useDeleteFromFavourites,
    useFavourites
} from "@/features";

type ResultType = {
    isActive: boolean
    clickHandler: () => void
}

export const useAddFavFactory = (tour: ITour): ResultType => {

    const isAuth = auth.isAuth

    const local = history.favourites
    const { safeData } = useFavourites(isAuth)

    const { mutate: addFav } = useAddToFavourites()
    const { mutate: deleteFav } = useDeleteFromFavourites()

    const [isActive, setIsActive] = useState<boolean>(false)

    // Определяем начальное состояние кнопки
    useEffect(() => {
        if (!isAuth) setIsActive(local.some(fav => fav.id === tour.id))
        else setIsActive(safeData.some(fav => fav.id === tour.id))
    }, [local, safeData, isAuth, tour.id])

    const clickHandler = useCallback(() => {
        if (!isActive) {
            if (!isAuth) history.addToFav(tour)
            else addFav(tour.id)
        } else {
            if (!isAuth) history.deleteFromFav(tour)
            else deleteFav(tour.id)
        }
        setIsActive(!isActive)
    }, [addFav, deleteFav, isActive, isAuth, tour])

    return {isActive, clickHandler}

}