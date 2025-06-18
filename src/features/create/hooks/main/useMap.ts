import {ICoordinates, YandexMapCoordinates} from "@/shared/types";

type ReturnType = {
    value: YandexMapCoordinates
    isCorrected: boolean
    update: (newCoordinates: YandexMapCoordinates) => void
}

export const useMap = (store: ICoordinates): ReturnType => {

    const update = (newCoordinates: YandexMapCoordinates) => store.coordinates = newCoordinates

    return {
        value: store.coordinates,
        isCorrected: store.coordinates.point.latitude === 0,
        update
    }

}