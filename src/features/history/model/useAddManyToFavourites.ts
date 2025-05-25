import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ITour} from "@/shared/types";
import {addManyToFavourites} from "@/features/history/api";
import {tourLocalHistoryStore as store} from "@/features";

export const useAddManyToFavourites = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<ITour>, number[]>({
        mutationFn: (tourIds) => addManyToFavourites(tourIds),
        onSuccess: async () => {
            store.clearFavourites()
            await queryClient.invalidateQueries({ queryKey: ["favourites"] })
        },
        onError: (e: ApiException<ITour>) => console.error("Ошибка синхронизации ", e.message),
        retry: 5
    })

}