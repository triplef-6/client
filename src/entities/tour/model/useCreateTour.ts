import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ITour, IMe} from "@/shared/types";
import {createTour} from "@/entities/tour/api";

type PayloadType = {
    user: IMe
    tour: ITour
}

export const useCreateTour = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<ITour>, PayloadType>({
        mutationFn: ({user, tour}) => createTour(user, tour),
        onMutate: async ({tour: newTour}) => {

            await queryClient.cancelQueries({ queryKey: ['tours'] })

            const previous = queryClient.getQueryData<ITour[]>(["tours"])
            queryClient.setQueryData<ITour[]>(["tours"], (old = []) => [...old, newTour])

            return { previous }

        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ["tours"]})
        },
        onError: (e: ApiException<ITour>) => console.error("Не удалось добавить экскурсию", e.message)
    })

}