import {FC} from "react";
import { Heart } from "lucide-react";
import favourite from "@/shared/assets/icons/favourite.svg";
import style from "./style.module.css";
import { ITour } from "@/shared/types";
import {useAddFavFactory} from "@/features";

type ToFavProps = {
    tour: ITour
}

export const Index: FC<ToFavProps> = ({ tour }) => {

    const {isActive, clickHandler} = useAddFavFactory(tour)

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