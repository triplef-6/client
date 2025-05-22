import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {RouteNames} from "@/shared/types";
import {useAuthContext} from "@/features";

export const useOnboardingRedirect = () => {

    const navigate = useNavigate()
    const {isAuth} = useAuthContext()

    useEffect(() => {

        const hasVisited = localStorage.getItem("hasVisitedOnboarding")

        if (!hasVisited && !isAuth) {
            localStorage.setItem("hasVisitedOnboarding", "visited")
            navigate(`/${RouteNames.ON_BOARDING}`)
        }

    }, [isAuth, navigate])

}