import {FC} from "react";
import {SquareArrowOutUpRight} from "lucide-react";
import {useNavigate} from "react-router-dom";

import {Rating} from "@/shared/ui";
import {RouteNames} from "@/shared/types";
import s from "./style.module.css"

type HeaderProps = {
    tourId: number
    title: string
    rating: number
    ratingCount: number
}

export const Header: FC<HeaderProps> = ({tourId, title, ratingCount, rating}) => {

    const navigate = useNavigate()

    return (
        <div className={s.header}>
            <div className={s.tourInfo}>
                <p className={s.title}>{title}</p>
                <Rating rating={rating} ratingCount={ratingCount}/>
            </div>
            <SquareArrowOutUpRight
                onClick={() => navigate(`/${RouteNames.TOUR}/${tourId}/${encodeURIComponent(title)}`)}
                className={s.link}
                width={20}
                height={20}
            />
        </div>
    );
};