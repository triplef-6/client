import {FC, useEffect, useState} from "react";
import {searchTourByCity, searchTourByRegion, useViewFactory} from "@/features";
import style from "@/widgets/viewedTours/style.module.css";
import {TourCard} from "@/entities";
import {TourPagination} from "@/shared/ui";
import {ITour} from "@/shared/types";

type ToursProps = {
    city: string
    byCity: boolean
}

export const Index: FC<ToursProps> = ({city, byCity}) => {

    const viewed: ITour[] = useViewFactory()

    const [tours, setTours] = useState<ITour[]>([])
    const [visible, setVisible] = useState<number>(3)

    useEffect(() => {

        let filteredTours: ITour[] = viewed

        if (byCity) filteredTours = searchTourByRegion(filteredTours, byCity)
        if (city) filteredTours = searchTourByCity(filteredTours, city)

        setTours(filteredTours)

    }, [viewed, city, byCity]);

    return (
        <div className={style.viewed}>
            <span>Вы смотрели ранее</span>
            {tours.length === 0
                ?
                null
                :
                <>
                    {tours.slice(0, visible).map(tour => <TourCard key={tour.id} tour={tour}/>)}
                    <TourPagination
                        visiable={visible}
                        setVisible={setVisible}
                        maxLength={tours.length}
                    />
                </>

            }
        </div>
    );
};