import {FC} from "react";
import {BookingCard, Button} from "@/shared/ui";
import {useBookingForm} from "@/features/booking/hooks";
import s from "./style.module.css"
import {TourName} from "@/features/booking/ui/TourName.tsx";
import {TourDuration} from "@/features/booking/ui/TourDuration.tsx";
import {TourFormat} from "@/shared/types";
import {GroupCapacitySlider} from "@/features/booking/ui/GroupCapacitySlider.tsx";

type FormProps = {
    tourId: number
}

export const BookingForm: FC<FormProps> = ({tourId}) => {

    const {
        tour,
        slots,
        currentSlot,
        groupCapacity,
        isBooking,
        disabled,
        updateCapacity, updateSlot, load
    } = useBookingForm(tourId)

    if (!tour) return null

    return (
        <div className={s.page}>
            <div className={s.list}>
                {slots.map(slot =>
                    <BookingCard
                        key={slot.id}
                        slot={slot}
                        currentSlot={currentSlot}
                        update={updateSlot}
                    />
                )}
            </div>
            <div className={s.container}>
                <div className={s.options}>
                    <span className={s.heading}>Бронирование</span>
                    <TourName name={tour.title}/>
                    <TourDuration duration={tour.duration}/>
                    {
                        tour.format === TourFormat.GROUP &&
                        <GroupCapacitySlider
                            currentSlot={currentSlot}
                            groupCapacity={groupCapacity}
                            updateCapacity={updateCapacity}
                        />
                    }
                </div>
                <Button disabled={disabled} onClick={load}>
                    {isBooking ? "Бронируем" : "Забронировать"}
                </Button>
            </div>
        </div>
    );
};