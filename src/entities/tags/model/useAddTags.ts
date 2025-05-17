import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {addTags} from "@/entities/tags/api";
import {IMe} from "@/shared/types";

export const useAddTags = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<string[]>, string[]>({
        mutationFn: (tags) => addTags(tags),
        onMutate: async (tags) => {

            await queryClient.cancelQueries({ queryKey: ["me"] })

            const user = queryClient.getQueryData<IMe>(["me"])
            if (!user) return

            queryClient.setQueryData(["me"], {
                ...user,
                tags: Array.from(new Set([...user.tags, ...tags]))
            })

        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["user"] })
        },
        onError: (e: ApiException<string[]>) => console.error("Теги пользователя не удалось обновить", e.message)
    })

}