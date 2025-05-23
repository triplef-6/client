import {tourLocalHistoryStore as store, useAddManyToFavourites, authStore as auth} from "@/features";
import {useEffect} from "react";

export const useAddManyFavFactory = (): void => {

    const isAuth = auth.isAuth
    const {mutate} = useAddManyToFavourites()

    const favourites: number[] = store.favourites.map(tour => tour.id)

    useEffect(() => {
        if (isAuth && favourites.length > 0) {
            mutate(favourites, {
                onSuccess: () => {
                    store.clearFavourites()
                }
            })
        }
    }, [favourites, isAuth, mutate])

}