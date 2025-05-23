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
                {
                    tours.length !== 0 ?
                        tours.map(tour => <TourCard key={tour.id} tour={tour}/>) :
                        <div className={"flex flex-col justify-center py-16"}>
                            <h2 className={"text-grayscale-500 text-2xl"}>
                                У контрибьютера пока нет других предложений
                            </h2>
                        </div>
                }
            </div>
        </div>
    );
};