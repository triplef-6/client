import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IReview} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {createReview} from "@/entities/review/api";

export const useCreateReview = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<IReview>, IReview>({
        mutationFn: (review) => createReview(review),
        onMutate: async (newReview) => {

            const previous = queryClient.getQueryData<IReview[]>(["tours", "reviews"])

            queryClient.setQueryData<IReview[]>(
                ["tours", "reviews"],
                (oldReviews = []) => oldReviews.filter(
                    tour => tour.id !== newReview.tourId
                )
            )

            return { previous }

        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ["tours", "reviews"]})
        },
        onError: (e: ApiException<IReview>) => console.log("Не удалось создать отзыв", e.message)
    })

}