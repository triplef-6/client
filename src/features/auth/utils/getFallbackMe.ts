import {IMe, UserRole} from "@/shared/types";
import avatar from "@/shared/assets/icons/avatar.svg";

export const getFallbackMe = (): IMe => ({
    id: 0,
    role: UserRole.guest,
    avatar: avatar,
    avatarFile: null,
    name: "Имя",
    surname: "Фамилия",
    email: "",
    tags: ["Гастрономический"],
    contacts: {
        phone: "8005553535",
        telegram: "tg",
        vk: "vk"
    }
})