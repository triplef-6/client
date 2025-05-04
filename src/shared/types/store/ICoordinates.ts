import {YandexMapCoordinates} from "@/shared/types";

export interface ICoordinates {
    get coordinates(): YandexMapCoordinates
    set coordinates(value: YandexMapCoordinates)
}