import {AppRoutes} from "@/app/routing";
import {StrictMode, useEffect} from "react";
import {authStore as auth, tourLocalHistoryStore as history, useAddManyFavFactory} from "@/features";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "@/shared/types";

export const App = () => {

    useAddManyFavFactory()

    const navigate = useNavigate()

    useEffect(() => {

        if (history.isFirstLoad && !auth.isAuth) {
            history.visit()
            navigate(`/${RouteNames.ON_BOARDING}`)
        }

    }, [navigate])

    return (
        <StrictMode>
            <AppRoutes/>
        </StrictMode>
    )
};