import {FC} from "react";
import { Heart } from "lucide-react";
import favourite from "@/shared/assets/icons/favourite.svg";
import style from "./style.module.css";
import { ITour } from "@/shared/types";
import {useFavSetter} from "@/features";

type ToFavProps = {
    tour: ITour
}

export const ToFavourite: FC<ToFavProps> = ({ tour }) => {

    const {isActive, clickHandler} = useFavSetter(tour)

    return (
        <button onClick={clickHandler}>
            {isActive ? (
                <img data-testid={"fav-icon"} alt={"favourite"} src={favourite} />
            ) : (
                <Heart data-testid={"heart-icon"} className={style.heart} />
            )}
        </button>
    );
};