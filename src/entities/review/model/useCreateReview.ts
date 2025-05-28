import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IReview, ITour} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {createReview} from "@/entities/review/api";
import {useMe} from "@/features";

export const useCreateReview = () => {

    const queryClient = useQueryClient()
    const {me} = useMe()

    return useMutation<void, ApiException<IReview>, IReview>({
        mutationFn: (review) => createReview(review),
        onSuccess: async (_, newReview) => {

            await queryClient.invalidateQueries({queryKey: ["tours", "reviews"]})

            queryClient.setQueryData<IReview[]>(
                ["tours", "reviews"],
                (oldTours = []) => oldTours.filter(
                    tour => tour.id !== newReview.tourId
                )
            )

            const previous = queryClient.getQueryData<ITour[]>(["reviews", "user", me.id])

            if (previous) {
                queryClient.setQueryData(["reviews", "user", me.id], [...previous, newReview])
            } else {
                queryClient.setQueryData<IReview[]>(["reviews", "user", me.id], [newReview])
            }

        },
        onError: (e: ApiException<IReview>) => console.log("Не удалось создать отзыв", e.message),
        retry: 3
    })

}