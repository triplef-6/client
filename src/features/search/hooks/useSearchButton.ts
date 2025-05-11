import {RouteNames} from "@/shared/types";
import {searchTourStore, searchTourStore as store} from "@/features";
import {useTours} from "@/entities";

type ReturnType = {
    search: () => void
    isDisabled: boolean
}

export const useSearchButton = (): ReturnType => {

    //const navigate = useNavigate()
    const {data, length} = useTours()

    const location = length > 0 && data[0].location.city !== searchTourStore.searchParams.location.city ? data[0].location.city : "Экскурсии"
    const url: string = `/${RouteNames.TOURS}/${encodeURIComponent(location)}`

    const search = () => {
        store.isSubmitted = true
        if (store.isDisabled) {
            window.open(url, "_blank")
        }
    }

    return { search, isDisabled: store.isDisabled }

}