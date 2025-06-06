import {FC} from "react";
import {Button, Slider} from "@/shared/ui";
import {formatHours, formatPeople} from "@/shared/lib/format";
import {TourFormat} from "@/shared/types";
import {Binoculars, CalendarCheck, Clock, Users} from "lucide-react";
import {useBookingForm} from "@/features/booking/hooks";
import s from "./style.module.css"

type FormProps = {
    tourId: number
}

export const BookingForm: FC<FormProps> = ({tourId}) => {

    const {
        isBooking,
        title,
        format,
        duration,
        date,
        freeSeats,
        capacity,
        disabled,
        click, update
    } = useBookingForm(tourId)

    return (
        <div className={s.container}>

            <span className={s.heading}>Бронирование</span>

            <div className={s.subContainer}>
                <div className={s.smallHeading}>
                    <Binoculars width={20} height={20} className={"text-grayscale-500"}/>
                    <span className={s.bold}>Экскурсия</span>
                </div>
                <p className={s.text}>{title}</p>
            </div>

            <div className={s.subContainer}>
                <div className={s.smallHeading}>
                    <CalendarCheck width={20} height={20} className={"text-grayscale-500"}/>
                    <span className={s.bold}>Время начала</span>
                </div>
                <p className={s.text}>
                    {date &&
                        new Date(date).toLocaleDateString("ru-RU", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            weekday: "long",
                        })
                    }
                </p>
            </div>

            <div className={s.subContainer}>
                <div className={s.smallHeading}>
                    <Clock width={20} height={20} className={"text-grayscale-500"}/>
                    <span className={s.bold}>Длительность</span>
                </div>
                <p className={s.text}>
                    Мероприятие будет длиться {formatHours(duration)}
                </p>
            </div>

            {
                format === TourFormat.GROUP &&
                <div className={s.subContainer}>
                    <div className={s.smallHeading}>
                        <Users width={20} height={20} className={"text-grayscale-500"}/>
                        <span className={s.bold}>Размер группы</span>
                    </div>
                    <p className={s.text}>Забранированно мест {formatPeople(capacity)}</p>
                    <Slider
                        value={[capacity]}
                        onValueChange={update}
                        defaultValue={[1]}
                        max={freeSeats}
                        step={1}
                    />
                </div>
            }

            <Button disabled={disabled} onClick={click}>
                {isBooking ? "Бронируем" : "Забронировать"}
            </Button>

        </div>
    );
};