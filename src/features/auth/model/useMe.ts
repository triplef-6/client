import {useQuery} from "@tanstack/react-query";
import {getMe} from "@/features/auth/api";
import {getFallbackMe} from "@/features/auth/utils";

export const useMe = () => {

    const fallback = getFallbackMe()

    const query = useQuery({
        queryKey: ["me"],
        queryFn: getMe,
        retry: false
    })

    return {
        ...query,
        data: query.data ?? fallback,
        isFallback: query.data?.id === fallback.id
    }

}