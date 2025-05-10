import {useNavigate} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {createTourStore as store, useAuthContext} from "@/features";
import {useCreateTour, useUpdateTour} from "@/entities";

type ReturnType = {
    create: () => void
}

export const useCreateButton = (): ReturnType => {

    const navigate = useNavigate()

    const {user} = useAuthContext()
    const {mutate: createTour} = useCreateTour()
    const {mutate: updateTour} = useUpdateTour()

    const create = () => {

        store.isSubmitted = true

        if (store.isDisabled) {

            store.params.contributorId = user.id

            console.log(store.tour)

            if (store.isEdit) updateTour(store.tour)
            else createTour(store.tour)

            navigate(`/${RouteNames.SUCCESS}`)

        }

    }

    return { create }

}