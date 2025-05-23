import {IContacts, UserRole} from "@/shared/types";

export interface IMe {
    id: number
    name: string
    surname: string
    email: string
    role: UserRole
    avatar: string
    avatarFile: File | null
    tags: string[]
    rating?: number
    ratingCount?: number
    contacts?: IContacts
    info?: string
}