import {IUser} from "@/shared/types";

import avatar from "@/shared/assets/icons/contributor.svg"

export const UserMock: IUser = {
    id: 0,
    name: "Ирина",
    avatar: avatar,
    surname: "дмитриева",
    info: [
        "Мы живем в Омске: любим этот город,",
        "много знаем о нём и готовы поделиться с вами знаниями.",
        "С удовольствием поможем убедиться в том, что здесь каждому найдётся",
        "что посмотреть и куда сходить."
    ].join(" "),
    contacts: {
        vk: "@excopenVK",
        telegram: "@excopenTg",
        phone: "88005553535"
    },
    rating: 4.5,
    ratingCount: 8
}