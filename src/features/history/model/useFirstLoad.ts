import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {RouteNames} from "@/shared/types";
import {authStore as auth, tourLocalHistoryStore as history} from "@/features";

export const useFirstLoad = () => {

    const navigate = useNavigate()
    const isAuth = auth.isAuth
    const isFirstLoad = history.isFirstLoad

    useEffect(() => {

        if (isFirstLoad && !isAuth) {
            history.visit()
            navigate(`/${RouteNames.ON_BOARDING}`)
        }

    }, [isAuth, isFirstLoad, navigate])

}