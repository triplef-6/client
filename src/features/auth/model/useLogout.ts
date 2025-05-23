import {useMutation, useQueryClient} from "@tanstack/react-query";
import {logout} from "@/features/auth/api";

export const useLogout = () => {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: logout,
        onSuccess: () => queryClient.removeQueries(),
        onError: (e) => console.error("Ошибка при выходе", e)
    })

}