import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IReview} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {createReview} from "@/entities/review/api";

export const useCreateReview = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<IReview>, IReview>({
        mutationFn: (review) => createReview(review),
        onMutate: async (newReview) => {

            const previous = queryClient.getQueryData<IReview[]>(["reviews", "user", newReview.id])

            queryClient.setQueryData<IReview[]>(
                ["reviews", "user", newReview.id],
                (oldReviews = []) => [...oldReviews, newReview]
            )

            return { previous }

        },
        onSuccess: async (_, newReview) => {
            await queryClient.invalidateQueries({queryKey: ["reviews", "user", newReview.id]})
            await queryClient.invalidateQueries({queryKey: ["reviews", "tour"]})
        },
        onError: (e: ApiException<IReview>) => console.log("Не удалось создать отзыв", e.message)
    })

}