import {ReactNode, useEffect, useState} from "react";
import {AuthContext, tourLocalHistoryStore as history, useLogout} from "@/features";
import {useAddTags} from "@/entities";
import {useMe} from "@/features/auth/model/useMe.ts";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {useQueryClient} from "@tanstack/react-query";
import {getFallbackMe} from "@/features/auth/utils";

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [isConfirmLogin, setIsConfirmLogin] = useState<boolean>(false)

    const {data: user, isSuccess} = useMe()
    const {mutate: logoutFromGoogle} = useLogout()
    const {mutate: addTags} = useAddTags()

    const confirmLogin = () => setIsConfirmLogin(true)

    useEffect(() => {
        console.log(isAuth)
    }, [isAuth]);

    useEffect(() => {
        if (isSuccess && user && isConfirmLogin) {

            setIsAuth(true)

            if (history.tagsCount !== 0) {
                addTags(history.tags)
                history.clearTags()
            }

            const hasVisited = localStorage.getItem("hasVisitedOnboarding")
            if (hasVisited !== "visited") {
                localStorage.setItem("hasVisitedOnboarding", "visited")
                navigate(`/${RouteNames.ON_BOARDING}`)
            }

        }
    }, [isSuccess, user, addTags, navigate]);

    const logout = () => {

        setIsConfirmLogin(false)

        const hasVisited = localStorage.getItem("hasVisitedOnboarding")
        localStorage.clear()
        if (hasVisited === "visited") localStorage.setItem("hasVisitedOnboarding", "visited")

        logoutFromGoogle()
        setIsAuth(false)
        queryClient.removeQueries({queryKey: ["me"]})

    }

    return (
        <AuthContext.Provider value={{user: user ?? getFallbackMe(), isAuth, setIsAuth, logout, confirmLogin}}>
            {children}
        </AuthContext.Provider>
    )
}