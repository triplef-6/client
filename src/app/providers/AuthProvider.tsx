import {ReactNode, useEffect, useState} from "react";
import {AuthContext, tourLocalHistoryStore as history, useLogout} from "@/features";
import {useAddTags} from "@/entities";
import {useMe} from "@/features/auth/model/useMe.ts";
import {useNavigate} from "react-router-dom";
import {IMe, RouteNames, UserRole} from "@/shared/types";
import avatar from "@/shared/assets/icons/avatar.svg"

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const navigate = useNavigate()

    const [isAuth, setIsAuth] = useState<boolean>(false)

    const {data: user, isSuccess} = useMe()
    const {mutate: logoutFromGoogle} = useLogout()
    const {mutate: addTags} = useAddTags()

    const fallback: IMe = {
        id: 0,
        role: UserRole.client,
        avatar: avatar,
        avatarFile: null,
        name: "Имя",
        surname: "Фамилия",
        email: "",
        tags: ["Гастрономический  ", "Водный сплав  ", "Горный треккинг  ", "Скрытые жемчужины  ", "Романтический  ",]
    }

    useEffect(() => {
        if (!isAuth) {

            const hasVisited = localStorage.getItem("hasVisitedOnboarding")

            if (!hasVisited) {
                localStorage.setItem("hasVisitedOnboarding", "true")
                navigate(`/${RouteNames.ON_BOARDING}`)
            }

        }
    }, [isAuth, navigate])

    useEffect(() => {
        if (isSuccess) {
            setIsAuth(true)
            if (history.tagsCount !== 0) addTags(history.tags)
        }
    }, [addTags, isSuccess]);

    const logout = () => {
        setIsAuth(false)
        logoutFromGoogle()
        localStorage.clear()
    }

    return (
        <AuthContext.Provider value={{user: user ?? fallback, isAuth, setIsAuth, logout}}>
            {children}
        </AuthContext.Provider>
    )
}