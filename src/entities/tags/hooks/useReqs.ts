import {useNavigate} from "react-router-dom";

import {RouteNames} from "@/shared/types";
import {tourLocalHistoryStore as history} from "@/features";
import {useAddTags, useTags} from "@/entities";

type ReturnType = {
    tags: string[]
    selected: string[]
    disabled: boolean
    click: () => void
    add: (value: string) => void
    remove: (value: string) => void
    isPlaceholderTags: boolean
}

export const useReqs = (): ReturnType => {

    const navigate = useNavigate()

    const {data: tags = [], isPlaceholderData: isPlaceholderTags} = useTags()
    const {mutate: addTags} = useAddTags()

    const add = (value: string) => history.addTag(value)
    const remove = (value: string) => history.removeTag(value)

    const click = () => {

        if (history.tagsCount !== 0) {
            addTags(history.tags)
            history.clearTags()
        }

        navigate(`/${RouteNames.MAIN}`)
    }

    return {
        disabled: history.tagsCount === 0,
        selected: history.tags,
        isPlaceholderTags,
        tags,
        add, remove, click
    }

}