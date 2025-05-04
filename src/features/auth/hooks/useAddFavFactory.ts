import {ITour} from "@/shared/types";
import {useCallback, useEffect, useState} from "react";
import {
    tourLocalHistoryStore as store,
    useAddToFavourites,
    useAuthContext,
    useDeleteFromFavourites,
    useFavourites
} from "@/features";

type ResultType = {
    isActive: boolean
    clickHandler: () => void
}

export const useAddFavFactory = (tour: ITour): ResultType => {

    const {isAuth } = useAuthContext()

    const local = store.favourites

    const { data } = useFavourites()
    const { mutate: addFav } = useAddToFavourites()
    const { mutate: deleteFav } = useDeleteFromFavourites()

    const [isActive, setIsActive] = useState<boolean>(false)

    // Определяем начальное состояние кнопки
    useEffect(() => {
        if (!isAuth) setIsActive(local.some(fav => fav.id === tour.id))
        else setIsActive(data.some(fav => fav.id === tour.id))
    }, [local, data, isAuth, tour.id])

    const clickHandler = useCallback(() => {
        if (!isActive) {
            if (!isAuth) store.addToFav(tour)
            else addFav(tour.id)
        } else {
            if (!isAuth) store.deleteFromFav(tour)
            else deleteFav(tour.id)
        }
        setIsActive(!isActive)
    }, [addFav, deleteFav, isActive, isAuth, tour])

    return {isActive, clickHandler}

}