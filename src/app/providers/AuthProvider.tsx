import {ReactNode, useCallback, useEffect, useState} from "react";
import {AuthContext, tourLocalHistoryStore as history, useLogout} from "@/features";
import {useAddTags} from "@/entities";
import {useMe} from "@/features/auth/model/useMe.ts";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {useQueryClient} from "@tanstack/react-query";

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const [isAuth, setIsAuth] = useState<boolean>(false)

    const {data: user, fallback} = useMe()
    const {mutate: logoutFromGoogle} = useLogout()
    const {mutate: addTags} = useAddTags()

    const isLoginRequested = localStorage.getItem("isLoginRequested") === "true"

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
        localStorage.setItem("isLoginRequested", "true")
        window.location.href = RouteNames.LOGIN
    }
    
    const finishLogin = useCallback(() => {
        setIsAuth(true)
        if (history.tagsCount !== 0) {
            addTags(history.tags)
            history.clearTags()
        }
    }, [addTags])

    useEffect(() => {
        if (user && isLoginRequested) finishLogin()
        else setIsAuth(false)
    }, [finishLogin, user])

    const logout = () => {

        localStorage.removeItem("isLoginRequested")

        const hasVisited = localStorage.getItem("hasVisitedOnboarding")
        localStorage.clear()
        if (hasVisited === "visited") localStorage.setItem("hasVisitedOnboarding", "visited")

        logoutFromGoogle()
        setIsAuth(false)
        queryClient.removeQueries({queryKey: ["me"]})

    }

    return (
        <AuthContext.Provider value={{user: user ?? fallback, isAuth, setIsAuth, logout, login}}>
            {children}
        </AuthContext.Provider>
    )
}