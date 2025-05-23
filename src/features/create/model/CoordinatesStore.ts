import {ICoordinates, IIsDisabled, YandexMapCoordinates} from "@/shared/types";
import {makeAutoObservable} from "mobx";

export class CoordinatesStore implements ICoordinates, IIsDisabled {

    private _coordinates: YandexMapCoordinates

    constructor(initial?: Partial<YandexMapCoordinates>) {

        this._coordinates = {
            point: {
                latitude: 0,
                longitude: 0
            },
            zoom: 0.5,
            ...initial
        }

        makeAutoObservable(this)

    }

    get isDisabled(): boolean {
        return this._coordinates.point.longitude > 0 && this._coordinates.point.latitude > 0
    }

    get coordinates(): YandexMapCoordinates {
        return this._coordinates;
    }

    set coordinates(value: YandexMapCoordinates) {
        this._coordinates = value;
    }

}