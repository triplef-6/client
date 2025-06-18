import {TourAccessibility, TourFormat, TourFormatBehavior} from "@/shared/types/utills";
import {YandexMapCoordinates} from "@/shared/types/lib";
import {IDescription} from "./IDescription.ts";
import {ILocation} from "./ILocation.ts"

// TODO убрать локацию, потому что она и так будет полученна при поиске тура

export interface ITour {
    id: number
    title: string
    description: IDescription
    images: (File | null | string)[]
    coordinates: YandexMapCoordinates
    tags: string[]
    location: ILocation
    //locationId: number
    routeLength: number
    byCity: boolean
    price?: number
    priceForPerson: number
    formatBehavior: TourFormatBehavior
    format: TourFormat
    accessibility: TourAccessibility
    duration: number
    contributorId: number
    rating: number
    ratingCount: number
}