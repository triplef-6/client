import {FC, ReactNode} from "react";
import {authStore as auth} from "@/features";
import {Navigate} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {observer} from "mobx-react-lite";

type AuthGuardProps = {
    children: ReactNode
}

export const AuthGuard: FC<AuthGuardProps> = observer(({children}) => {
    const isAuth = auth.isAuth
    if (isAuth) return <Navigate to={`/${RouteNames.MAIN}`}/>
    return children
})