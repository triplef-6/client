import {useBooking} from "@/features";
import {useTour} from "@/entities";
import {useState} from "react";
import {ISlot, ITour} from "@/shared/types";
import {useSlots} from "@/features/booking/model/useSlots.ts";

type ReturnType = {
    disabled: boolean
    isBooking: boolean
    slots: ISlot[]
    tour: ITour | undefined
    currentSlot: ISlot | null
    updateSlot: (slot: ISlot | null) => void
    groupCapacity: number
    updateCapacity: (value: number[]) => void
    load: () => void
}

export const useBookingForm = (tourId: number): ReturnType => {

    const {slots} = useSlots(tourId)
    const {data: tour} = useTour(tourId)
    const {mutate: booking, isPending: isBooking} = useBooking()

    const [slot, setSlot] = useState<ISlot | null>(null)
    const [groupCapacity, setGroupCapacity] = useState<number>(1)

    const updateSlot = (slot: ISlot | null) => {
        setSlot(slot)
        if (slot) setGroupCapacity(slot.groupCapacity)
    }

    const updateCapacity = (value: number[]) => setGroupCapacity(value[0])

    const load = () => {
        if (slot) booking({id: Date.now(), slot, groupCapacity})
    }

    return {
        currentSlot: slot,
        disabled: slot === null,
        slots, tour, isBooking, groupCapacity,
        updateSlot, updateCapacity, load
    }

}