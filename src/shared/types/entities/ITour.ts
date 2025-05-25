import {TourAccessibility, TourFormat, TourFormatBehavior} from "@/shared/types/utills";
import {YandexMapCoordinates} from "@/shared/types/lib";
import {IDescription} from "./IDescription.ts";
import {ILocation} from "./ILocation.ts"
import {IContacts} from "./IContacts.ts";
import {IUser} from "@/shared/types";

export interface ITour {
    id: number
    title: string
    description: IDescription
    images: (File | null | string)[]
    coordinates: YandexMapCoordinates
    tags: string[]
    location: ILocation
    routeLength: number
    byCity: boolean
    price?: number
    priceForPerson: number
    groupCapacity: number
    formatBehavior: TourFormatBehavior
    format: TourFormat
    accessibility: TourAccessibility
    contacts: IContacts
    date: Date | undefined
    time: string
    duration: number
    contributorId: number
    rating: number
    ratingCount: number
    freeSeats: number
    registered?: IUser[]
}