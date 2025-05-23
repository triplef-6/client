import {useContext} from "react";
import {WidgetContext} from "./context.ts";

export const useWidgetContext = () => {
    const context = useContext(WidgetContext)
    if (!context) throw new Error("Context error!")
    return context
}