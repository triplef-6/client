import {IMe} from "@/shared/types";

export const areEqualMe = (me: IMe, updatedMe: IMe): boolean => {
    return me.name === updatedMe.name
        && me.surname === updatedMe.surname
        && me.contacts?.phone === updatedMe.contacts?.phone
        && me.contacts?.vk === updatedMe.contacts?.vk
        && me.contacts?.telegram === updatedMe.contacts?.telegram
        && (me.info ?? "") === (updatedMe.info ?? "")
        && me.avatar === updatedMe.avatar
        && me.tags.length === updatedMe.tags.length
}