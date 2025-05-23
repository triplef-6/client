import {ITags} from "@/shared/types";
import {useTags} from "@/entities";

type ReturnType = {
    visible: string[]
    value: string[]
    add: (value: string) =>  void
    remove: (value: string) => void
    isError: boolean
}

export const useTagsList = (store: ITags): ReturnType => {

    const {data = []} = useTags()

    return {
        visible: data,
        value: store.tags,
        isError: !store.tags.length,
        add: (value) => store.add(value),
        remove: (value) => store.remove(value)
    }

}