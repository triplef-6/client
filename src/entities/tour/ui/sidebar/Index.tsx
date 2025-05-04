import {FC} from "react";
import {ITour, RouteNames} from "@/shared/types";
import style from "./style.module.css"
import {BookingButton, IndividualPrice} from "@/shared/ui";
import {Item} from "./item";
import {Rating} from "./rating";
import {ContributorButton} from "@/entities";
import {formatHours, formatPeople} from "@/shared/utills";

type SidebarProps = {
    tour: ITour
}

export const Index: FC<SidebarProps> = ({tour}) => {
    return (
        <div className={style.container}>
            <ContributorButton contributorId={tour.contributorId}/>
            <div className={style.subContainer}>
                <Item option={"Формат:"} value={tour.format}/>
                <Item option={"Длительность:"} value={formatHours(tour.duration)}/>
                <Item option={"Размер группы:"} value={formatPeople(tour.groupCapacity)}/>
                <Item option={"Формат проведения:"} value={tour.formatBehavior}/>
                <Rating option={"Рейтинг:"} rating={tour.rating} ratingCount={tour.ratingCount}/>
                <hr className={style.separator}/>
                <IndividualPrice price={tour.priceForPerson}/>
                <BookingButton size={"lg"} link={`/${RouteNames.BOOKING}/${tour.id}`} text={"Забронировать место(а)"}/>
            </div>
        </div>
    );
};