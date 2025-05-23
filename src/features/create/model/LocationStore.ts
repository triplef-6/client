import {makeAutoObservable} from "mobx";
import {IByCity, IIsDisabled, ILocation, ILocationTour, IRouteLength} from "@/shared/types";

export class LocationStore implements ILocationTour, IRouteLength, IByCity, IIsDisabled {

    private _location: ILocation
    private _routeLength: number
    private _byCity: boolean

    constructor(
        location: ILocation = {
            id: 0,
            city: "",
            country: "",
            tourCount: 0,
            region: "",
            image: ""
        },
        routeLength: number = 0,
        byCity: boolean = false
    ) {

        this._location = location
        this._routeLength = routeLength
        this._byCity = byCity

        makeAutoObservable(this)

    }

    get isDisabled(): boolean {
        return this._location.city.trim().length > 0 && this._routeLength > 0
    }

    get location(): ILocation {
        return this._location;
    }

    set location(value: ILocation) {
        this._location = value;
    }

    get byCity(): boolean {
        return this._byCity;
    }

    set byCity(value: boolean) {
        this._byCity = value;
    }

    get routeLength(): number {
        return this._routeLength;
    }

    set routeLength(value: number) {
        this._routeLength = value;
    }

    clearLocation(): void {
        this._location = {
            id: 0,
            city: "",
            country: "",
            tourCount: 0,
            region: "",
            image: ""
        }
    }

}