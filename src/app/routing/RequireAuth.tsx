import React, {FC} from "react";
import {RouteNames} from "@/shared/types";
import {Navigate} from "react-router-dom";
import {authStore as auth} from "@/features";
import {observer} from "mobx-react-lite";

type RequireAuthProps = {
    children: React.ReactNode;
}

export const RequireAuth: FC<RequireAuthProps> = observer((props) => {
    const isAuth = auth.isAuth
    if (!isAuth) return <Navigate to={`/${RouteNames.MAIN}`}/>
    return props.children
})