import {useNavigate} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {searchTourStore as store} from "@/features";
import {action} from "mobx";
import {useTours} from "@/entities";

type ReturnType = {
    search: () => void
}

export const useSearchButton = (): ReturnType => {

    const navigate = useNavigate()
    const {clearCache} = useTours()

    const search = action(async () => {
        store.isSubmitted = true
        if (store.isDisabled) {
            await clearCache()
            navigate(`/${RouteNames.TOURS}/${encodeURIComponent(store.searchParams.location.city)}`)
        }
    })

    return { search }

}