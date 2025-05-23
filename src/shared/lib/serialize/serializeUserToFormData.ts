import {IMe} from "@/shared/types";

export const serializeUserToFormData = (me: IMe): FormData => {

    const formData = new FormData()

    const userData = {
        id: me.id,
        name: me.name,
        surname: me.surname,
        email: me.email,
        role: me.role,
        info: me.info ?? "",
        avatar: me.avatar ?? "",
        rating: me.rating ?? 0,
        ratingCount: me.ratingCount ?? 0,
        contacts: {
            vk: me.contacts?.vk ?? "",
            telegram: me.contacts?.telegram ?? "",
            phone: me.contacts?.phone ?? ""
        },
        tags: me.tags ?? []
    }

    formData.append(
        "me",
        new Blob([JSON.stringify(userData)], { type: "application/json" })
    )

    if (me.avatarFile) formData.append("avatarFile", me.avatarFile)

    return formData

}