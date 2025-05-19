import {RouteNames} from "@/shared/types";
import {searchTourStore as store} from "@/features";
import {useTours} from "@/entities";
import {useNavigate} from "react-router-dom";

type ReturnType = {
    search: () => void
    isToursFetching: boolean
}

export const useSearchButton = (): ReturnType => {

    const navigate = useNavigate()
    const {refetch, isRefetching} = useTours()

    const url: string = `/${RouteNames.TOURS}/${encodeURIComponent("Поиск")}`

    const search = async () => {
        store.isSubmitted = true
        if (store.isDisabled) {
            await refetch()
            navigate(url)
        }
    }

    return { search, isToursFetching: isRefetching}

}