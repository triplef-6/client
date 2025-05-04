import {useQuery} from "@tanstack/react-query";
import {getMe} from "@/features/auth/api";

export const useMe = () => {
    return useQuery({
        queryKey: ["me"],
        queryFn: getMe,
        staleTime: 300_000,
        retry: false
    })
}