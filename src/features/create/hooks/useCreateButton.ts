import {createTourStore as store, useMe} from "@/features";
import {useCreateTour, useUpdateTour} from "@/entities";

type ReturnType = {
    submit: () => void
    disabled: boolean
}

export const useCreateButton = (): ReturnType => {

    const {mutate: createTour} = useCreateTour()
    const {mutate: updateTour} = useUpdateTour()

    const {myId} = useMe()
    if (!myId) throw new Error("Неавторизованный пользователь не может создать экскурсию!")

    const submit = () => {

        store.isSubmitted = true

        console.log(store.isDisabled)

        if (!store.isDisabled) {

            store.params.contributorId = myId

            console.log(store.tour)

            if (store.isEdit) updateTour(store.tour)
            else createTour(store.tour)

        }

    }

    return { submit, disabled: store.isDisabled }

}