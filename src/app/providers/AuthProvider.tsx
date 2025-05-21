import {ReactNode, useEffect, useState} from "react";
import {AuthContext, useLoginPermission} from "@/features";

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [isAuth, setIsAuth] = useState<boolean>(false)
    const {isLoginAllowed, setIsLoginAllowed} = useLoginPermission()

    useEffect(() => {
        console.log("IS AUTH ",isAuth)
        console.log("IS ALLOWED ",isLoginAllowed)
    }, [isAuth]);

    const login = () => setIsAuth(true)
    const logout = () => setIsAuth(false)

    return (
        <AuthContext.Provider value={{isAuth, logout, login, isLoginAllowed, setIsLoginAllowed}}>
            {children}
        </AuthContext.Provider>
    )
}