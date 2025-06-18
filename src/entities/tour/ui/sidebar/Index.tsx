import {FC} from "react";
import {ITour, RouteNames} from "@/shared/types";
import style from "./style.module.css"
import {BookingButton, Calendar, IndividualPrice} from "@/shared/ui";
import {Item} from "./item";
import {Rating} from "./rating";
import {ContributorButton} from "@/entities";
import {formatDate, formatHours} from "@/shared/lib/format";
import {useSlots} from "@/features/booking/model/useSlots.ts";

type SidebarProps = {
    tour: ITour
}

export const Index: FC<SidebarProps> = ({tour}) => {

    const {slots} = useSlots(tour.id)

    const dates: Date[] = slots
        .map(slot => slot.date)
        .filter((date): date is Date => date !== undefined)
        .sort((a, b) => a?.getTime() - b.getTime())

    const firstDate: Date = dates[0]

    return (
        <div className={style.container}>
            <ContributorButton contributorId={tour.contributorId}/>
            <div className={"flex flex-col sm:flex-row lg:flex-col gap-4"}>
                <div className={style.subContainer}>
                    <Item option={"Формат:"} value={tour.format}/>
                    <Item option={"Длительность:"} value={formatHours(tour.duration)}/>
                    <Item option={"Ближайшая дата:"} value={formatDate(firstDate)}/>
                    <Item option={"Количество слотов:"} value={`${slots.length}`}/>
                    <Rating option={"Рейтинг:"} rating={tour.rating} ratingCount={tour.ratingCount}/>
                    <hr className={style.separator}/>
                    <IndividualPrice price={tour.priceForPerson}/>
                    <BookingButton
                        size={"lg"}
                        link={`/${RouteNames.BOOKING}/${tour.id}`}
                        text={"Забронировать место(а)"}
                    />
                </div>
                <Calendar
                    className={"w-full rounded-2xl"}
                    selected={dates}
                    defaultMonth={firstDate}
                    mode={"multiple"}
                />
            </div>
        </div>
    );
};