import {ReactNode, useState} from "react";
import {AuthContext, useLogout} from "@/features";
import {useMe} from "@/features/auth/model/useMe.ts";
import {useQueryClient} from "@tanstack/react-query";
import {RouteNames} from "@/shared/types";

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    //const navigate = useNavigate()
    const queryClient = useQueryClient()

    const [isAuthEnabled, setIsAuthEnabled] = useState(() => {
        return localStorage.getItem("isAuthEnabled") === "true"
    })

    const {data: user, fallback, isAuth} = useMe(isAuthEnabled)
    const {mutate: logoutFromGoogle} = useLogout()

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

    const login = async () => {
        localStorage.setItem("isAuthEnabled", "true")
        setIsAuthEnabled(true)
        window.location.href = RouteNames.LOGIN
    }

    const logout = () => {

        localStorage.setItem("isAuthEnabled", "false")
        setIsAuthEnabled(false)

        queryClient.removeQueries({ queryKey: ["me"] })

        const hasVisited = localStorage.getItem("hasVisitedOnboarding")
        //localStorage.clear()
        if (hasVisited === "visited") localStorage.setItem("hasVisitedOnboarding", "visited")

        logoutFromGoogle()

    }

    return (
        <AuthContext.Provider value={{user: user ?? fallback, isAuth, logout, login}}>
            {children}
        </AuthContext.Provider>
    )
}