import {IMe} from "@/shared/types";

export type AuthContextType = {
    isAuth: boolean
    user: IMe
    logout: () => void
    login: () => void
}