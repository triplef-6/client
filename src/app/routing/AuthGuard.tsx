import {FC, ReactNode} from "react";
import {useAuthContext} from "@/features";
import {Navigate} from "react-router-dom";
import {RouteNames} from "@/shared/types";

type AuthGuardProps = {
    children: ReactNode
}

export const AuthGuard: FC<AuthGuardProps> = ({children}) => {

    const {isAuth} = useAuthContext()
    if (isAuth) return <Navigate to={`/${RouteNames.MAIN}`}/>
    return children

};