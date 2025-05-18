import {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import {AuthContext, tourLocalHistoryStore as history, useLogout} from "@/features";
import {useAddTags} from "@/entities";
import {useMe} from "@/features/auth/model/useMe.ts";
import {RouteNames} from "@/shared/types";
import {useQueryClient} from "@tanstack/react-query";

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    //const navigate = useNavigate()
    const queryClient = useQueryClient()

    const [isAuth, setIsAuth] = useState<boolean>(false)
    const isLoginRequested = useRef(false)

    const {data: user, fallback} = useMe()
    const {mutate: logoutFromGoogle} = useLogout()
    const {mutate: addTags} = useAddTags()

    // Редирект на onboarding при первом запуске
    /*
    useEffect(() => {
        const hasVisited = localStorage.getItem("hasVisitedOnboarding")
        if (hasVisited !== "visited") {
            localStorage.setItem("hasVisitedOnboarding", "visited")
            navigate(`/${RouteNames.ON_BOARDING}`)
        }
    }, [])
     */

    const login = () => {
        isLoginRequested.current = true
        window.location.href = RouteNames.LOGIN
    }
    
    const finishLogin = useCallback(() => {
        if (user) {
            setIsAuth(true)
            if (history.tagsCount !== 0) {
                addTags(history.tags)
                history.clearTags()
            }
        }
    }, [addTags, user])

    useEffect(() => {
        if (isLoginRequested) finishLogin()
        else setIsAuth(false)
    }, [finishLogin, isLoginRequested])

    const logout = async () => {

        isLoginRequested.current = false

        const hasVisited = localStorage.getItem("hasVisitedOnboarding")
        localStorage.clear()
        if (hasVisited === "visited") localStorage.setItem("hasVisitedOnboarding", "visited")

        logoutFromGoogle()
        setIsAuth(false)
        await queryClient.invalidateQueries({queryKey: ["me"]})

    }

    return (
        <AuthContext.Provider value={{user: user ?? fallback, isAuth, setIsAuth, logout, login}}>
            {children}
        </AuthContext.Provider>
    )
}