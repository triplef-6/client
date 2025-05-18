import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {useAuthContext} from "@/features";

export const useOnboardingRedirect = () => {

    const navigate = useNavigate()
    const {isAuth} = useAuthContext()

    useEffect(() => {

        if (isAuth) return

        const hasVisited = localStorage.getItem("hasVisitedOnboarding")
        if (hasVisited !== "visited") {
            localStorage.setItem("hasVisitedOnboarding", "visited")
            navigate(`/${RouteNames.ON_BOARDING}`)
        }

    }, [isAuth, navigate])

}