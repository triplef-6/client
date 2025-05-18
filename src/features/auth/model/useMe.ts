import {useQuery} from "@tanstack/react-query";
import {getMe} from "@/features/auth/api";
import {getFallbackMe} from "@/features/auth/utils";

export const useMe = (enabled = true) => {

    const fallback = getFallbackMe()

    const query = useQuery({
        queryKey: ["me"],
        queryFn: getMe,
        retry: false,
        refetchOnWindowFocus: false,
        enabled
    })

    return {
        ...query,
        fallback,
        isAuth: !!query.data
    }

}