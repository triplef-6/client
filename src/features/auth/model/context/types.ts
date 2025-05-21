export type AuthContextType = {
    isAuth: boolean
    logout: () => void
    login: () => void
    isLoginAllowed: boolean
    setIsLoginAllowed: (value: boolean) => void
}