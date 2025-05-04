import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {addTags} from "@/entities/tags/api";

// noinspection Annotator
export const useAddTags = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<string[]>, string[]>({
        mutationFn: (tags) => addTags(tags),
        onMutate: async () => {
            await queryClient.cancelQueries({ queryKey: ["user"] })
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["user"] })
        },
        onError: (e: ApiException<string[]>) => console.error("Теги пользователя не удалось обновить", e.message)
    })
}