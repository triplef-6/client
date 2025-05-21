import {loginWithGoogle, useAuthContext} from "@/features";

export const useLoginWithGoogle = () => {
    
    const {setIsLoginAllowed} = useAuthContext()
    
    return () => {
        setIsLoginAllowed(true)
        loginWithGoogle()
    }
    
}