import {FC, ReactNode} from "react";
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./AuthProvider.tsx";
import {TanstackQueryProvider} from "./TanstackQueryProvider.tsx";

export const AppProvider:FC<{children: ReactNode}> = ({children}) => {
    return(
        <TanstackQueryProvider>
            <BrowserRouter>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </BrowserRouter>
        </TanstackQueryProvider>
    )
}