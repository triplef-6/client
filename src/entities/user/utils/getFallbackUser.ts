import {IUser} from "@/shared/types";
import avatar from "@/shared/assets/icons/contributor.svg";

export const getFallbackUser = (): IUser => ({
    id: 0,
    avatar: avatar,
    name: "Имя",
    surname: "Фамилия",
    rating: 0,
    ratingCount: 0,
    info: "",
    contacts: {
        phone: "8005553535",
        telegram: "tg",
        vk: "vk"
    }
})