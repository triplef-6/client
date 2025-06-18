import {FC} from "react";
import {formatDate, formatTime} from "@/shared/lib";
import {getWeekDay} from "@/shared/utils";
import {Button} from "@/shared/ui";
import s from "./style.module.css"
import {ISlot} from "@/shared/types";
import {cn} from "@/app/lib";

type BoobingCardProps = {
    slot: ISlot
    currentSlot: ISlot | null
    update: (value: ISlot | null) => void
}

export const BookingCard: FC<BoobingCardProps> = ({slot, currentSlot, update}) => {

    if (!slot) return null

    const isSelected = currentSlot?.id === slot.id

    const clickHandler = () => {
        if (isSelected) update(null)
        else update(slot)
    }

    return (
        <div
            className={cn(
                "flex flex-col justify-between items-center min-w-52 min-h-64 max-h-72 p-4 rounded-2xl",
                "bg-grayscale-0 border-2 border-transparent hover:border-grayscale-350 transition-all",
                isSelected && "border-primary-0 hover:border-primary-0"
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
            <Button
                onClick={clickHandler}
                variant={"booking"}
            >
                {currentSlot !== slot ? "Выбрать" : "Отменить"}
            </Button>
        </div>
    )
}