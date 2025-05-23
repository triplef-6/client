import {FC} from "react";
import {Button, ReviewInput} from "@/shared/ui";
import {Header, Stars} from "./components";
import s from "./style.module.css"
import {ITour} from "@/shared/types";
import {useCreateReviewForm} from "@/entities/review/hooks";

type FormProps = {
    tour: ITour
}

export const ReviewForm: FC<FormProps> = ({tour}) => {

    const {
        positive, rating, negative, completed,
        updatePositive, updateNegative, updateRating, save
    } = useCreateReviewForm(tour)

    return (
        <div className={s.container}>
            <Header tourId={tour.id} title={tour.title} rating={tour.rating} ratingCount={tour.ratingCount}/>
            <Stars rating={rating} setRating={updateRating}/>
            <div className={s.reviews}>
                <ReviewInput
                    value={positive}
                    className={"bg-grayscale-200"}
                    onChangeHandler={updatePositive}
                    placeholder={"Что понравилось"}
                />
                <ReviewInput
                    value={negative}
                    className={"bg-grayscale-200"}
                    onChangeHandler={updateNegative}
                    placeholder={"Что не понравилось"}
                />
            </div>
            <div>
                <Button className={"mt-4"} disabled={!completed} onClick={save}>
                    Добавить
                </Button>
            </div>
        </div>
    );
};