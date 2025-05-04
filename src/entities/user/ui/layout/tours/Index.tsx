import {FC} from "react";
import {ITour} from "@/shared/types";
import {TourCard} from "@/entities";
import style from "./style.module.css";

type ToursProps = {
    tours: ITour[]
}

export const Index: FC<ToursProps> = ({tours}) => {
    return (
        <div className={style.container}>
            <span className={style.heading}>Другие предложения</span>
            <div className={style.list}>
                {tours.map(tour => <TourCard key={tour.id} tour={tour}/>)}
            </div>
        </div>
    );
};