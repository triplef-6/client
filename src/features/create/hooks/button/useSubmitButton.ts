import {createTourStore as store, useMe} from "@/features";
import {useCreateTour, useUpdateTour} from "@/entities";

type ReturnType = {
    submit: () => void
    isCreatePending: boolean
    isUpdatePending: boolean
}

export const useSubmitButton = (): ReturnType => {

    const {
        mutate: create,
        isPending: isCreatePending
    } = useCreateTour()

    const {
        mutate: update,
        isPending: isUpdatePending
    } = useUpdateTour()

    const {myId} = useMe()
    if (!myId) throw new Error("Неавторизованный пользователь не может создать экскурсию!")

    const submit = () => {

        store.isSubmitted = true

        if (!store.isDisabled) {
            if (!store.isEdit) {
                store.params.contributorId = myId
                create(store.tour)
            } else update(store.tour)
        }

    }

    return { submit, isCreatePending, isUpdatePending }

}