import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ITour} from "@/shared/types";
import {addManyToFavourites} from "@/features/history/api";

export const useAddManyToFavourites = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<ITour>, number[]>({
        mutationFn: (tourIds) => addManyToFavourites(tourIds),
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