import {tourLocalHistoryStore as store, useAddManyToFavourites, useAuthContext} from "@/features";
import {useEffect} from "react";

export const useAddManyFavFactory = (): void => {

    const {isAuth} = useAuthContext()
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
    }, [isAuth])

}