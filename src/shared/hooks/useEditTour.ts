import {ITour, RouteNames} from "@/shared/types";
import {useNavigate} from "react-router-dom";
import {createTourStore as store} from "@/features";
import {useSlots} from "@/features/booking/model/useSlots.ts";

type ReturnType = {
    click: () => void
}

export const useEditTour = (tour: ITour): ReturnType => {

    const navigate = useNavigate()
    const {slots} = useSlots(tour.id)

    const click = () => {
        store.tour = tour
        store.slot = slots
        store.isEdit = true
        navigate(`/${RouteNames.CREATE}`)
    }

    return { click }

}