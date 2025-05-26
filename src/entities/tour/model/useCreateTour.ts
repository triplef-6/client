import {useMutation} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ITour, RouteNames} from "@/shared/types";
import {createTour} from "@/entities/tour/api";
import {useNavigate} from "react-router-dom";

export const useCreateTour = () => {

    const navigate = useNavigate()

    return useMutation<void, ApiException<ITour>, ITour>({
        mutationFn: (tour) => createTour(tour),
        onSuccess: async () => navigate(`/${RouteNames.SUCCESS}`),
        onError: (e: ApiException<ITour>) => console.error("Не удалось добавить экскурсию", e.message)
    })

}