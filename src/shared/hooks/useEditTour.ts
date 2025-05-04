import {ITour, RouteNames} from "@/shared/types";
import {useNavigate} from "react-router-dom";
import {createTourStore as store} from "@/features";

type ReturnType = {
    click: () => void
}

export const useEditTour = (tour: ITour): ReturnType => {

    const navigate = useNavigate()

    const click = () => {
        store.tour = tour
        store.isEdit = true
        navigate(`/${RouteNames.CREATE}`)
    }

    return { click }

}