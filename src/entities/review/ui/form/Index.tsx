import {FC} from "react";
import {Button, ReviewInput} from "@/shared/ui";
import {useReviewForm} from "@/entities/review/hooks";

import {Header, Stars} from "./components";
import s from "./style.module.css"
import {ITour} from "@/shared/types";

type FormProps = {
    type: "create" | "update",
    tour: ITour
}

export const Index: FC<FormProps> = ({tour, type}) => {

    const {
        completed, review,
        updateRating, updateNegative, updatePositive, save
    } = useReviewForm(type, tour)

    return (
        <div className={s.container}>
            <Header tourId={tour.id} title={tour.title} rating={tour.rating} ratingCount={tour.ratingCount}/>
            <Stars rating={review.rating} setRating={updateRating}/>
            <div className={s.reviews}>
                <ReviewInput
                    defaultValue={review.positiveText}
                    className={"bg-grayscale-200"}
                    onChangeHandler={updatePositive}
                    placeholder={"Что понравилось"}
                />
                <ReviewInput
                    defaultValue={review.negativeText}
                    className={"bg-grayscale-200"}
                    onChangeHandler={updateNegative}
                    placeholder={"Что не понравилось"}
                />
            </div>
            <div>
                <Button className={"mt-4"} disabled={!completed} onClick={save}>
                    {type === "create" ? "Добавить" : "Изменить"}
                </Button>
            </div>
        </div>
    );
};