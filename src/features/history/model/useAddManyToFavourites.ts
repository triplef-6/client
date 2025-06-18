import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ITour} from "@/shared/types";
import {addManyToFavourites} from "@/features/history/api";
import {tourLocalHistoryStore as history} from "@/features";

export const useAddManyToFavourites = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<ITour>, number[]>({
        mutationFn: (tourIds) => addManyToFavourites(tourIds),
        onSuccess: async () => {
            history.clearFavourites()
            await queryClient.invalidateQueries({ queryKey: ["favourites"] })
        },
        onError: (e: ApiException<ITour>) => console.error("Ошибка синхронизации ", e.message)
    })

}