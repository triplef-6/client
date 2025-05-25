import {FC} from "react";
import {ITour, RouteNames} from "@/shared/types";
import style from "./style.module.css"
import {BookingButton, IndividualPrice} from "@/shared/ui";
import {Item} from "./item";
import {Rating} from "./rating";
import {ContributorButton} from "@/entities";
import {formatDate, formatHours, formatPeople, formatTime} from "@/shared/lib/format";

type SidebarProps = {
    tour: ITour
}

export const Index: FC<SidebarProps> = ({tour}) => {
    return (
        <div className={style.container}>
            <ContributorButton contributorId={tour.contributorId}/>
            <div className={style.subContainer}>
                <Item option={"Формат:"} value={tour.format}/>
                {tour.date && <Item option={"Дата:"} value={formatDate(tour.date)}/>}
                <Item option={"Начало:"} value={formatTime(tour.time)}/>
                <Item option={"Длительность:"} value={formatHours(tour.duration)}/>
                <Item option={"Размер группы:"} value={formatPeople(tour.groupCapacity)}/>
                <Rating option={"Рейтинг:"} rating={tour.rating} ratingCount={tour.ratingCount}/>
                <hr className={style.separator}/>
                <IndividualPrice price={tour.priceForPerson}/>
                <BookingButton
                    freeSeats={tour.freeSeats}
                    size={"lg"}
                    link={`/${RouteNames.BOOKING}/${tour.id}`}
                    text={"Забронировать место(а)"}
                />
            </div>
        </div>
    );
};