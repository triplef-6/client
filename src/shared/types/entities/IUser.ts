import {IContacts} from "@/shared/types";

export interface IUser {
    id: number
    name: string
    avatar: string
    surname: string
    info: string
    rating: number
    ratingCount: number
    contacts: IContacts
}