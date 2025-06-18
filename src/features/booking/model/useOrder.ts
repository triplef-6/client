import {useQuery} from "@tanstack/react-query";
import {IOrder} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getOrder} from "@/features/booking/api";
import {SearchOrderParamsType} from "@/features/booking/types";

// TODO не реализованно на сервере, поэтому стоит fallback

const fallback: IOrder = {
    id: 0,
    groupCapacity: 1,
    slot: {
        id: 0,
        tourId: 0,
        date: new Date(),
        time: "22:00",
        groupCapacity: 10,
        freeSeats: 4,
    }
}

export const useOrder = (tourId: number, date: Date | undefined, time: string) => {

    const params: SearchOrderParamsType = {
        tourId,
        date: date instanceof Date ? date.toISOString().split("T")[0] : "",
        time
    }

    const query = useQuery<IOrder, ApiException<IOrder>>({
        queryKey: ["order", params],
        queryFn: () => getOrder(params),
        enabled: !!tourId
    })

    return {
        ...query,
        order: fallback
    }

}