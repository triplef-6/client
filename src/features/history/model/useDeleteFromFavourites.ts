import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ITour} from "@/shared/types";
import {deleteFromFavourites} from "@/features/history/api";

export const useDeleteFromFavourites = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<ITour>, number>({
        mutationFn: (tourId) => deleteFromFavourites(tourId),
        onMutate: async (tourId) => {

            await queryClient.cancelQueries({ queryKey: ["favourites"] })

            const previous = queryClient.getQueryData<ITour[]>(["favourites"])

            queryClient.setQueryData<ITour[]>(
                ["favourites"],
                (old = []) => old.filter((tour) => tour.id !== tourId)
            )

            return { previous }

        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["favourites"] })
        },
        onError: (e: ApiException<ITour>) => {
            throw new ApiException<ITour>(e.message, e.statusCode, e.data)
        }
    })

}