import {RouteNames} from "@/shared/types";
import {useNavigate} from "react-router-dom";
import {createTourStore as store} from "@/features";

type ReturnType = {
    click: () => void
}

export const useCreateTour = (): ReturnType => {

    const navigate = useNavigate()

    const click = () => {
        store.init()
        store.isEdit = false
        navigate(`/${RouteNames.CREATE}`)
    }

    return { click }

}