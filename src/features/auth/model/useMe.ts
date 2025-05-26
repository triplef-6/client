import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getMe} from "@/features/auth/api";
import {getFallbackMe} from "@/features/auth/utils";
import {IMe, UserRole} from "@/shared/types";
import {authStore as auth, tourLocalHistoryStore as history} from "@/features";
import {useEffect} from "react";

export const useMe = () => {

    const queryClient = useQueryClient()
    const isLoginAllowed = auth.isLoginAllowed
    const tags = history.tags
    const fallback: IMe = getFallbackMe()

    const query = useQuery({
        queryKey: ["me"],
        queryFn: getMe
    })

    useEffect(() => {
        if (tags.length > 0 && query.data) {
            const updatedUser: IMe = { ...query.data, tags }
            queryClient.setQueryData(["me"], updatedUser)
            history.clearTags()
        }
    }, [tags])

    useEffect(() => {
        if (query.isSuccess && query.data && isLoginAllowed) auth.login()
        if (query.isError) auth.logout()
    }, [isLoginAllowed, query.data, query.isError, query.isSuccess])

    return {
        ...query,
        me: query.data || fallback,
        myId: query.data?.id || null,
        myRole: query.data && auth.isAuth ? query.data.role : UserRole.guest,
        isEmpty: !query.data
    }

}