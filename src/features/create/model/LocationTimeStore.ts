import {makeAutoObservable} from "mobx";
import {IByCity, IDuration, IIsDisabled, ILocation, ILocationTour, IRouteLength} from "@/shared/types";

export class LocationTimeStore implements ILocationTour, IDuration, IRouteLength, IByCity, IIsDisabled {

    private _location: ILocation
    private _routeLength: number
    private _byCity: boolean
    private _duration: number

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
        byCity: boolean = false,
        duration: number = 0
    ) {

        this._location = location
        this._routeLength = routeLength
        this._byCity = byCity
        this._duration = duration

        makeAutoObservable(this)

    }

    get isDisabled(): boolean {
        return this._location.city.trim().length === 0
            || this._routeLength === 0
            || this._duration === 0
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

    get duration(): number {
        return this._duration;
    }

    set duration(value: number) {
        this._duration = value;
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

    get city(): string {
        return this._location.city
    }

}