import {FC} from "react";
import {TourCard} from "@/entities";
import {ITour} from "@/shared/types";
import {useFavFactory} from "@/features";
import s from "./style.module.css"

export const FavList: FC = () => {

    const favourites: ITour[] = useFavFactory()

    return (
        <div className={s.list}>
            {
                favourites.map(
                    tour => <TourCard key={tour.id} tour={tour}/>
                )
            }
        </div>
    );
};