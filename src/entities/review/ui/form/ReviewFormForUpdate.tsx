import {FC} from "react";
import {AppSkeleton, Button, ReviewInput} from "@/shared/ui";
import {Header, Stars} from "./components";
import s from "./style.module.css"
import {IReview} from "@/shared/types";
import {useUpdateReviewForm} from "@/entities/review/hooks";
import {useTour} from "@/entities";

type FormProps = {
    myReview: IReview
}

export const ReviewFormForUpdate: FC<FormProps> = ({myReview}) => {

    const {data: tour, isLoading, isError} = useTour(myReview.tourId)
    if (!tour || isError) return null

    const {
        review,
        completed,
        updatePositive, updateNegative, updateRating, save
    } = useUpdateReviewForm(myReview)

    if (isLoading) return <AppSkeleton/>

    return (
        <div className={s.container}>
            <Header tourId={tour.id} title={tour.title} rating={tour.rating} ratingCount={tour.ratingCount}/>
            <Stars rating={review.rating} setRating={updateRating}/>
            <div className={s.reviews}>
                <ReviewInput
                    value={review.positiveText}
                    className={"bg-grayscale-200"}
                    onChangeHandler={updatePositive}
                    placeholder={"Что понравилось"}
                />
                <ReviewInput
                    value={review.negativeText}
                    className={"bg-grayscale-200"}
                    onChangeHandler={updateNegative}
                    placeholder={"Что не понравилось"}
                />
            </div>
            <div>
                <Button className={"mt-4"} disabled={completed} onClick={save}>
                    Изменить
                </Button>
            </div>
        </div>
    );
};