import bg from "@/shared/mocks/assets/cardBg.png";
import bg2 from "@/shared/mocks/assets/cardBg2.png";
import bg3 from "@/shared/mocks/assets/cardBg3.png";
import bg4 from "@/shared/mocks/assets/cardBg4.png";
import {ILocation} from "@/shared/types";

export const LocationsMock: ILocation[] = [
    {
        id: 0,
        country: "Россия",
        city: "Омск",
        region: "Омская область",
        tourCount: 100,
        image: bg,
    },
    {
        id: 1,
        country: "Россия",
        city: "Санкт-Петербург",
        region: "Ленинградская область",
        tourCount: 200,
        image: bg2,
    },
    {
        id: 2,
        country: "Россия",
        city: "Новосибирск",
        region: "Новосибирская область",
        tourCount: 300,
        image: bg3,
    },
    {
        id: 3,
        country: "Россия",
        city: "Москва",
        region: "Московская область",
        tourCount: 400,
        image: bg4,
    },
    {
        id: 4,
        country: "Россия",
        city: "Абакан",
        region: "Республика Хакасия",
        tourCount: 400,
        image: bg4,
    },
    {
        id: 5,
        country: "Россия",
        city: "Ачинск",
        region: "Красноярский край",
        tourCount: 400,
        image: bg4,
    },
    {
        id: 6,
        country: "Россия",
        city: "Астрахань",
        region: "Астраханская область",
        tourCount: 400,
        image: bg4,
    },
    {
        id: 7,
        country: "Россия",
        city: "Алупка",
        region: "Крым",
        tourCount: 400,
        image: bg4,
    },
]