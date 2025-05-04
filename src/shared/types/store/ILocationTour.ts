import {ILocation} from "@/shared/types";

export interface ILocationTour {
    get location(): ILocation
    set location(value: ILocation)
}