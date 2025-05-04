import {useContext} from "react";
import {EditContext} from "./context.ts";

export const useEditContext = () => {
    const context = useContext(EditContext)
    if (!context) throw new Error("Context error!")
    return context
}