import {FC} from "react";
import {formatDate, formatTime} from "@/shared/lib";
import {getWeekDay} from "@/shared/utils";
import s from "./style.module.css"
import {ISlot} from "@/shared/types";
import {cn} from "@/app/lib";

type CardProps = {
    slot: ISlot
}

export const BookingViewCard: FC<CardProps> = ({slot}) => {
    return (
        <div
            className={cn(
                "flex flex-col justify-between items-center min-w-52 p-4 rounded-2xl",
                "bg-grayscale-0 border-2 border-transparent hover:border-grayscale-350 transition-all",
            )}
        >
            <div className={s.bookingCardContent}>
                <p className={s.bookingTime}>{formatTime(slot.time)}</p>
                {
                    slot.date &&
                    <div>
                        <p className={s.bookingDate}>{formatDate(slot.date, "num")}</p>
                        <p className={s.bookingWeekDay}>{getWeekDay(slot.date)}</p>
                    </div>
                }
                <p className={s.bookingCapacity}>Свободно {slot.freeSeats} из {slot.groupCapacity}</p>
            </div>
        </div>
    )
}