import {useEffect, useState} from "react";

type ReturnType = {
    isLoginAllowed: boolean
    setIsLoginAllowed: (value: boolean) => void
}

const STORAGE_KEY = "isLoginAllowed"

export const useLoginPermission = (): ReturnType => {

    const saved = localStorage.getItem(STORAGE_KEY)
    const initialState = saved !== null ? saved === "true" : true

    const [
        isLoginAllowed,
        setIsLoginAllowed
    ] = useState<boolean>(initialState)

    useEffect(() => localStorage.setItem(STORAGE_KEY, String(isLoginAllowed)), [isLoginAllowed])

    return { isLoginAllowed, setIsLoginAllowed }

}