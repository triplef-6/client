import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getSlotsByTourId} from "@/features/booking/api";
import {ISlot} from "@/shared/types";

const mockSlots: ISlot[] = [
    {
        id: 0,
        tourId: 0,
        date: new Date(new Date().getFullYear(), 6, 8), // 6 = Июль (0-based)
        time: "10:00:00",
        groupCapacity: 10,
        freeSeats: 10,
    },
    {
        id: 1,
        tourId: 0,
        date: new Date(new Date().getFullYear(), 6, 12),
        time: "12:00:00",
        groupCapacity: 12,
        freeSeats: 8,
    },
    {
        id: 2,
        tourId: 0,
        date: new Date(new Date().getFullYear(), 6, 23),
        time: "14:00:00",
        groupCapacity: 15,
        freeSeats: 5,
    },
]

export const useSlots = (tourId: number) => {

    const query = useQuery<ISlot[], ApiException<ISlot>>({
        queryKey: ["slots", tourId],
        queryFn: () => getSlotsByTourId(tourId),
        placeholderData: [],
        enabled: !!tourId
    })

    return {
        ...query,
        slots: mockSlots ? mockSlots : [],
        isEmpty: query.data ? query.data.length === 0 : 0
    }

}