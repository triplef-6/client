import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IReview} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {updateReview} from "@/entities/review/api";
import {useMe} from "@/features";

export const useUpdateReview = () => {

    const queryClient = useQueryClient()
    const {me} = useMe()

    return useMutation<IReview, ApiException<IReview>,IReview>({
        mutationFn: updateReview,
        onMutate: async (newReview) => {

            await queryClient.cancelQueries({queryKey: ["reviews", "user", me.id]})

            const previous = queryClient.getQueryData<IReview[]>(["reviews", "user", me.id])

            queryClient.setQueryData<IReview[]>(
                ["reviews", "user", me.id],
                (old = []) => old.map(
                    (r) => (r.id === newReview.id ? newReview : r)
                )
            )

            return { previous }

        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ["reviews", "user", me.id]})
        },
        onError: (e: ApiException<IReview>) => console.log("Не удалось обновить отзыв", e.message),
        retry: 3
    })

}