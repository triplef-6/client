import {FC} from "react";
import {ITour} from "@/shared/types";
import {Details} from "./details";
import {Contributor} from "./contributor";
import style from "./style.module.css"
import {Reviews} from "@/entities/review";
import {Contacts} from "@/shared/ui";

type DescriptionProps = {
    tour: ITour
}

export const Index: FC<DescriptionProps> = ({tour}) => {
    return (
        <div className={style.container}>

            <div className={style.subContainer}>
                <p>{tour.description.info}</p>
            </div>

            <h2 className={style.heading}>
                Что Вас ождает:
            </h2>

            <div className={style.subContainer}>
                <p>{tour.description?.whatToExpect}</p>
                <span className={style.bold}>
                    Что вам встретится по пути
                </span>
                <ul className={style.list}>
                    {tour.description.places.map((location, i) => (
                        <li key={i}>{location}</li>
                    ))}
                </ul>
                <span className={style.bold}>
                    О чём будем беседовать
                </span>
                <ul className={style.list}>
                    {tour.description?.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                    ))}
                </ul>
            </div>

            <div className={style.subContainer}>
                <h3 className={style.heading}>
                    Организационные детали
                </h3>
                <p>{tour.description?.orgDetails}</p>
            </div>

            <div className={style.subContainer}>
                <h3 className={style.heading}>
                    Место встречи
                </h3>
                <p>{tour.description?.meetingPlace}</p>
            </div>

            <div className={style.contacts}>
                <h3 className={style.heading}>
                    Остались вопросы?
                </h3>
                <Contacts contacts={tour.contacts}/>
            </div>

            <Details
                format={tour.format}
                groupCapacity={tour.groupCapacity}
            />

            <Reviews
                tourId={tour.id}
                rating={tour.rating}
                ratingCount={tour.ratingCount}
            />

            <Contributor contributorId={tour.contributorId}/>

        </div>
    );
};