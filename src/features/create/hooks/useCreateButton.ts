import {useNavigate} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {createTourStore as store, useMe} from "@/features";
import {useCreateTour, useUpdateTour} from "@/entities";

type ReturnType = {
    create: () => void
}

export const useCreateButton = (): ReturnType => {

    const navigate = useNavigate()

    const {mutate: createTour} = useCreateTour()
    const {mutate: updateTour} = useUpdateTour()

    const {userId} = useMe()
    if (!userId) throw new Error("Неавторизованный пользователь не может создать экскурсию!")

    const create = () => {

        store.isSubmitted = true

        if (store.isDisabled) {

            store.params.contributorId = userId

            console.log(store.tour)

            if (store.isEdit) updateTour(store.tour)
            else createTour(store.tour)

            navigate(`/${RouteNames.SUCCESS}`)

        }

    }

    return { create }

}