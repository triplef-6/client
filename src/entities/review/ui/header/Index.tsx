import {FC} from "react";
import style from "./style.module.css"
import {Rating} from "@/shared/ui"
import {formatReviews} from "@/shared/utills";

type ReviewHeaderProps = {
    rating: number
    ratingCount: number
}

export const Index: FC<ReviewHeaderProps> = ({rating, ratingCount}) => {
    return (
        <div className={style.container}>
            <div className={style.heading}>{formatReviews(ratingCount)}</div>
            <Rating rating={rating} ratingCount={ratingCount}/>
        </div>
    );
};