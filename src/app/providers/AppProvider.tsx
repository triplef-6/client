import {FC, ReactNode} from "react";
import {BrowserRouter} from "react-router-dom";
import {TanstackQueryProvider} from "./TanstackQueryProvider.tsx";

export const AppProvider:FC<{children: ReactNode}> = ({children}) => {
    return(
        <TanstackQueryProvider>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </TanstackQueryProvider>
    )
}