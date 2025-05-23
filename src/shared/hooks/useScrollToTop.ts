import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {RouteNames} from "@/shared/types";

export const useScrollToTop = () => {

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0 })
        if (location.pathname === "/") navigate(RouteNames.MAIN)
    }, [location.pathname, navigate])

}