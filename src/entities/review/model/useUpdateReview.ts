import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IReview} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {updateReview} from "@/entities/review/api";

export const useUpdateReview = () => {

    const queryClient = useQueryClient()

    return useMutation<IReview, ApiException<IReview>,IReview>({
        mutationFn: updateReview,
        onMutate: async (newReview) => {

            await queryClient.cancelQueries({queryKey: ["reviews", "user", newReview.id]})

            const previous = queryClient.getQueryData<IReview[]>(["reviews", "user"]);

            queryClient.setQueryData<IReview[]>(
                ["reviews", "user", newReview.id],
                (old = []) => old.map((r) => (r.id === newReview.id ? newReview : r))
            )

            return { previous }

        },
        onSuccess: async (newReview) => {
            await queryClient.invalidateQueries({queryKey: ["reviews", "user", newReview.id]})
            await queryClient.invalidateQueries({queryKey: ["reviews", "tour"]})
        },
        onError: (e: ApiException<IReview>) => console.log("Не удалось обновить отзыв", e.message)
    })

}