import {IMe} from "@/shared/types";

export const serializeUserToFormData = (me: IMe): FormData => {

    const formData = new FormData()

    formData.append("id", me.id.toString())
    formData.append("name", me.name)
    formData.append("surname", me.surname)
    formData.append("email", me.email)
    formData.append("role", me.role)
    formData.append("info", me.info ?? "")
    formData.append("avatar", me.avatar)
    formData.append("avatarFile", me.avatarFile ?? "")
    formData.append("rating", me.rating ? me.rating.toString() : "0")
    formData.append("ratingCount", me.ratingCount ? me.ratingCount.toString() : "0")

    // contacts
    formData.append("contacts.vk", me.contacts ? (me.contacts.vk ?? "") : "")
    formData.append("contacts.telegram", me.contacts ? (me.contacts.telegram ?? "") : "")
    formData.append("contacts.phone", me.contacts ? me.contacts.phone : "")

    // tags
    formData.append("tags", me.tags.join(","))

    return formData

}