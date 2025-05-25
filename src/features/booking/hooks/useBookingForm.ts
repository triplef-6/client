import {useBooking} from "@/features";
import {useTour} from "@/entities";
import {useEffect, useState} from "react";
import {TourFormat} from "@/shared/types";

type ReturnType = {
    title: string
    date: Date | undefined
    duration: number
    freeSeats: number
    capacity: number
    format: TourFormat
    disabled: boolean
    click: () => void
    update: (value: number[]) => void
    isBooking: boolean
}

export const useBookingForm = (tourId: number): ReturnType => {

    const {data: tour} = useTour(tourId)
    if (!tour) throw new Error("Tour not found")

    const {mutate: booking, isPending: isBooking} = useBooking()

    const [disabled, setDisabled] = useState<boolean>(true)
    const [capacity, setCapacity] = useState<number>(tour.format === TourFormat.GROUP ? 0 : 1)

    const update = (value: number[]) => setCapacity(value[0])

    useEffect(() => {
        if (capacity > 0) setDisabled(false)
        else setDisabled(true)
    }, [capacity])

    const click = () => booking({
        id: Number(Date.now()),
        tourId: tour.id,
        groupCapacity: capacity
    })

    return {
        title: tour.title,
        date: tour.date,
        duration: tour.duration,
        format: tour.format,
        freeSeats: tour.freeSeats,
        isBooking,
        capacity,
        disabled,
        click, update
    }

}