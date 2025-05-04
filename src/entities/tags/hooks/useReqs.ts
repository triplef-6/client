import {useNavigate} from "react-router-dom";

import {RouteNames} from "@/shared/types";
import {tourLocalHistoryStore as store} from "@/features";
import {useTags} from "@/entities";

type ReturnType = {
    tags: string[]
    selected: string[]
    disabled: boolean
    click: () => void
    add: (value: string) => void
    remove: (value: string) => void
}

export const useReqs = (): ReturnType => {

    const navigate = useNavigate()

    const {data: tags = []} = useTags()


    const add = (value: string) => store.addTag(value)
    const remove = (value: string) => store.removeTag(value)
    const click = () => navigate(`/${RouteNames.MAIN}`)

    return {
        disabled: store.tagsCount === 0,
        selected: store.tags,
        tags,
        add, remove, click
    }

}