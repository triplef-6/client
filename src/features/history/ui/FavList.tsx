import {FC} from "react";
import {TourCard} from "@/entities";
import {useFavFactory} from "@/features";
import s from "./style.module.css"

export const FavList: FC = () => {

    const {data: favourites} = useFavFactory()

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