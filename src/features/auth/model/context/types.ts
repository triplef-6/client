import {IMe} from "@/shared/types";

export type AuthContextType = {
    isAuth: boolean
    setIsAuth: (value: boolean) => void
    user: IMe
    logout: () => void
    login: () => void
}