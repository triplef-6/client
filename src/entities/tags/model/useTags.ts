import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getTags} from "@/entities/tags/api";

export const useTags = () => {
    return useQuery<string[], ApiException<string>>({
        queryKey: ["tags"],
        queryFn: () => getTags(),
        staleTime: 600_000,
        placeholderData: [],
    })
}