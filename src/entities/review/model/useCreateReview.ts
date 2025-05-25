import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IReview} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {createReview} from "@/entities/review/api";

export const useCreateReview = () => {

    const queryClient = useQueryClient()

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

        },
        onError: (e: ApiException<IReview>) => console.log("Не удалось создать отзыв", e.message)
    })

}