import {tourLocalHistoryStore as history} from "@/features";
import {useTags} from "@/entities";

type ReturnType = {
    tags: string[]
    selected: string[]
    disabled: boolean
    add: (value: string) => void
    remove: (value: string) => void
    isPlaceholderTags: boolean
}

export const useReqs = (): ReturnType => {

    const {data: tags = [], isPlaceholderData: isPlaceholderTags} = useTags()

    const add = (value: string) => history.addTag(value)
    const remove = (value: string) => history.removeTag(value)

    return {
        disabled: history.tagsCount === 0,
        selected: history.tags,
        isPlaceholderTags,
        tags,
        add, remove
    }

}