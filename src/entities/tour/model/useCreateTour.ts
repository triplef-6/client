import {useMutation} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ITour, RouteNames} from "@/shared/types";
import {createTour} from "@/entities/tour/api";
import {useNavigate} from "react-router-dom";
import {createTourStore as store, useCreateSlots} from "@/features";

export const useCreateTour = () => {

    const navigate = useNavigate()
    const {mutate: createSlots} = useCreateSlots()

    return useMutation<void, ApiException<ITour>, ITour>({
        mutationFn: (tour) => createTour(tour),
        onSuccess: () => {
            try {
                createSlots(store.slots.slots)
                store.init()
                navigate(`/${RouteNames.SUCCESS}`)
            } catch (e) {
                console.error("Ошибка при добавлении слотов", e)
                store.init()
                navigate(`/${RouteNames.ERROR}`)
            }
        },
        onError: () => {
            store.init()
            console.error("Возникла ошибка при создание тура!")
            navigate(`/${RouteNames.ERROR}`)
        },
        retry: 3
    })

}