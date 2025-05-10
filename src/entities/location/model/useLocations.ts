import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ILocation} from "@/shared/types";
import {getLocations} from "@/entities/location/api";

export const useLocations = () => {

    const query = useQuery<ILocation[], ApiException<ILocation>>({
        queryKey: ["locations"],
        queryFn: () => getLocations(),
        placeholderData: [],
        retry: false
    })

    return {
        ...query,
        data: query.data ?? []
    }

}