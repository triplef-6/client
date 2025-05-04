import React, {FC} from "react";
import {RouteNames, UserRole} from "@/shared/types";
import {Navigate} from "react-router-dom";
import {useAuthContext} from "@/features";

type RequireAuthProps = {
    children: React.ReactNode;
    role?: UserRole
}

export const RequireAuth: FC<RequireAuthProps> = (props) => {

    const {isAuth} = useAuthContext()

    /*
    if (!isAuth || (props.role !== null && props.role !== role)) {
        return <Navigate to={"/main"}/>
    }
     */

    if (!isAuth) return <Navigate to={`/${RouteNames.MAIN}`}/>

    return props.children;

};