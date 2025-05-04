import {FC, ReactNode} from "react";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {AuthProvider} from "./AuthProvider.tsx";

const queryClient = new QueryClient()

export const AppProvider:FC<{children: ReactNode}> = ({children}) => {
    return(
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </BrowserRouter>
        </QueryClientProvider>
    )
}