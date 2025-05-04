import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ITour} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {addToFavourites} from "@/features/history/api";

export const useAddToFavourites = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<ITour>, number>({
        mutationFn: (tourId) => addToFavourites(tourId),
        onMutate: async () => {
            await queryClient.cancelQueries({ queryKey: ["favourites"] })
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["favourites"] })
        },
        onError: (e: ApiException<ITour>) => {
            throw new ApiException<ITour>(e.message, e.statusCode, e.data)
        }
    })

}