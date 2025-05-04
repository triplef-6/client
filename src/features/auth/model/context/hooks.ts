import {useContext} from "react";
import {AuthContextType} from "./types.ts";
import {AuthContext} from "@/features";

export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("Context error!")
    return context
}