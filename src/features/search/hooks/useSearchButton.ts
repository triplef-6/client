import {useNavigate} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {searchTourStore as store} from "@/features";
import {action} from "mobx";

type ReturnType = {
    search: () => void
}

export const useSearchButton = (): ReturnType => {

    const navigate = useNavigate()

    const search = action(() => {
        store.isSubmitted = true
        if (store.isDisabled) navigate(`/${RouteNames.TOURS}/${encodeURIComponent(store.searchParams.location.city)}`)
    })

    return { search }

}