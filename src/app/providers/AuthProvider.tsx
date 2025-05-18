import {ReactNode, useRef} from "react";
import {AuthContext, useLogout} from "@/features";
import {useMe} from "@/features/auth/model/useMe.ts";
import {useQueryClient} from "@tanstack/react-query";
import {RouteNames} from "@/shared/types";

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const queryClient = useQueryClient()

    const isAuthEnabled = useRef(true)

    const {data: user, fallback, isAuth} = useMe(isAuthEnabled.current)
    const {mutate: logoutFromGoogle} = useLogout()

    const login = () => {
        isAuthEnabled.current = true
        window.location.href = RouteNames.LOGIN
    }

    const logout = () => {

        isAuthEnabled.current = false

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