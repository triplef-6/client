import {FC, ReactNode, useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createSyncStoragePersister} from "@tanstack/query-sync-storage-persister";
import {persistQueryClient} from "@tanstack/react-query-persist-client";

export const TanstackQueryProvider: FC<{children: ReactNode}> = ({children}) => {

    const [queryClient] = useState(() => {

        const client = new QueryClient({
            defaultOptions: {
                queries: {
                    staleTime: Infinity
                },
            },
        })

        const localStoragePersister = createSyncStoragePersister({
            storage: window.localStorage,
        })

        persistQueryClient({
            queryClient: client,
            persister: localStoragePersister,
            maxAge: Infinity,
        })

        return client

    })

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};