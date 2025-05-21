import {useQuery} from "@tanstack/react-query";
import {getMe} from "@/features/auth/api";
import {getFallbackMe} from "@/features/auth/utils";
import {IMe} from "@/shared/types";
import {useAuthContext} from "@/features";
import {useEffect} from "react";

export const useMe = () => {

    const {login, logout, isLoginAllowed} = useAuthContext()
    const fallback: IMe = getFallbackMe()

    const query = useQuery({
        queryKey: ["me"],
        queryFn: getMe,
        retry: false,
        refetchOnWindowFocus: false
    })

    useEffect(() => {
        if (query.isSuccess && query.data && isLoginAllowed) login()
        else if (query.isError || (!query.isFetching && !query.data) || !isLoginAllowed) logout()
    }, [query.data, query.isSuccess, query.isError, query.isFetching])

    return {
        ...query,
        user: query.data ? query.data : fallback,
        userId: query.data ? query.data.id : null,
        isEmpty: !query.data
    }

}