import {useQuery} from "@tanstack/react-query";
import {IUser} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getUser} from "@/entities/user/api";
import {getFallbackUser} from "@/entities/user/utils";

export const useUser = (id: number) => {

    const fallback = getFallbackUser()

    const query = useQuery<IUser, ApiException<IUser>>({
        queryKey: ["user", id],
        queryFn: () => getUser(id),
        enabled: !!id
    })

    return {
        ...query,
        user: query.data || fallback
    }

}