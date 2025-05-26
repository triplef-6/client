import {createTourStore as store, useMe} from "@/features";
import {useCreateTour, useUpdateTour} from "@/entities";

type ReturnType = {
    submit: () => void
    disabled: boolean
}

export const useSubmitButton = (): ReturnType => {

    const {mutate: create} = useCreateTour()
    const {mutate: update} = useUpdateTour()

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

    return { submit, disabled: store.isDisabled }

}