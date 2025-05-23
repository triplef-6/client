import {FC} from "react";
import style from "./style.module.css"
import {Rating} from "./Rating.tsx";

type ReviewCardProps = {
    name: string
    rating: number
    positiveText: string
    negativeText: string
    withChildren: boolean
    personCount: number
}

export const Index: FC<ReviewCardProps> = ({rating, positiveText, negativeText, withChildren, personCount, name}) => {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.person}>
                    <span className={style.name}>{name}</span>
                    <span className={style.text}>
                        {withChildren ? "Путешествовал(а) с детьми" : "Путешествовал(а) без детей"},
                        {personCount} персоны
                    </span>
                </div>
                <Rating rating={rating}/>
            </div>
            <div className={style.reviews}>
                <div className={style.review}>
                    <div className={style.positive}></div>
                    <span className={style.text}>{positiveText}</span>
                </div>
                <div className={style.review}>
                    <div className={style.negative}></div>
                    <span className={style.text}>{negativeText}</span>
                </div>
            </div>
        </div>
    );
};