import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IMe} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {updateMe} from "@/features/auth/api";

export const useUpdateMe = () => {

    const queryClient = useQueryClient()

    return useMutation<IMe, ApiException<IMe>, IMe>({
        mutationFn: updateMe,
        onMutate: async (user) => {

            await queryClient.cancelQueries({ queryKey: ["me"] })

            const previous = queryClient.getQueryData<IMe>(["me"])
            queryClient.setQueryData(["me"], user)

            return { previous }

        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["me"] })
        },
        onError: (e: ApiException<IMe>) => console.error("Данные пользователя не удалось обновить", e.message)
    })

}