import {FC} from "react";
import s from "@/app/styles/pages.module.css";
import {FavList} from "@/features";

export const FavouritesPage: FC = () => {
    return (
        <div className={s.favorites}>
            <FavList/>
        </div>
    );
};