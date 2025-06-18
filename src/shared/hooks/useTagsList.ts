import {ITags, RouteNames} from "@/shared/types";
import {useTags} from "@/entities";
import {useNavigate} from "react-router-dom";

type ReturnType = {
    visible: string[]
    value: string[]
    isError: boolean
    isLoading: boolean
    isPlaceholderData: boolean
    add: (value: string) =>  void
    remove: (value: string) => void
}

export const useTagsList = (store: ITags): ReturnType => {

    const navigate = useNavigate()
    const {
        data = [],
        isLoading,
        isPlaceholderData,
        isError
    } = useTags()

    if (isError) navigate(`/${RouteNames.ERROR}`)

    return {
        visible: data,
        value: store.tags,
        isError: !store.tags.length,
        isLoading, isPlaceholderData,
        add: (value) => store.add(value),
        remove: (value) => store.remove(value)
    }

}