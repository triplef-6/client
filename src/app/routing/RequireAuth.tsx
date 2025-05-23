import React, {FC} from "react";
import {RouteNames, UserRole} from "@/shared/types";
import {Navigate} from "react-router-dom";
import {authStore as auth} from "@/features";
import {observer} from "mobx-react-lite";

type RequireAuthProps = {
    children: React.ReactNode;
    role?: UserRole
}

export const RequireAuth: FC<RequireAuthProps> = observer((props) => {

    const isAuth = auth.isAuth

    /*
    if (!isAuth || (props.role !== null && props.role !== role)) {
        return <Navigate to={"/main"}/>
    }
     */

    if (!isAuth) return <Navigate to={`/${RouteNames.MAIN}`}/>

    return props.children;

})