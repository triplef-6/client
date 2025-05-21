import {useAuthContext, useLogout} from "@/features";

export const useLogoutFromGoogle = () => {

    const {setIsLoginAllowed, logout} = useAuthContext()
    const {mutate: logoutFromGoogle} = useLogout()

    return () => {
        setIsLoginAllowed(false)
        logout()
        logoutFromGoogle()
    }

}